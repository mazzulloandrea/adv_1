import { h } from 'preact';
import { html } from 'htm/preact';
import allBkgVideo from '../../assets/video';
import style from '../Intro/style.css';

const AutoplayVideo = () => {
  const getVideo = () => html`
    <video id="" class=${style.bkgVideo} autoplay muted loop playsinline>
      <source src=${allBkgVideo.fiamme} type="video/mp4" />
    </video>
  `;
  return html`
    <div dangerouslySetInnerHTML={{__HTML: ${getVideo()}}}>
    </div>
  `
}

export default AutoplayVideo;