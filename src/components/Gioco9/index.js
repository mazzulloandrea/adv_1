import { h } from 'preact';
import { html } from 'htm/preact';
import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
import { shuffle, paletteColors, directionsDataset, alphabet } from '../utils';
import style from './style.css';

function Gioco9({ data, durata = 10, onend }) {
  const { combinazione, type, domanda, successo, fallimento } = data;
  const [viewSand, setViewSand] = useState(true);
  const [cubes, setCubes] = useState([]);
  const [cubesClicked, setCubesClicked] = useState([]);

  useEffect(() => {
    setCubesClicked([]);
    const paletteS = shuffle(Object.values(paletteColors));
    const directionS = shuffle(Object.keys(directionsDataset));
    let _cubes;
    if(type === "domanda") {
      _cubes = combinazione;
      while(_cubes.length < 9) {
        console.log(alphabet);
        const index = Math.floor(Math.random() * alphabet.length);
        _cubes = _cubes.concat(alphabet[index]);    
      }
      _cubes = shuffle(_cubes.split(''));
    } else {
      _cubes = paletteS.reduce((result, ele, index) => {
        if(!result) result=[];
        result.push({
          palette: ele,
          direction: directionS[index] || null
        })
        return result;
      },[])
    }
    setCubes(_cubes);
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
    if (type === 'domanda') {
      result = combinazione === cubesClicked.join('');
    } else {
      result = combinazione.every((val, index) => {
        if (!cubesClicked || !cubesClicked[index]) return false;
        if (type === 'directions') return val === cubesClicked[index].direction
        return paletteColors[val] === cubesClicked[index].palette; 
      });
    }
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

  const drawDomanda = () => {
    return html`
      <div class=${style.domanda}>${domanda}</div>
    `;
  }
  

  const drawCubesDomanda = () => {
    return cubes.map((cube) => 
      html`
        <div class=${style.game} 
          style=${{background: "grey"}}
          onclick=${(evt) =>{
          // se corretto
          const candidate = cubesClicked.concat(cube);
          
          if (combinazione.slice(0, candidate.length) === candidate.join('')) {
            setCubesClicked(candidate);
            const styled = evt.currentTarget.style;
            styled.border = "5px solid green";
            styled.borderRadius = "5px";
            styled.pointerEvents = "none";
          } else {
            const gameContainer = document.getElementById('gameContainer');
            gameContainer.addEventListener('animationend', () => {
              gameContainer.classList.remove(style.containerTilt);
            })
            gameContainer.classList.add(style.containerTilt);
          }
        }}>
          <span>${cube}</span>
        </div>
    `);
  }

  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.clessidraContainer}>
          ${viewSand && html`<${Clessidra} duration=${durata} onend=${()=> setViewSand(false)}
            />`}
        </div>
        <div class=${style.subHeader}>
          ${type === "domanda"
            ? html`${drawDomanda()}`
            : html`${drawCombinazioni()}`
          }
        </div>
      </div>
      <div id="gameContainer" class=${style.gameContainer}>
        ${(cubes && type === "domanda")
          ? drawCubesDomanda()
          : cubes.map((cube, index) => html`
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