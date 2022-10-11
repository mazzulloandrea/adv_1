import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';
import {ProgressBar} from './styled';

function StepProgressBar({ step }) {
  const steps = [1, 2, 3, 4, 5];

  return html`
    <div class=${style.progress}>
      <${ProgressBar} id=${"progressBar"} step=${step} totalStep=${steps.length} />
      <ul class=${style.progressNum}>
        ${steps.map(((st) => {
          if (st > step) return html`<li class=${style.step}>${st}</li>`;
          return html`<li class=${style.active}>${st}</li>`;
        }))}
      </ul>
    </div>
  `;
}

export default StepProgressBar;