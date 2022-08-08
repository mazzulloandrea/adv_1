import { h } from 'preact';
import { html } from 'htm/preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import targetImg from '../../assets/images/index.jpg';
import style from './style.css';
import { determinateVictory, shuffle } from '../utils';

const stub = {
  colpi: 1,
  jolly: 1, // compaiono dentro il mirino
  movimenti: 5,
  shootCount: 3,
  delayTime: 1000,
  target: {
    x1: 40,
    x2: 80,
    y1: 30,
    y2: 60,
  },
  mirino: {
    width: 15,
    height: 15,
  }
};

const Rand = (x) => Math.floor(Math.random() * x);

const newArrayFn = (x) => new Array(x)

function Shoot({ data, onend }) {
  const { successo, fallimento, params = stub } = data;
  const { shootCount, mirino, target, colpi, movimenti, delayTime } = params;
  const [animationList, setAnimationList] = useState("init")
  const [enable, setEnable] = useState(true);
  const [successList, setSuccess] = useState([]);
  const targetRef = useRef(null);
  const [counter, setCounter] = useState(shootCount);

  useEffect(() => {
    const mirinoStyle = document.getElementById("mirino").style;
    const { width, height } = mirino;
    mirinoStyle.width = `${width}vw`;
    mirinoStyle.height = `${height}vw`;

    const targetImg = document.getElementById("target");
    const { x1, x2, y1, y2 } = target;
    targetImg.style.width = `${x2 - x1}vw`;
    targetImg.style.height = `${y2 - y1}vh`;
    setAnimationList(generate());
  }, []);

  useEffect(() => {
    if (animationList === "init") return;
    if (!animationList.length) {
      const result = determinateVictory(successList);
      onend(result ? successo : fallimento, result);
    } else {
      startAnimation(animationList[0].x, animationList[0].y);
    }
  }, [animationList]);

  useEffect(() => {
    // animazione ad ogni colpo effettuato
    // if (counter !== shootCount)
    // console.log('animazione', successList);
  }, [counter]);

  const generate = () => {
    // const { colpi, movimenti } = params;
    const turnOrder = newArrayFn();
    for (let i = 0; i < colpi; i++) {
      turnOrder[i] = generateCoord(true);
    }
    for (let i = colpi; i < movimenti; i++) {
      turnOrder[i] = generateCoord(false);
    }
    // shuffle 
    return shuffle(turnOrder);
  }

  const generateCoord = (shooted) => {
    const x = 100 - mirino.width;
    const y = 100 - mirino.height;
    let coordX = Rand(x);
    let coordY = Rand(y);
    const { x1, x2, y1, y2 } = target;

    if (shooted) {
      while (coordX < x1 || coordX > x2) {
        coordX = Rand(x);
      };
      while (coordY < y1 || coordY > y2) {
        coordY = Rand(y);
      }
    } else {
      while (coordX < 0 && coordX > x1 && coordX < x2) {
        coordX = Rand(x);
      };
      while (coordY < 0 && coordY > y1 && coordY < y2) {
        coordY = Rand(y);
      }
    }
    return {
      x: coordX,
      y: coordY,
    }
  }

  const startAnimation = (x2, y2) => {
    const elem = document.getElementById("mirino");

    const id = setInterval(() => frame(x2, y2), 45);

    function frame(x2, y2) {
      let x1 = parseInt(elem.style.left) || 0;
      let y1 = parseInt(elem.style.top) || 0;
      if (x1 === x2 && y1 === y2) {
        clearInterval(id);
        if (animationList.length) {
          // startAnimation(AnimationList[0].x, AnimationList[0].y);
          // AnimationList.shift();
          setAnimationList(animationList.slice(1, animationList.length))
        }
      } else {
        const X = x1 > x2 ? x1 - 1 : x1 === x2 ? x1 : x1 + 1;
        const Y = y1 > y2 ? y1 - 1 : y1 === y2 ? y1 : y1 + 1;
        elem.style.left = `${X}vw`;
        elem.style.top = `${Y}vh`;
      }
    };
  }

  const verifyShoot = (evt) => {
    if (!enable || !counter) {
      evt.preventDefault();
      return false;
    }
    setCounter(counter - 1);
    const elem = document.getElementById('mirino');
    const pos = elem.getBoundingClientRect();

    const target = targetRef.current.getBoundingClientRect();
    if (
      pos.right > target.left && pos.left < target.right &&
      pos.bottom > target.top && pos.top < target.bottom
    ) {
      setSuccess(successList.concat(true));
    } else {
      // delay!!!
      setSuccess(successList.concat(false));
      setEnable(false);
      document.getElementById("delay").classList.toggle(style.delay);
      setTimeout(() => {
        document.getElementById("delay").classList.toggle(style.delay);
        setEnable(true)
      }, delayTime);
    }
  }

  return html`
    <div id="delay" class=${style.overlay}>
      <div>
        ${successList.map(el => html`
        <span>${el ? ' success' : ' fallimento'}</span>
        `)}
      </div>
      <div id="mirino" class=${style.shooter} onclick=${(evt) => verifyShoot(evt)}>
        <div id="jolly" class="inside_mirino"></div>
      </div>
      <div class=${style.targetContainer}>
        <img id="target" src=${targetImg} alt="" ref=${targetRef} />
      </div>
    </div>
  `
}

export default Shoot;
