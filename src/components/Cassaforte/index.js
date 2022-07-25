import { useEffect, useState } from 'preact/hooks';
import circularProgressBar from './circularProgressBar.css';
import switchCheckox from './switch.css';
import sand from './sand.css';
import determinateVictory from '../utils';

const stub = { successo: '', fallimento: '', params: {} }
function Cassaforte({ data = stub, onend }) {
  const { successo, fallimento, params } = data;
  const [viewSand, setViewSand] = useState(true);
  //memorizzo lo stato di ogni component
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100));
  const [switchValue, setSwitchValue] = useState(Math.random() < 0.5);
  const [datetimeValue, setDatetimeValue] = useState();
  const [selectValue, setSelectValue] = useState();
  const [successList, setSuccessList] = useState();

  useEffect(() => {
    document.getElementById('progressBar').style.backgroundImage = `conic-gradient(#B5838D ${progress}%, #FFCDB2 0`;
  }, [progress]);

  useEffect(() => { console.log('switchValue', switchValue) }, [switchValue]);

  useEffect(() => { console.log('datetime', datetimeValue) }, [datetimeValue]);

  useEffect(() => { console.log('select', selectValue) }, [selectValue])

  useEffect(() => {
    if (!successList) return;
    // vinto o perso
    onend(determinateVictory(successList) ? successo : fallimento)
  }, [successList]);

  const createSuccessList = () => {
    // confronta tra data ed i vari stati
    console.log(progress, switchValue, datetimeValue, selectValue);
    setSuccessList([true, false, true, true]);
  }

  return (
    <div>
      <h1>combinazione 1-12-1200 30% false 3</h1>
      <div>
        {viewSand ?
          <div class={sand.box}>
            <div class={sand.frame}>
              <div class={sand.top}></div>
              <div class={sand.bottom}>
                <div class={sand.drip}></div>
                <div class={sand.blob} onanimationend={() => {
                  createSuccessList();
                  setViewSand(false);
                }}></div>
                <div class={sand.glass}></div>
              </div>
            </div>
          </div> :
          <div>{successList.map(el => <div>el</div>)}</div>
        }
      </div>
      <div id="progressBar" class={circularProgressBar.circle}>
        <div class={circularProgressBar.inner}>{progress}%</div>
        <div class={circularProgressBar.increment} onclick={() => setProgress(progress + 1)}>+</div>
        <div class={circularProgressBar.decrement} onclick={() => setProgress(progress - 1)}>-</div>
      </div>
      <div>
        <div class={switchCheckox.item}>
          <div class={switchCheckox.toggle}>
            <input type="checkbox" id="pill4" checked={switchValue} name="check" onchange={(evt) => setSwitchValue(evt.target.checked)} />
            <label for="pill4"></label>
          </div>
        </div>
      </div >
      <div>
        <input type="date" onchange={(evt) => {
          console.log(evt.target.value);
          setDatetimeValue(evt.target.value);
        }
        } />
      </div>
      <div>
        <select onchange={(evt) => {
          setSelectValue(evt.target.value);
        }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div >
  )
}

export default Cassaforte;