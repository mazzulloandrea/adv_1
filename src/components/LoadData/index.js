import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';

function LoadData({ yes, not }) {
  return html`
    <div class=${style.fullPage}>
      <div class=${style.text}>Vuoi continuare l'avventura da dove sei rimasto ?</div>
      <div class=${style.buttonContainer}>
        <div class=${style.yes} onClick=${()=> yes()}>Si, continuo</div>
        <div class=${style.no} onClick=${()=> not()}>No, ricomincio da capo</div>
      </div>
    </div>
  `;
}
export default LoadData;
