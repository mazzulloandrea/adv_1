import { Fragment, h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import TitleIcon from '../TitleIcon';
import dice from '../../assets/icons/dice/dice.svg';
// import icon1 from '../../assets/icons/dice/dice1.svg';
// import icon2 from '../../assets/icons/dice/dice2.svg';
// import icon3 from '../../assets/icons/dice/dice3.svg';
// import icon4 from '../../assets/icons/dice/dice4.svg';
// import icon5 from '../../assets/icons/dice/dice5.svg';
// import icon6 from '../../assets/icons/dice/dice6.svg';
import icon1 from '../../assets/icons/dice/dice1.png';
import icon2 from '../../assets/icons/dice/dice2.png';
import icon3 from '../../assets/icons/dice/dice3.png';
import icon4 from '../../assets/icons/dice/dice4.png';
import icon5 from '../../assets/icons/dice/dice5.png';
import icon6 from '../../assets/icons/dice/dice6.png';
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
  Tentativi,
  DiceRemaining,
  Risultato,
  ActualResult,
  Obiettivo,
  Prosegui,
  CubeFace1, CubeFace2, CubeFace3, CubeFace4, CubeFace5, CubeFace6
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
    let oldValue;
    if (whichCube === 1) {
      oldValue = diceValue1;
      _cube = cube1;
      if (randNum === diceValue1) rotationType = 7;
      setDiceValue1(randNum);
    } else if (whichCube === 2) {
      oldValue = diceValue1;
      _cube = cube2;
      if (randNum === diceValue2) rotationType = 7;
      setDiceValue2(randNum);
    } else {
      oldValue = diceValue1;
      _cube = cube3;
      if (randNum === diceValue3) rotationType = 7;
      setDiceValue3(randNum);
    }
    console.log('rotazione', rotationType);
    switch (rotationType) {
      case 1:
        // _cube.style.transform = `rotateY(${getRandomInt(1, 4) * 360}deg) translateZ(0)`;
        _cube.style.transform = `rotateY(360deg) translateZ(0)`;
        // _cube.style.transform = `rotateY(0deg)`;
        // _cube.style.transform = `rotateY(180deg) translateZ(0)`;
        break;
      case 2:
        // _cube.style.transform = `rotateX(${(getRandomInt(1, 4) * 360) + 90}deg) translateZ(0)`;
        _cube.style.transform = `rotateX(90deg) translateZ(0)`;
        // _cube.style.transform = `rotateX(90deg)`;
        // _cube.style.transform = `rotateX(-90deg) translateZ(0)`;
        break;
      case 3:
        // _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) - 90}deg) translateZ(0)`;
        _cube.style.transform = `rotateY(-90deg) translateZ(0)`;
        // _cube.style.transform = `rotateY(-90deg)`;
        // _cube.style.transform = `rotateY(-90deg) translateZ(0)`;
        break;
      case 4:
        // _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) + 90}deg) translateZ(0)`;
        _cube.style.transform = `rotateY(90deg) translateZ(0)`;
        // _cube.style.transform = `rotateY(90deg)`;
        // _cube.style.transform = `rotateY(90deg) translateZ(0)`;
        break;
      case 5:
        _cube.style.transform = `rotateX(${(getRandomInt(1, 4) * 360) - 90}deg) translateZ(0)`;
        _cube.style.transform = `rotateX(-90deg) translateZ(0)`;
        // _cube.style.transform = `rotateX(-90deg)`
        // _cube.style.transform = `rotateY(-180deg) translateZ(0)`;
        
        break;
      case 6:
        _cube.style.transform = `rotateY(${(getRandomInt(1, 4) * 360) - 180}deg) translateZ(0)`;
        // _cube.style.transform = `rotateY(-180deg)`;
        // _cube.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
        break;
      default:
        // case same number
        const isX = _cube.style.transform.split('X(');
        if (isX.length === 2) {
          const newValue = parseInt(isX[1]) + 360;
          console.log(`oldValue ${parseInt(isX[1])}; newValue ${newValue}`);
          _cube.style.transform = `rotateX(${newValue}deg) translateZ(0)`;
        } else {
          const newValue = parseInt(_cube.style.transform.split('Y(')[1]) + 360;
          console.log(`oldValue ${parseInt(_cube.style.transform.split('Y(')[1])}; newValue ${newValue}`);
          _cube.style.transform = `rotateY(${newValue}deg) translateZ(0)`;
        }
    }
  }

  function getCubeFace() {
    return html`
      <${Fragment}>
        <!-- <${CubeFace1} type=${"face1"}>1</div>
        <${CubeFace2} type=${"face2"}>2</div>
        <${CubeFace3} type=${"face3"}>3</div>
        <${CubeFace4} type=${"face4"}>4</div>
        <${CubeFace5} type=${"face5"}>5</div>
        <${CubeFace6} type=${"face6"}>6</div> -->

        <!-- <${Face1}>1</${Face1}>
        <${Face2}>2</${Face2}>
        <${Face3}>3</${Face3}>
        <${Face4}>4</${Face4}>
        <${Face5}>5</${Face5}>
        <${Face6}>6</${Face6}> -->

        <!-- <${Face1}><img src=${icon1} /></${Face1}>
        <${Face2}><img src=${icon2} /></${Face2}>
        <${Face3}><img src=${icon3} /></${Face3}>
        <${Face4}><img src=${icon4} /></${Face4}>
        <${Face5}><img src=${icon5} /></${Face5}>
        <${Face6}><img src=${icon6} /></${Face6}> -->
      
        <${Face1}><${TitleIcon} type=${'dice1'} /></${Face1}>
        <${Face2}><${TitleIcon} type=${'dice2'} /></${Face2}>
        <${Face3}><${TitleIcon} type=${'dice3'} /></${Face3}>
        <${Face4}><${TitleIcon} type=${'dice4'} /></${Face4}>
        <${Face5}><${TitleIcon} type=${'dice5'} /></${Face5}>
        <${Face6}><${TitleIcon} type=${'dice6'} /></${Face6}>
        
      </${Fragment}>
    `;
  }
  
  function getCube(index) {
    return html`
      <${RollContainer}>
        <${Cube} id=${`cube${index}`} isDisabled=${counter < 1} style=${{transform: 'rotateY(0deg)'}}
          onClick=${(evt) => {
            setCounter(counter - 1);
            rollDice(index);
            evt.preventDefault();
            evt.stopPropagation();
          }} 
        >
          ${getCubeFace()}
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
        <${Tentativi}>
          Lanci rimasti ${getRemainingDice()}
        <//>
        <${DiceArea}>
          <${AbilitaSection} disabled=${!abilita.includes('corpo')}>
            <${Type}>Corpo <${TitleIcon} type=${"corpo"} /><//>
            
            <${Bonus}>${corpo}<//>
            <${Scene}>${getCube(1)}<//>
          <//>
          <${AbilitaSection} disabled=${!abilita.includes('mente')}>
            <${Type}>Mente <${TitleIcon} type=${"mente"} /><//>
            
            <${Bonus}>${mente}<//>
            <${Scene}>${getCube(2)}<//>
          <//>
          <${AbilitaSection} disabled=${!abilita.includes('spirito')}>
            <${Type}>Spirito <${TitleIcon} type=${"spirito"} /><//>
            
            <${Bonus}>${spirito}<//>
            <${Scene}>${getCube(3)}<//>
          <//>
        <//>
      <//>
      <${Area2}>
        <${Risultato}>
          <span>Totale</span>
          <${ActualResult}>
            ${getResult()}
          <//>
          <${Obiettivo} valid=${getResult() > obiettivo}>
            ${getResult() > obiettivo 
              ? `Bravo! Hai raggiunto ${obiettivo}` 
              : `Fai almeno ${obiettivo}`}
          </${Obiettivo}>
        <//>
        <${Prosegui} onClick=${() => prosegui()}>Prosegui<//>
      <//>
    <//>
  `;
}

export default Dice;