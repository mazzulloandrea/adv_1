
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Clessidra from '../Clessidra/index';
import style from './style.css';

const duration = 300;
function Dice({ data, onend }) {
  const { successo, fallimento, combinazione, durata = '20s' } = data;
  const [viewSand, setViewSand] = useState(true);
  const [rollValue, setRollValue] = useState();
  const [timer, setTimer] = useState();

  useEffect(() => {
    const id = setInterval(() => {
      //genera un nuovo numero
      setRollValue(Math.floor(Math.random() * 5) + 1);
    }, 300);

    setTimer(id);
  }, []);

  useEffect(() => { }, [rollValue]);

  useEffect(() => { }, [timer]);
  return (
    <div>

      <div class={style.header}>
        {viewSand && <Clessidra class={style.clessidraContainer} duration={durata} onend={() => {
          setViewSand(false);
        }} />}
        <div class={style.spiega}>FAI più di 8</div>
      </div>
      <div class={style.square} onClick={() => {
        clearInterval(timer);
        console.log(rollValue);
      }}>
        <span class={style.rollValue}>{rollValue}</span>

      </div>
    </div>
  )
}

export default Dice;