import { h } from 'preact';
import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import TitleIcon from '../TitleIcon';
import audioSvg from '/assets/icons/audio/audio.svg';
import silenceSvg from '/assets/icons/audio/silence.svg';
import style from './style.css';
import switchStyle from './switch.css';


function Audio({ data, frase, morte, step, onend, orientation }) {
  const [mode, setMode] = useState(true);
  const [play, setPlay] = useState(false);

  useEffect(() => { }, []);
  useEffect(() => { }, [play]);
  useEffect(() => {
    console.log(mode);
    const audio = document.getElementById('audio');
    console.log(audio);
    if (!mode) {
      audio.pause()
    } else {
      audio.play();
    }
  }, [mode]);

  const audioEnd = (event) => { }

  const getText = (el) => {
    if (el.includes('**')) {
      const re = /\*\*/gi;
      const str = el.trim().replace(re, '');
      return html`
        <div class=${style.imageMiddleText}>
          <${TitleIcon} type=${str} />
        </div>`;
    }
    return html`<p>${el}</p>`;
  }

  return html`
    <div>
      ${step && html`<div class=${style.capitolo}>CAPITOLO ${step}</div>`}
      <div class=${switchStyle.widget}>
        <div class=${switchStyle.item}>
          <div class=${switchStyle.audioSvgItem}>
            <${silenceSvg} />
          </div>
          <div class=${switchStyle.toggle}>
            <input type="checkbox" id="pill4" checked=${mode} name="check" onchange=${(evt)=> setMode(evt.target.checked)}
            />
            <label for="pill4"></label>
          </div>
          <div class=${switchStyle.txtSvgItem}>
            <${audioSvg} />
          </div>
        </div>
      </div>
      <div class=${style.txt}>
        ${frase.split('\n').map(el => el && getText(el))}
        ${morte && html`
        <div class=${style.teschioContainer}>
          <div class=${style.teschio}>
            <${TitleIcon} type=${"teschio"} />
          </div>
        </div>`}
        <div class=${style.continueBtn} onClick=${()=> onend()}>Continua</div>
        <audio id="audio" autoplay class=${style.play} onended=${(evt) => audioEnd(evt)}
          onplaying=${() => setPlay(true)}
          >
          <source src=${data.src} type="audio/mp3" />
          <!-- <source src=${'/assets/audio/cap0.m4a'} type="audio/mp3" /> -->
    
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  `
}

export default Audio;