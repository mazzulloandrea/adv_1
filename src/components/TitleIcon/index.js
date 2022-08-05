import corpo from '../../assets/icons/caratteristiche/corpo.svg';
import mente from '../../assets/icons/caratteristiche/mente.svg';
import spirito from '../../assets/icons/caratteristiche/spirito.svg';
import cuore from '../../assets/icons/caratteristiche/cuore.svg';

import dices from '../../assets/icons/dice/dices.svg';
import dice from '../../assets/icons/dice/dice.svg';
import dice1 from '../../assets/icons/dice/dice1.svg';
import dice2 from '../../assets/icons/dice/dice2.svg';
import dice3 from '../../assets/icons/dice/dice3.svg';
import dice4 from '../../assets/icons/dice/dice4.svg';
import dice5 from '../../assets/icons/dice/dice5.svg';
import dice6 from '../../assets/icons/dice/dice6.svg';

import listOrdered from '../../assets/icons/gioco9/listOrdered.svg';

import nextCap from '../../assets/icons/intro/next.svg';

import directions from '../../assets/icons/risposte/directions.svg';

import question from '../../assets/icons/text/question.svg';

import { h } from 'preact';
import { html } from 'htm/preact';


function TitleIcon({ type }) {
  let icon = null;
  switch (type) {
    case 'risposte':
      icon = directions;
      break;
    case 'text':
      icon = question;
      break;
    case 'dice':
      icon = dices;
      break;
    case 'corpo':
      icon = corpo;
      break;
    case 'mente':
      icon = mente;
      break;
    case 'spirito':
      icon = spirito;
      break;
    case 'cuore':
      icon = cuore;
      break;
    default:
      break;
  }

  return html`
    ${icon && html`
    <${icon} />`}
  `;
}

export default TitleIcon;

// // mancano le icone per etc, shoot,cassaforte
// export default {
//   caratteristiche: {
//     corpo,
//     mente,
//     spirito,
//     cuore,
//   },
//   dice: {
//     dice,
//     dice1,
//     dice2,
//     dice3,
//     dice4,
//     dice5,
//     dice6,
//   },
//   gioco9: {
//     listOrdered
//   },
//   nextCap,
//   risposte: {
//     directions
//   },
//   text: {
//     question
//   }
// }