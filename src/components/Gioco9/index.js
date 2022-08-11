import { h } from 'preact';
import { html } from 'htm/preact';
import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
import { shuffle, paletteColors, directionsDataset } from '../utils';
import style from './style.css';

function Gioco9({ data, durata = 10, onend }) {
  const { combinazione, type, successo, fallimento } = data;
  const [viewSand, setViewSand] = useState(true);
  const [cubes, setCubes] = useState([]);
  const [cubesClicked, setCubesClicked] = useState([]);

  useEffect(() => {
    setCubesClicked([]);
    const paletteS = shuffle(Object.values(paletteColors));
    const directionS = shuffle(Object.keys(directionsDataset));
    const cubes = paletteS.reduce((result, ele, index) => {
      if(!result) result=[];
      result.push({
        palette: ele,
        direction: directionS[index] || null
      })
      return result;
    },[])
    setCubes(cubes);
  }, []);

  useEffect(() => {
    if (!viewSand) {
      verify();
    }
  }, [viewSand]);

  useEffect(()=>{},[cubes])
  useEffect(()=>{},[cubesClicked])

  const verify = () => {
    let result = false;
    result = combinazione.every((val, index) => {
      if (!cubesClicked || !cubesClicked[index]) return false;
      if (type === 'directions') return val === cubesClicked[index].direction
      return paletteColors[val] === cubesClicked[index].palette; 
    });
    onend(result ? successo : fallimento, result);
  }

  const drawCombinazioni = () => {
    return combinazione.map((el, i) => {
      if (i > cubesClicked.length) return ''
      return html`
        <div class=${style.combinazione}>
          <div>${el}</div>
          ${cubesClicked[i] && html`
            <div class=${style.miniGame} style=${{ backgroundColor: cubesClicked[i].palette }}>
            </div>
          `}
        <//>
      `;
    })
  }

  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.clessidraContainer}>
          ${viewSand && html`<${Clessidra} duration=${durata} onend=${()=> setViewSand(false)}
            />`}
        </div>
        <div class=${style.subHeader}>
          ${drawCombinazioni()}
        </div>
      </div>
      <div id="gameContainer" class=${style.gameContainer}>
        ${cubes && cubes.map((cube, index) => html`
          <div class=${style.game}
              style=${{backgroundColor: cube.palette}}
              onclick=${()=> {
                if (cubesClicked.length >= combinazione.length) return;
                setCubesClicked(cubesClicked.concat(cube));
              }}
          >
          <span>${cube.direction}</span>
        </div>
        `)}
        
      </div>
    </div>
  `
}

export default Gioco9;