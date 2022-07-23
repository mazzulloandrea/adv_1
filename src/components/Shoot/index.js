import { useEffect } from 'preact/hooks';
import viewfinder from '../../assets/images/viewfinder.png';
import target from '../../assets/images/index.jpg';
import style from './style.css';

function Shoot() {
  const stub = {
    colpi: 2,
    movimenti: 10,
    target: {
      x1: 40,
      x2: 80,
      y1: 30,
      y2: 60,
    }
  };

  const Rand = (x) => Math.floor(Math.random() * x);
  const AnimationList = new Array(stub.movimenti);

  useEffect(() => {
    generate();
    startAnimation(AnimationList[0].x, AnimationList[0].y);
    AnimationList.shift();
  }, []);

  // selezione casuale di 2 colpi su 10 movimenti
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
        console.log(coordX)
      };
      while (coordY < y1 || coordY > y2) {
        coordY = Rand(100);
        console.log(coordY)
      }
    } else {
      while (coordX > x1 && coordX < x2) {
        coordX = Rand(100);
        console.log(coordX)
      };
      while (coordY > y1 && coordY < y2) {
        coordY = Rand(100);
        console.log(coordY)
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
    const id = setInterval(() => frame(x2, y2), 15);

    function frame(x2, y2) {
      let x1 = parseInt(elem.style.left) || 0;
      let y1 = parseInt(elem.style.top) || 0;
      if (x1 === x2 || y1 === y2) {
        clearInterval(id);
        if (AnimationList.length) {
          startAnimation(AnimationList[0].x, AnimationList[0].y);
          AnimationList.shift();
        }
      } else {
        const X = x1 > x2 ? x1 - 1 : x1 + 1;
        const Y = y1 > y2 ? y1 - 1 : y1 + 1;
        elem.style.left = `${X}vw`;
        elem.style.top = `${Y}vh`;
      }
    };
  }

  const verifyShoot = (x, y) => {
    console.log(x);
    const { x1, x2, y1, y2 } = stub.target;
    console.log(x1, x2, y1, y2);
    if ((x >= x1 || x <= x2) && (y >= y1 || y <= y2)) {
      return true;
    }
    // delay!!!
    return false;
  }



  return (
    <div>
      <div id="mirino" class={style.shooter} onclick={(el) => verifyShoot(el)}>
        <img src={viewfinder} alt="" />
      </div>
      <div id="img_container" class={style.targetContainer}>
        <img src={target} alt="" />
      </div>
      Shoot
    </div>
  )
}

export default Shoot;