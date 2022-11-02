import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';
import {ProgressBar} from './styled';
import videos from '../../assets/video';

function StepProgressBar({ step }) {
  const steps = [1, 2, 3, 4, 5];

  const getVideo = () => {
    switch (step) {
      case 1:
        return html`
          <video  id=${"fiamme"} key=${"fiamme"} class=${style.bkgVideo} autoplay muted loop>
            <source src=${videos.fiamme} type="video/mp4" />
          </video>
        `
      case 2:
        return html`
          <video  id=${"colline"} key=${"colline"} class=${style.bkgVideo} autoplay muted loop>
            <source src=${videos.colline} type="video/mp4" />
          </video>
        `
      case 3:
        return html`
          <video  id=${"cielo"} key=${"cielo"} class=${style.bkgVideo} autoplay muted loop>
            <source src=${videos.cielo} type="video/mp4" />
          </video>
        `
    }
  }

  return html`
    <div>
      ${getVideo()}
      <div class=${style.progress}>
        <${ProgressBar} id=${"progressBar"} step=${step} totalStep=${steps.length} />
        <ul class=${style.progressNum}>
          ${steps.map(((st) => {
            if (st > step) return html`<li class=${style.step}>${st}</li>`;
            return html`<li class=${style.active}>${st}</li>`;
          }))}
        </ul>
      </div>
    </div>
  `;
}

export default StepProgressBar;