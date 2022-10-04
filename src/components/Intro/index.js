import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';
import next from '../../assets/icons/intro/next.svg';
import style from './style.css';



const Intro = ({ onend }) => {
  const frasi = [
    "Prenditi 5 minuti",
    "C'è una storia dove TU sei il protagonista!",
    "La strada è lunga e piena di difficoltà",
    "ce la farai ad arrivare alla fine?",
    "Metti gli auricolari per una miglior esperienza"
  ];
  const [actual, setActual] = useState(0);

  useEffect(() => { }, []);
  useEffect(() => { }, [actual]);

  const changeFrase = () => {
    setActual(actual + 1);
  }

  return html`
    <div class=${style.fullPage}>
      <div class=${style.salta} onClick=${()=> onend()}>
        <${next} />
      </div>
      <div class=${style.animationContainer}>
        ${actual === 0 && html`<div class=${style.animation} onanimationend=${() => changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 1 && html`<div class=${style.animation2} onanimationend=${() => changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 2 && html`<div class=${style.animation2} onanimationend=${() => changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 3 && html`<div class=${style.animation2} onanimationend=${() => changeFrase()}>${frasi[actual]}</div>`}
        ${actual === 4 && html`<div class=${style.auricolari}>${frasi[actual]}</div>`}
      </div>
      <audio id="soundtrack" autoplay>
        <source src=${"/assets/audio/soundtrack.mp3"} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  `
}

export default Intro;