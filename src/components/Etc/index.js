import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import Chart from 'chart.js/auto';
import generate from './data';

function Etc({ MaxCounter = 5 }) {
  const MaxPicchi = 3;
  const MaxPoint = 50;
  const totalDuration = 4000;
  const delayBetweenPoints = totalDuration / 50; //data.length;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

  const [chartData, setChartData] = useState([])
  const [chart, setChart] = useState(0);
  const [animationEnd, setAnimationEnd] = useState(false);

  const [counterDrawTimes, setCounterDrawTimes] = useState(MaxCounter);
  const [successList, setSuccess] = useState([]);
  const [userClickedCounter, setUserClickedCounter] = useState(0);

  useEffect(() => {
    // console.log('first');
    // console.log('useEffect []');
    const generated = generate(MaxPicchi, MaxPoint)
    setChartData(state => {
      // console.log(state);
      generated;
    });
    console.log(chartData);
  }, []);

  useEffect(() => {
    // console.log('useEffect [animationEnd]');
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
    // console.log('useEffect [counterDrawTimes]');
    if (counterDrawTimes) {
      if (chart) {
        setUserClickedCounter(0);
        chart.destroy();
      }
      const generated = generate(MaxPicchi, MaxPoint);
      console.log('generated ', generated.peaks);
      setChartData(state => generated);
      const ctx = document.getElementById('myChart').getContext("2d");
      const newChart = new Chart(ctx, config(generated.data));
      setChart(newChart);
      setUserClickedCounter(0);

      setTimeout(() => {
        setCounterDrawTimes(counterDrawTimes - 1);
      }, totalDuration + 500);
    }
  }, [counterDrawTimes]);


  const animation = {
    onComplete: () => {
      console.log('onComplete');
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
    console.log('config');
    return {
      type: 'line',
      data: {
        datasets: [{
          borderColor: 'green',
          borderWidth: 1,
          radius: 0,
          data: data, //generate(MaxPicchi, MaxPoint).data,
        }]
      },
      options: {
        animation,
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            type: 'linear'
          },
          y: {
            min: -50,
            max: 150,
          }
        }
      }
    }
  }

  return (
    <div>
      <button onclick={() => {
        setUserClickedCounter(state => userClickedCounter + 1);
      }}>Click me {userClickedCounter}</button>
      <div>{successList.map(el => (
        <span>{el ? ' success' : ' fallimento'}</span>
      ))}</div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>

  );
}

export default Etc;