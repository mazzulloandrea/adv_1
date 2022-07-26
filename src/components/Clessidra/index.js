import { useEffect } from 'preact/hooks';
import style from './style.css';

function Clessidra({ duration, onend }) {

  useEffect(() => {
    document.documentElement.style.setProperty('--duration', `${duration}s`);
  }, []);

  return (
    <div class={style.progress}>
      <div class={style.progressbar} onanimationend={() => onend()}></div>
    </div>
  )
}

export default Clessidra;