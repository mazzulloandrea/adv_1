import { h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import heart from '/assets/images/heart.jpeg';
import successIcon from '/assets/images/success.png';
import failureIcon from '/assets/images/failure.png';
import Chart from 'chart.js/auto';
import generate from './data';
import { determinateVictory } from '../utils';
import style from './style.css';


function Etc({ data, onend, MaxCounter = 10, MaxPicchi = 5, orientation = 0 }) {
  const { successo, fallimento } = data;
  // const MaxPicchi = 5; // c'è un max oltre il quale si inchioda
  const MaxPoint = 100;
  const totalDuration = 4000;
  const delayBetweenPoints = (totalDuration / MaxPoint) * 0.5; //data.length;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

  const [chartData, setChartData] = useState([])
  const [chart, setChart] = useState(0);
  const [animationEnd, setAnimationEnd] = useState(false);

  const [counterDrawTimes, setCounterDrawTimes] = useState(MaxCounter);
  const [successList, setSuccess] = useState([]);
  const [userClickedCounter, setUserClickedCounter] = useState(0);

  const [graphOrientation, setOrientation] = useState(orientation);

  useEffect(() => {
    const generated = generate(MaxPicchi, MaxPoint);
    setChartData(state => {
      generated;
    });
  }, []);

  useEffect(() => {
    console.log('orientattion change', graphOrientation);
    if (chart) {
      chart.helpers.each(Chart.instances, function (instance) {
        // If the responsive flag is set in the chart instance config
        // Cascade the resize event down to the chart.
        if (instance.options.responsive) {
          instance.resize(instance.render, true);
        }
      });
    }
  }, [graphOrientation]);

  useEffect(() => {
    if (animationEnd && chartData.peaks !== undefined) {
      console.log(`vediamo se ho vinto - picchi = ${chartData.peaks}, userClickedCounter =${userClickedCounter}`);
      if (chartData.peaks === userClickedCounter) {
        setSuccess(successList.concat(true));
      } else {
        setSuccess(successList.concat(false));
      }
    }
    setAnimationEnd(false);
  }, [animationEnd]);

  useEffect(() => {
    if (counterDrawTimes) {
      if (chart) {
        setUserClickedCounter(0);
        chart.destroy();
      }
      const generated = generate(MaxPicchi, MaxPoint);
      setChartData(state => generated);
      const ctx = document.getElementById('myChart').getContext("2d");
      const newChart = new Chart(ctx, config(generated.data));
      setChart(newChart);
      setUserClickedCounter(0);
      // if (counterDrawTimes === 0) {
      //   console.log('finito');
      // }
      setTimeout(() => {
        setCounterDrawTimes(counterDrawTimes - 1);
      }, totalDuration + 500);
    } else {
      const result = determinateVictory(successList);
      onend(result ? successo : fallimento);
    }
  }, [counterDrawTimes]);

  const animation = {
    onComplete: () => {
      setAnimationEnd(true);
    },
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    }
  };

  const config = (data) => {
    return {
      type: 'line',
      data: {
        datasets: [{
          borderColor: 'green',
          borderWidth: 3,
          radius: 0,
          data: data,
        }]
      },
      options: {
        animation,
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false,
          tooltip: {
            enabled: false
          }
        },
        scales: {
          x: {
            type: 'linear'
          },
          y: {
            min: -20,
            max: 60,
          }
        }
      }
    }
  }

  return html`
    <div>
      <div class=${style.header}>
        <div class=${style.spiega}>Premi sul cuore come indicato dal grafico</div>
        <div class=${style.pulseContainer}>
          <img class=${style.pulseHard} src=${heart} alt="" onclick=${()=> {
          setUserClickedCounter(userClickedCounter + 1);
          }} />
        </div>
        <div class=${style.feedbackContainer}>${successList.map(el => 
          html`
            <img class=${style.feedback} src=${el ? successIcon : failureIcon} />
          `
        )}</div>
      </div>
      <div class=${style.canvasContainer}>
        <canvas id="myChart" width="0" height="0"></canvas>
      </div>
    </div>
  `
}

export default Etc;