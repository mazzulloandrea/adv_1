import { useEffect } from 'preact/hooks';
import sand from './style.css';

function Clessidra({ duration, onend }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--duration', `${duration}s`);
  }, []);
  return (
    <div>
      <div id="clessidra" class={sand.box}>
        <div class={sand.frame}>
          <div id="top" class={sand.top}></div>
          <div class={sand.bottom}>
            <div class={sand.drip}></div>
            <div class={sand.blob} onanimationend={() => {
              onend()
            }}></div>
            <div class={sand.glass}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clessidra;