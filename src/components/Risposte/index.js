import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';

const Risposte = ({ data, onend }) => {

  const animationEnd = (el) => {
    el.target.classList.toggle(style.visible);
  }
  return html`
    <div class=${style.container}>
      ${data.map((el) => html`
      <div class=${style.response} onclick=${()=> onend(el.gioco, el.next, el.abilita)}
        onanimationend=${(el) => animationEnd(el)}
        >${el.frase}</div>
      `
        )}
    </div>
  `
}

export default Risposte;