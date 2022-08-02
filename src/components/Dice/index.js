import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import diceStyle from './style.css'; //'./dice.css';
import icon1 from '../../assets/icons/dice-six-faces-one.svg';
import icon2 from '../../assets/icons/dice-six-faces-two.svg';
import icon3 from '../../assets/icons/dice-six-faces-three.svg';
import icon4 from '../../assets/icons/dice-six-faces-four.svg';
import icon5 from '../../assets/icons/dice-six-faces-five.svg';
import icon6 from '../../assets/icons/dice-six-faces-six.svg';

function Dice() {
  const [diceValue, setDiceValue] = useState(1);
  const [cube, setCube] = useState();

  useEffect(() => {
    if (!cube) {
      const _cube = document.getElementById("cube");
      setCube(_cube);
    }
  }, []);

  useEffect(() => { }, [diceValue]);

  useEffect(() => {
    if (cube) {
      rollDice();
    }
  }, [cube]);

  function getRandomInt(min = 1, max = 7) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function rollDice() {
    let randNum = getRandomInt(1, 7)
    setDiceValue(randNum);
    switch (randNum) {
      case 1:
        cube.style.transform = `translateZ(-100px) rotateY(${getRandomInt(1, 4) * 360}deg)`;
        break;
      case 2:
        cube.style.transform = `translateZ(-100px) rotateY(${getRandomInt(1, 4) * -180}deg)`;
        break;
      case 3:
        cube.style.transform = `translateZ(-100px) rotateY(${getRandomInt(1, 4) * -90}deg)`
        break;
      case 4:
        cube.style.transform = `translateZ(-100px) rotateY(${getRandomInt(1, 4) * -90}deg)`
        break;
      case 5:
        cube.style.transform = `translateZ(-100px) rotateX(${getRandomInt(1, 4) * -90}deg)`
        break;
      // case 6:
      default:
        cube.style.transform = `translateZ(-100px) rotateX(${getRandomInt(1, 4) * 90}deg)`;
    }
  }

  return (
    <div class={diceStyle.scene}>
      <div id="cube" class={diceStyle.cube}>
        <div class={diceStyle.cube__face1 + ' ' + diceStyle.tr1}><img src={icon1} /></div>
        <div class={diceStyle.cube__face2 + ' ' + diceStyle.tr2}><img src={icon2} /></div>
        <div class={diceStyle.cube__face3 + ' ' + diceStyle.tr3}><img src={icon3} /></div>
        <div class={diceStyle.cube__face4 + ' ' + diceStyle.tr4}><img src={icon4} /></div>
        <div class={diceStyle.cube__face5 + ' ' + diceStyle.tr5}><img src={icon5} /></div>
        <div class={diceStyle.cube__face6 + ' ' + diceStyle.tr6}><img src={icon6} /></div>
      </div>

      <button class={diceStyle.rollBtn} onclick={() => rollDice()}>Roll the Dice</button>
    </div>
  )
}

export default Dice;