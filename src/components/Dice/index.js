import { Fragment, h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import dice from '../../assets/icons/dice/dice.svg';
import icon1 from '../../assets/icons/dice/dice1.svg';
import icon2 from '../../assets/icons/dice/dice2.svg';
import icon3 from '../../assets/icons/dice/dice3.svg';
import icon4 from '../../assets/icons/dice/dice4.svg';
import icon5 from '../../assets/icons/dice/dice5.svg';
import icon6 from '../../assets/icons/dice/dice6.svg';
import {
  Page,
  Area1,
  Area2,
  DiceArea,
  AbilitaSection,
  Type,
  Bonus,
  Scene,
  Cube,
  RollContainer,
  Face1, Face2, Face3, Face4, Face5, Face6,
  Button,
  Tentativi,
  DiceRemaining,
  Risultato,
  ActualResult,
  Obiettivo,
  Prosegui,
} from './styled';

function Dice({ data, caratteristiche, onend }) {
  const { corpo, mente, spirito, vita } = caratteristiche;
  const { successo, fallimento, abilita, obiettivo,lanci } = data;
  const [counter, setCounter] = useState(lanci);
  const [cube1, setCube1] = useState();
  const [diceValue1, setDiceValue1] = useState(1);
  const [cube2, setCube2] = useState();
  const [diceValue2, setDiceValue2] = useState(1);
  const [cube3, setCube3] = useState();
  const [diceValue3, setDiceValue3] = useState(1);

  useEffect(() => {
    let _cube;
    if (!cube1) {
      _cube = document.getElementById("cube1");
      setCube1(_cube);
    }
    if (!cube2) {
      _cube = document.getElementById("cube2");
      setCube2(_cube);
    }
    if (!cube3) {
      _cube = document.getElementById("cube3");
      setCube3(_cube);
    }
  }, []);

  useEffect(() => { }, [counter]);
  useEffect(() => { }, [diceValue1]);
  useEffect(() => { }, [diceValue2]);
  useEffect(() => { }, [diceValue3]);

  useEffect(() => {
    if (cube1) {
      rollDice(1);
    }
  }, [cube1]);

  useEffect(() => {
    if (cube2) {
      rollDice(2);
    }
  }, [cube2]);

  useEffect(() => {
    if (cube3) {
      rollDice(3);
    }
  }, [cube3]);

  function getRandomInt(min = 1, max = 7) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function rollDice(whichCube) {
    let randNum = getRandomInt(1, 7);
    let _cube;
    let rotationType = randNum;
    if (whichCube === 1) {
      _cube = cube1;
      if (randNum === diceValue1) rotationType = 7;
      setDiceValue1(randNum);
    } else if (whichCube === 2) {
      _cube = cube2;
      if (randNum === diceValue2) rotationType = 7;
      setDiceValue2(randNum);
    } else {
      _cube = cube3;
      if (randNum === diceValue3) rotationType = 7;
      setDiceValue3(randNum);
    }
    switch (rotationType) {
      case 1:
        _cube.style.transform = `rotateY(${getRandomInt(1, 4) * 360}deg)`;
        break;
      case 2:
        _cube.style.transform = `rotateX(${(getRandomInt(1, 4) * 360) + 90}deg)`;
        break;
      case 3:
        _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) - 90}deg)`
        break;
      case 4:
        _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) + 90}deg)`
        break;
      case 5:
        _cube.style.transform = `rotateX(${(getRandomInt(1, 4) * 360) - 90}deg)`
        break;
      case 6:
        _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) - 180}deg)`;
        break;
      default:
        // case same number
        const isX = _cube.style.transform.split('X(');
        if (isX.length === 2) {
          const newValue = parseInt(isX[1]) + 360;
          _cube.style.transform = `rotateX(${newValue}deg)`;
        } else {
          const newValue = parseInt(_cube.style.transform.split('Y(')[1]) + 360;
          _cube.style.transform = `rotateY(${newValue}deg)`;
        }
    }
  }

  function getCubeFace() {
    return html`
    <${Fragment}>
      <${Face1}><${icon1} /></ />
        <${Face2}><${icon2} /></ />
          <${Face3}><${icon3} /></ />
            <${Face4}><${icon4} /></ />
              <${Face5}><${icon5} /></ />
                <${Face6}><${icon6} /></ />
                  </ />
    `;
  }
  
  function getCube(index) {
    return html`
      <${RollContainer}>
        <${Cube} id=${`cube${index}`} isDisabled=${!counter}>
          ${getCubeFace()}
          </ />
          <${Button} isdisabled=${!counter} onClick=${() => {
          setCounter(counter - 1);
          rollDice(index)
          }}
            >Roll
            </ />
            </ />
    `;
  }

  function getRemainingDice() {
    let i = new Array(counter).fill(0);
    return html`${i.map(el => 
    html`
    <${DiceRemaining}><${dice} /><//>`)}`;
  }

  function getResult() {
    let result = 0;
    if (abilita.includes('corpo')) {
      result += corpo + diceValue1;
    }
    if (abilita.includes('mente')) {
      result += mente + diceValue2;
    }
    if (abilita.includes('spirito')) {
      result += spirito + diceValue3;
    }
    return result;
  }
  
  function prosegui() {
    if(getResult() > obiettivo) return onend(successo, true);
    else return onend(fallimento, false);
  }

  return html`
    <${Page}>
      <${Area1}>
        <${DiceArea}>
          <${AbilitaSection} disabled=${!abilita.includes('corpo')}>
            <${Type}>Corpo<//>
            <${Bonus}>${corpo}<//>
            <${Scene}>${getCube(1)}<//>
          <//>
          <${AbilitaSection} disabled=${!abilita.includes('mente')}>
            <${Type}>Mente<//>
            <${Bonus}>${mente}<//>
            <${Scene}>${getCube(2)}<//>
          <//>
          <${AbilitaSection} disabled=${!abilita.includes('spirito')}>
            <${Type}>Spirito<//>
            <${Bonus}>${spirito}<//>
            <${Scene}>${getCube(3)}<//>
          <//>
        <//>
        <${Tentativi}>
          Lanci rimasti ${getRemainingDice()}
        <//>
      <//>
      <${Area2}>
        <${Risultato}>
          <${Obiettivo}>Supera ${obiettivo}<//>
          <${ActualResult}>
            ${getResult()}
          <//>
        <//>
        <${Prosegui} onClick=${() => prosegui()}>Prosegui<//>
      <//>
    <//>
  `;
}

export default Dice;