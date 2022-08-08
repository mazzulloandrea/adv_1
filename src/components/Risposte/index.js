import { h } from 'preact';
import { html } from 'htm/preact';
import { shuffle } from '../utils';
import TitleIcon from '../TitleIcon';
import style from './style.css';

const Risposte = ({ data, onend }) => {

  const animationEnd = (el) => {
    el.target.classList.toggle(style.visible);
  }
  return html`
    <div class=${style.container}>
      ${shuffle(data).map((el) => {
        const { gioco, next, abilita, frase, icon} = el;
        return html`
        <div class=${style.response} onclick=${()=> onend(gioco, next, abilita)}
        onanimationend=${(el) => animationEnd(el)}
        >
        ${frase}
        ${icon && html`<div class=${style.iconContainer}>
          <${TitleIcon} type=${icon} />
          </ />`}
      </div>
      `
      })}
    </div>
  `
}

export default Risposte;