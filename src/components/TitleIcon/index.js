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

import cubes from '../../assets/icons/gioco9/gioco9.svg';

import directions from '../../assets/icons/risposte/directions.svg';

import question from '../../assets/icons/text/question.svg';

// import etc from '../../assets/icons/etc/etc.svg';

// import shoot from '../../assets/icons/shoot/shoot.svg';

// import cassaforte from '../../assets/icons/cassaforte/cassaforte.svg';
import scrigno from '../../assets/icons/cassaforte/scrigno.svg';
import zainoList from '../../assets/icons/zaino';


function TitleIcon({ type, onClick = () => { } }) {
  const allIcon = {
    corpo, mente, spirito, cuore,
    borsello, zaino, chiavi,
    dices, cubes, directions, question,
    scrigno,
    ...zainoList,
  }
  if (allIcon.hasOwnProperty(type)) {
    return html`<${allIcon[type]} onClick=${onClick} />`;
  }
  return null;
}

export default TitleIcon;
