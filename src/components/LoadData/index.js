import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';

function LoadData({ yes, not }) {
  return html`
    <div class=${style.fullPage}>
      <div class=${style.text}>Vuoi continuare l'avventura ?</div>
      <div class=${style.buttonContainer}>
        <div class=${style.yes} onClick=${() => yes()}>Si, continuo</div>
        <div class=${style.no} onClick=${() => not()}>No, reset di tutti i dati e ricomincio da capo</div>
      </div>
    </div>
  `;
}
export default LoadData;
