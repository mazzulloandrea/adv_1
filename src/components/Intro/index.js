import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';
import next from '../../assets/icons/intro/next.svg';
import style from './style.css';



const Intro = ({ onend }) => {
  const frasi = [
    "Prenditi 5 minuti",
    "C'è una storia dove tu sei il protagonista",
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
        ${actual === 2 && html`<div class=${style.auricolari}>${frasi[actual]}</div>`}
      </div>
    </div>
  `
}

export default Intro;