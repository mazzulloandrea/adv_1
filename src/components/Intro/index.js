import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';
import emerald from '../../assets/icons/android-chrome-512x512.png';
import next from '../../assets/icons/intro/next.svg';
import style from './style.css';
import allBkgVideo from '../../assets/video';


const Intro = ({ onend }) => {
  const frasi = [
    "La gemma Verde",
    "Prenditi 5 minuti",
    "C'è una storia dove TU sei il protagonista!",
    "La strada è lunga e piena di difficoltà",
    "Ci saranno prove in cui dovrai dimostrare tutta la tua abilità",
    "Ce la farai ad arrivare alla fine?",
    "Metti gli auricolari per una miglior esperienza"
  ];
  const [actual, setActual] = useState(0);

  useEffect(() => { }, []);
  useEffect(() => {
    if (actual === frasi.length-1) {
      const salta = document.getElementById("salta");
      salta.classList.add(style.saltaAnimation);
    }
  }, [actual]);

  const changeFrase = () => {
    setActual(actual + 1);
  }


  return html`
    <div class=${style.fullPage} id="main">
      ${actual != 0 && html`<div id="salta" class=${style.salta} onClick=${() => onend()}>
        <${next} />
      </div>`}
      <div class=${style.animationContainer}>
        ${actual === 0 && html`<div class=${style.titleContainer} onClick=${()=> { 
              changeFrase();
              const audio = document.getElementById("soundtrack");
              if (audio.paused) audio.play();
            }}>
          <div class=${style.title}>${frasi[actual]}</div>
          <div class=${style.emerald}>
            <img src=${emerald}/>
          </div>
        </div>`}
        ${actual === 1 && html`<div class=${style.animation} onanimationend=${()=> changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 2 && html`<div class=${style.animation} onanimationend=${()=> changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 3 && html`<div class=${style.animation} onanimationend=${()=> changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 4 && html`<div class=${style.animation} onanimationend=${()=> changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 5 && html`<div class=${style.animation} onanimationend=${()=> changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 6 && html`<div class=${style.auricolari}>${frasi[actual]}</div>`}
      </div>
      <audio id="soundtrack" autoplay loop>
        <source src=${"/assets/audio/soundtrack.mp3"} type="audio/mp3" volume="0.2" />
        Your browser does not support the audio tag.
      </audio>
      <div dangerouslySetInnerHTML={{
        __html: <video id="" class=${style.bkgVideo} autoplay muted loop playsinline>
          <source src=${allBkgVideo.fiamme} type="video/mp4" />
        </video>
      }}></div>
    </div>
  `
}

export default Intro;