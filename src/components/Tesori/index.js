import h from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import TitleIcon from '../TitleIcon';
import style from './style.css';
import cubesStyle from '../Gioco9/style.css';
import { shuffle } from '../utils';

function Tesori({ abilita, onEnd }) {

  const [tesoriList, setTesoriList] = useState(shuffle(["corpo", "mente", "spirito", "vita", null, null, null, null, null]));
  const [result, setResult] = useState([]);

  useEffect(() => { }, []);
  useEffect(() => {
    if (result.length === 3) {
      setTimeout(() => onEnd(result), 500);
    }
  }, [result]);


  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        ${result.length < 3 && html`<div class=${style.title}>Scegli ${3 - result.length} baul${3 - result.length > 1 ? 'i' : 'e'}</div>`}
        <div class=${style.results}>
          Hai trovato:
          ${result.map(r => html`
          <div class=${style.result}>
            <${TitleIcon} type=${r || "ko"} />
          </div>
          `)}
        </div>
      </div>
      <div class=${cubesStyle.gameContainer}>
        ${tesoriList.map(el => html`
        <div class=${cubesStyle.game} style=${{border: 'none', margin: '2vh'}} onClick=${(evt)=> {
          if (result.length > 2) return;
          console.log(el);
          evt.currentTarget.classList.add(style.hide);
          setResult(result.concat(el));
        }}>
          <${TitleIcon} type=${"scrigno"} />
        </div>
        `)}
      </div>
    </div>
    `;
};

export default Tesori;