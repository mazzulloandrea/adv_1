import { h } from 'preact';
import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import audioSvg from '/assets/icons/audio/audio.svg';
import textSvg from '/assets/icons/audio/text.svg';
import style from './style.css';
import switchStyle from './switch.css';
 

function Audio({ data, frase, onend, orientation }) {
  const [mode, setMode] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    console.log('init');
    // return () => {
    //   // animation to slide off
    //   const player = document.getElementById("player");
    //   player.className = player.className + ' slideOff';
    // }
  }, [])

  useEffect(() => { }, [play]);
  useEffect(() => { }, [mode]);

  let audio = null;
  const managePlayer = () => {
    if (!audio) audio = document.getElementById("audio");
    if (!audio.paused) {
      audio.pause()
      setPlay(false);
    } else {
      audio.play();
      setPlay(true);
    }
  }

  const audioEnd = (event) => {
    setTimeout(() => onend(), 750);
  }

  return html`
    <div>
      <div class=${switchStyle.widget}>
        <div class=${switchStyle.item}>
          <div class=${switchStyle.audioSvgItem}><${audioSvg} /></div>
          <div class=${switchStyle.txtSvgItem}><${textSvg} /></div>
          <div class=${switchStyle.toggle}>
            <input type="checkbox" id="pill4" checked=${mode} name="check" onchange=${(evt) => setMode(evt.target.checked)} />
            <label for="pill4"></label>
          </div>
        </div>
      </div>
      ${mode 
        ? html`
          <div class=${style.txt}>
            ${frase.split('\n').map(el => el && html`<p>${el}</p>`)}
            <div class=${style.continueBtn} onClick=${() => onend()}>Continua</div>
          </div>
        ` 
        : html`
          <div id="player" class=${style.circle} onclick=${()=> managePlayer()} >
            <div id="stoppable" class=${play ? style.bars : style.triangle} />
            <audio id="audio" autoplay class=${style.play} onended=${(evt)=> audioEnd(evt)}
              onplaying=${() => setPlay(true)}
              >
              <source src=${data.src} type="audio/mp3" />
              <!-- <source src=${'/assets/audio/cap0.m4a'} type="audio/mp3" /> -->
        
              Your browser does not support the audio tag.
            </audio>
          </div>
        `}
    </div>
  `
}

export default Audio;