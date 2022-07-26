
import { useEffect, useState } from 'preact/hooks';
import Clessidra from '../Clessidra/index';
import style from './style.css';

function Text({ data, onend }) {
  const { successo, fallimento, domande, durata, risposte } = data;

  const [domanda, setDomanda] = useState();
  // const [risposta, setRisposta] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [risposta, setRisposta] = useState('');
  const [viewSand, setViewSand] = useState(true);

  useEffect(() => {
    if (!domanda) {
      const rand = Math.floor(Math.random() * domande.length)
      setDomanda(rand);
    }
  }, []);

  useEffect(() => {
    // console.log(domande[domanda])
  }, [domanda]);

  useEffect(() => {
    // console.log(domande[risposta])
  }, [risposta]);

  const verifica = () => {
    if (!domanda) return;
    if (risposte[domanda].includes(risposta.toLowerCase())) {
      console.log('ok giusto');
      onend(successo);
    } onend(fallimento);
  }

  return (
    <div>
      {viewSand ? <Clessidra duration={durata} onend={() => {
        verifica();
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
        {/* {risposta.map((el, index) =>
          <input
            key={`risposta_${index}`}
            class={style.pin}
            maxlength="1"
            oninput={(evt) => {
              setRisposta(risposta[index] = evt.target.value)
            }} />
        )} */}
      </div>
    </div>
  )
}

export default Text;