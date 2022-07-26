import { Fragment, h } from "preact";
import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import TitleIcon from "../TitleIcon";
import dice from "../../assets/icons/dice/dice.svg";

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
  Face1,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  Tentativi,
  DiceRemaining,
  Risultato,
  ActualResult,
  Obiettivo,
  Prosegui,
} from "./styled";

function Dice({ data, caratteristiche, onend }) {
  const { corpo, mente, spirito } = caratteristiche;
  const { successo, fallimento, abilita, obiettivo, lanci } = data;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [counter]);
  useEffect(() => {}, [diceValue1]);
  useEffect(() => {}, [diceValue2]);
  useEffect(() => {}, [diceValue3]);

  useEffect(() => {
    if (cube1) {
      rollDice(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cube1]);

  useEffect(() => {
    if (cube2) {
      rollDice(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cube2]);

  useEffect(() => {
    if (cube3) {
      rollDice(3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // let oldValue;
    if (whichCube === 1) {
      // oldValue = diceValue1;
      _cube = cube1;
      if (randNum === diceValue1) rotationType = 7;
      setDiceValue1(randNum);
    } else if (whichCube === 2) {
      // oldValue = diceValue1;
      _cube = cube2;
      if (randNum === diceValue2) rotationType = 7;
      setDiceValue2(randNum);
    } else {
      // oldValue = diceValue1;
      _cube = cube3;
      if (randNum === diceValue3) rotationType = 7;
      setDiceValue3(randNum);
    }
    // console.log("rotazione", rotationType);
    switch (rotationType) {
      case 1:
        _cube.style.transform = `rotateY(360deg) translateZ(0)`;
        break;
      case 2:
        _cube.style.transform = `rotateX(90deg) translateZ(0)`;
        break;
      case 3:
        _cube.style.transform = `rotateY(-90deg) translateZ(0)`;
        break;
      case 4:
        _cube.style.transform = `rotateY(90deg) translateZ(0)`;
        break;
      case 5:
        _cube.style.transform = `rotateX(-90deg) translateZ(0)`;

        break;
      case 6:
        _cube.style.transform = `rotateY(-180deg) translateZ(0)`;
        break;
      default:
        // case same number
        // eslint-disable-next-line no-case-declarations
        const isX = _cube.style.transform.split("X(");
        if (isX.length === 2) {
          const newValue = parseInt(isX[1], 10) + 360;
          // console.log(`oldValue ${parseInt(isX[1], 10)}; newValue ${newValue}`);
          _cube.style.transform = `rotateX(${newValue}deg) translateZ(0)`;
        } else {
          const newValue =
            parseInt(_cube.style.transform.split("Y(")[1], 10) + 360;
          // console.log(
          //   `oldValue ${parseInt(
          //     _cube.style.transform.split("Y(")[1],
          //     10
          //   )}; newValue ${newValue}`
          // );
          _cube.style.transform = `rotateY(${newValue}deg) translateZ(0)`;
        }
    }
  }

  function getCubeFace() {
    return html`
      <${Fragment}>
        <${Face1}><${TitleIcon} type=${"dice1"} /></${Face1}>
        <${Face2}><${TitleIcon} type=${"dice2"} /></${Face2}>
        <${Face3}><${TitleIcon} type=${"dice3"} /></${Face3}>
        <${Face4}><${TitleIcon} type=${"dice4"} /></${Face4}>
        <${Face5}><${TitleIcon} type=${"dice5"} /></${Face5}>
        <${Face6}><${TitleIcon} type=${"dice6"} /></${Face6}>
      </${Fragment}>
    `;
  }

  function getCube(index) {
    return html`
      <${RollContainer}>
        <${Cube}
          id=${`cube${index}`}
          isDisabled=${counter < 1}
          style=${{ transform: "rotateY(0deg)" }}
          onClick=${(evt) => {
            setCounter(counter - 1);
            rollDice(index);
            evt.preventDefault();
            evt.stopPropagation();
          }}
        >
          ${getCubeFace()}
        <//>
      <//>
    `;
  }

  function getRemainingDice() {
    let i = new Array(counter).fill(0);
    return html`${i.map(() => html`<${DiceRemaining}><${dice} /><//>`)}`;
  }

  function getResult() {
    let result = 0;
    if (abilita.includes("corpo")) {
      result += corpo + diceValue1;
    }
    if (abilita.includes("mente")) {
      result += mente + diceValue2;
    }
    if (abilita.includes("spirito")) {
      result += spirito + diceValue3;
    }
    return result;
  }

  function prosegui() {
    if (getResult() > obiettivo)
      return onend(successo, true, data.abilita.length, "dice");
    return onend(fallimento, false, data.abilita.length, "dice");
  }

  return html`
    <${Page}>
      <${Area1}>
        <${Tentativi}>
          Lanci rimasti ${getRemainingDice()}
        </${Tentativi}>
        <${DiceArea}>
          <${AbilitaSection} disabled=${!abilita.includes("corpo")}>
            <${Type}>Corpo <${TitleIcon} type=${"corpo"} /></${Type}>
            <${Bonus}>${corpo}</${Bonus}>
            <${Scene}>${getCube(1)}</${Scene}>
          </${AbilitaSection}>
          <${AbilitaSection} disabled=${!abilita.includes("mente")}>
            <${Type}>Mente <${TitleIcon} type=${"mente"} /></${Type}>
            <${Bonus}>${mente}</${Bonus}>
            <${Scene}>${getCube(2)}</${Scene}>
          </${AbilitaSection}>
          <${AbilitaSection} disabled=${!abilita.includes("spirito")}>
            <${Type}>Spirito <${TitleIcon} type=${"spirito"} /></${Type}>
            <${Bonus}>${spirito}</${Bonus}>
            <${Scene}>${getCube(3)}</${Scene}>
          </${AbilitaSection}>
        </${DiceArea}>
      </${Area1}>
      <${Area2}>
        <${Risultato}>
          <span>Totale</span>
          <${ActualResult}>
            ${getResult()}
          </${ActualResult}>
          <${Obiettivo} valid=${getResult() > obiettivo}>
            ${
              getResult() > obiettivo
                ? `Bravo! Hai raggiunto ${obiettivo + 1}`
                : `Fai almeno ${obiettivo + 1}`
            }
          </${Obiettivo}>
        </${Risultato}>
        <${Prosegui} valid=${getResult() > obiettivo} onClick=${() =>
    prosegui()}>Prosegui<//>
      </${Area2}>
    </${Page}>
  `;
}

export default Dice;
