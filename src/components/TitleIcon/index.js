import { h } from 'preact';
import { html } from 'htm/preact';

import corpo from '../../assets/icons/intestazione/caratteristiche/corpo.svg';
import mente from '../../assets/icons/intestazione/caratteristiche/mente.svg';
import spirito from '../../assets/icons/intestazione/caratteristiche/spirito.svg';
import cuore from '../../assets/icons/intestazione/caratteristiche/cuore.svg';


import borsello from '../../assets/icons/intestazione/borsello.svg';
import zaino from '../../assets/icons/intestazione/zaino.svg';
import chiavi from '../../assets/icons/intestazione/chiavi.svg';

import dices from '../../assets/icons/dice/dices.svg';
import dice1 from '../../assets/icons/dice/dice1.svg';
import dice2 from '../../assets/icons/dice/dice2.svg';
import dice3 from '../../assets/icons/dice/dice3.svg';
import dice4 from '../../assets/icons/dice/dice4.svg';
import dice5 from '../../assets/icons/dice/dice5.svg';
import dice6 from '../../assets/icons/dice/dice6.svg';

import cubes from '../../assets/icons/gioco9/gioco9.svg';

import directions from '../../assets/icons/risposte/directions.svg';

import question from '../../assets/icons/text/question.svg';

import morte from '../../assets/icons/ferite/morte.svg';
// import etc from '../../assets/icons/etc/etc.svg';

// import shoot from '../../assets/icons/shoot/shoot.svg';

// import cassaforte from '../../assets/icons/cassaforte/cassaforte.svg';
import scrigno from '../../assets/icons/cassaforte/scrigno.svg';
import lucchetto from '../../assets/icons/cassaforte/lucchetto.svg';
import zainoList from '../../assets/icons/zaino';
import timer from '../../assets/icons/traguardi/timer.svg';
import aaron from '../../assets/icons/traguardi/aaron.svg';
import uccidere from '../../assets/icons/traguardi/uccidere.svg';
import ok from '../../assets/icons/traguardi/ok.svg';
import ko from '../../assets/icons/traguardi/ko.svg';
import primaProva from '../../assets/icons/traguardi/primaProva.svg';
import secondaProva from '../../assets/icons/traguardi/secondaProva.svg';
import terzaProva from '../../assets/icons/traguardi/terzaProva.svg';

import reset from '../../assets/icons/ferite/reload.svg';
// need "vita" per tesori
import vita from '../../assets/icons/intestazione/caratteristiche/cuore.svg';

function TitleIcon({ type, onClick = () => { } }) {
  const allIcon = {
    corpo, mente, spirito, cuore,
    borsello, zaino, chiavi,
    dice1, dice2, dice3, dice4, dice5, dice6,
    dices, cubes, directions, question,
    scrigno,
    lucchetto,
    ...zainoList,
    morte,
    timer,
    aaron,
    uccidere,
    ok,
    ko,
    reset,
    primaProva,
    secondaProva,
    terzaProva,
    vita,
  }
  if (allIcon.hasOwnProperty(type)) {
    return html`<${allIcon[type]} onClick=${onClick} />`;
  }
  return null;
}

export default TitleIcon;
