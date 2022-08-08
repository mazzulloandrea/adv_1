
import { h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import Clessidra from '../Clessidra/index';
import style from './style.css';
import blurStyle from './blurStyle.css';

function Text({ data, onend }) {
  const { domande, durata, risposte, successo, fallimento, image } = data;
  const [domanda, setDomanda] = useState(null);
  const [risposta, setRisposta] = useState('');
  const [viewSand, setViewSand] = useState(true);

  useEffect(() => {
    if (!domanda) {
      const rand = Math.floor(Math.random() * domande.length)
      setDomanda(rand);
    }
  }, []);

  useEffect(() => {
  }, [domanda]);

  useEffect(() => {
  }, [risposta]);

  useEffect(() => {
    if (!viewSand) verifica();
  }, [viewSand]);

  const verifica = () => {
    if (domanda === null) {
      return;
    }
    const result = risposte[domanda].includes(risposta.toLowerCase())
    onend(result ? successo : fallimento, result);
  }

  return html`
    <div>
      ${viewSand && html`<${Clessidra} class=${style.clessidraContainer} duration=${durata} onend=${() => setViewSand(false)}
        />`}
        <div class=${style.domanda}>${domande[domanda]}</div>
        ${image && html`
        <div class=${blurStyle.focus}>
          <div class=${blurStyle.focusMask}>
            <div class=${blurStyle.focusMaskInner}><img src=${image} /></div>
          </div>
        </div>
        `}
        <div class=${style.responseContainer}>
          <input value=${risposta} class=${style.pin} maxlength="10" oninput=${(evt)=> setRisposta(evt.target.value)} />
        </div>
    </div>
  `
}

export default Text;