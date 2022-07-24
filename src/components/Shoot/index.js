import { useState, useEffect, useRef } from 'preact/hooks';
import viewfinder from '../../assets/images/viewfinder.png';
import targetImg from '../../assets/images/index.jpg';
import style from './style.css';

function Shoot() {
  const stub = {
    colpi: 1,
    jolly: 1, // compaiono dentro il mirino
    movimenti: 10,
    shooCount: 3,
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
  const AnimationList = new Array(stub.movimenti);
  const [enable, setEnable] = useState(true);
  const [successList, setSuccess] = useState([]);
  const targetRef = useRef(null);
  const [counter, setCounter] = useState(stub.shooCount);

  useEffect(() => {
    console.log('[')
    const mirinoStyle = document.getElementById("mirino").style;
    const { width, height } = stub.mirino;
    mirinoStyle.width = `${width}vw`;
    mirinoStyle.height = `${height}vw`;

    const target = document.getElementById("target");
    const { x1, x2, y1, y2 } = stub.target;
    target.style.width = `${x2 - x1}vw`;
    target.style.height = `${y2 - y1}vh`;
    // setTarget(target.getBoundingClientRect());
    generate();
    startAnimation(AnimationList[0].x, AnimationList[0].y);
    AnimationList.shift();
  }, []);

  useEffect(() => {
    console.log('counter -1', counter);
  }, [counter]);

  const generate = () => {
    const { colpi, movimenti } = stub;
    for (let i = 0; i < colpi; i++) {
      AnimationList[i] = generateCoord(true);
    }
    for (let i = colpi; i < movimenti; i++) {
      AnimationList[i] = generateCoord(false);
    }
    // shuffle 
    return shuffle(AnimationList);
  }

  const generateCoord = (shooted) => {
    let coordX = Rand(100);
    let coordY = Rand(100);
    const { x1, x2, y1, y2 } = stub.target;

    if (shooted) {
      while (coordX < x1 || coordX > x2) {
        coordX = Rand(100);
      };
      while (coordY < y1 || coordY > y2) {
        coordY = Rand(100);
      }
    } else {
      while (coordX > x1 && coordX < x2) {
        coordX = Rand(100);
      };
      while (coordY > y1 && coordY < y2) {
        coordY = Rand(100);
      }
    }
    return {
      x: coordX,
      y: coordY,
    }
  }

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const startAnimation = (x2, y2) => {
    const elem = document.getElementById("mirino");

    clearInterval(id);
    const id = setInterval(() => frame(x2, y2), 45);

    function frame(x2, y2) {
      // console.log(elem.getBoundingClientRect());
      let x1 = parseInt(elem.style.left) || 0;
      let y1 = parseInt(elem.style.top) || 0;
      if (x1 === x2 || y1 === y2) {
        clearInterval(id);
        if (AnimationList.length) {
          startAnimation(AnimationList[0].x, AnimationList[0].y);
          AnimationList.shift();
          // decrementMovements(movements - 1);
          stub.movimenti--;
        }
      } else {
        const X = x1 > x2 ? x1 - 1 : x1 + 1;
        const Y = y1 > y2 ? y1 - 1 : y1 + 1;
        elem.style.left = `${X}vw`;
        elem.style.top = `${Y}vh`;
      }
    };
  }

  const verifyShoot = (evt) => {
    // console.log(evt);

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
      }, stub.delayTime);
    }
  }

  return (
    <div id="delay" class={style.overlay}>
      <div id="a"></div>
      <div id="mirino" class={style.shooter} onclick={(evt) => verifyShoot(evt)}>
        {/* <img src={viewfinder} alt="" /> */}
      </div>
      <div class={style.targetContainer}>
        <img id="target" src={targetImg} alt="" ref={targetRef} />
      </div>
      <div>{successList.map(el => (
        <span>{el ? ' success' : ' fallimento'}</span>
      ))}</div>
    </div >
  )

  // const Rand = (x) => Math.floor(Math.random() * x);
  // const AnimationList = new Array(stub.movimenti);
  // const [enable, setEnable] = useState(true);
  // const [successList, setSuccess] = useState([]);
  // const [target, setTarget] = useState();

  // useEffect(() => {
  //   const mirinoStyle = document.getElementById("mirino").style;
  //   const { width, height } = stub.mirino;
  //   mirinoStyle.width = `${width}vw`;
  //   mirinoStyle.height = `${height}vw`;
  //   // console.log(mirinoStyle);
  //   const target = document.getElementById("target");
  //   const { x1, x2, y1, y2 } = stub.target;
  //   target.style.width = `${x2 - x1}vw`;
  //   target.style.height = `${y2 - y1}vh`;
  //   setTarget(target.getBoundingClientRect());

  //   generate();
  //   startAnimation(AnimationList[0].x, AnimationList[0].y);
  //   AnimationList.shift();
  //   // decrementMovements(movements - 1);
  //   stub.movimenti--;
  // }, []);

  // return (
  //   <div id="delay" class={style.overlay}>
  //     <div id="a"></div>
  //     <div id="mirino" class={style.shooter} onclick={(evt) => verifyShoot(evt)}>
  //       {/* <img src={viewfinder} alt="" /> */}
  //     </div>
  //     <div class={style.targetContainer}>
  //       <img id="target" src={targetImg} alt="" />
  //     </div>
  //     <div>{successList.map(el => (
  //       <span>{el ? ' success' : ' fallimento'}</span>
  //     ))}</div>
  //   </div >
  // )
}

export default Shoot;