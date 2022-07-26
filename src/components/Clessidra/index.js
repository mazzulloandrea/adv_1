// import sand from './sand.css';
import { useEffect } from 'preact/hooks';
import sand from './style.css';

function Clessidra({ duration, onend }) {
  // console.log('clessidra');
  useEffect(() => {
    // .top:before
    // .bottom: before
    // .blob
    // .drip
    // document.getElementById("top").style.animationDuration = `${duration}s`;
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
              console.log('clessidra animation end');
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