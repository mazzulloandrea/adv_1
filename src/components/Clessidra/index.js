import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { html } from 'htm/preact';
import style from './style.css';

function Clessidra({ duration, onend }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--duration', `${duration}s`);
  }, []);

  return html`
    <div class=${style.progress}>
      <div class=${style.progressbar} onanimationend=${()=> {
      document.getElementById('audio').pause();
      onend();
      }}></div>
    
      <audio id="audio" autoplay>
        <source src=${'/assets/audio/clock.mp3'} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  `
}

export default Clessidra;