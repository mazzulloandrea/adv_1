
import { useEffect, useState } from 'preact/hooks';
import Clessidra from '../Clessidra/index';
import style from './style.css';

function Text({ data, onend }) {
  const { domande, durata, risposte } = data;
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
    if (risposte[domanda].includes(risposta.toLowerCase())) {
      onend(true);
    } else {
      onend(false);
    }
  }

  return (
    <div>
      {viewSand ? <Clessidra duration={durata} onend={() => {
        setViewSand(false);
      }} /> : <div>esito</div>}
      <div>domanda: {domande[domanda]}</div>
      <div class={style.responseContainer}>
        <input
          value={risposta}
          class={style.pin}
          maxlength="10"
          oninput={(evt) => {
            setRisposta(evt.target.value);
          }} />
      </div>
    </div>
  )
}

export default Text;