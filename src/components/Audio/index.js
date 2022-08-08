import { h } from 'preact';
import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

function Audio({ data, onend, orientation }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    console.log('orientation', orientation);
    return () => {
      // animation to slide off
      const player = document.getElementById("player");
      player.className = player.className + ' slideOff';
    }
  }, [])

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
      <div id="player" class=${style.circle} onclick=${()=> managePlayer()} >
        <div id="stoppable" class=${play ? style.bars : style.triangle} />
        <audio id="audio" autoplay class=${style.play} onended=${(evt)=> audioEnd(evt)}
          onplaying=${() => setPlay(true)}
          >
          <!-- <source src=${data.src} type="audio/ogg" /> -->
          <source src=${'/assets/audio/cap0.m4a'} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  `
}

export default Audio;