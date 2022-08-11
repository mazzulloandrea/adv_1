import { h } from 'preact';
import { html } from 'htm/preact';
import { useState} from 'preact/hooks';
import style from './style.css';
import next from '/assets/icons/intro/next.svg';
import introStyle from '../Intro/style.css';
import { tutorialConfig } from '../config'

function Tutorial({ type, dismiss }) {
  const [clicked, setClicked] = useState(false);
  return html`
    <div class=${style.wrapper}>
      <div class=${introStyle.salta} onClick=${() => {
      // console.log('clicked');
      if(clicked) return;
      document.getElementById("animationWrapper").classList.toggle(style.hide);
      setClicked(true);
    }}>
        <${next} />
      </div>
      <div class=${style.text} id="animationWrapper" onanimationend=${(evt) => {
        if(clicked) {
          evt.currentTarget.style.marginLeft = '-100vw';
          dismiss()
        } else {
          evt.currentTarget.style.marginLeft = '0';
        }
        }}>
        ${tutorialConfig[type].text.map(txt => html`<div>${txt}</div>`)}
      </div>
    </div>
  `
};

export default Tutorial;