import { h } from 'preact';
import { html } from 'htm/preact';
import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
// import error from '/assets/icons/memory/error.svg';
import { shuffle, paletteColors, directionsDataset, alphabet, combatSet, runSet, elementSet } from '../utils';

import style from './style.css';

function Gioco9({ data, onend }) {
  const { combinazione, type, domanda, durata, successo, fallimento, dataset } = data;
  let svgSet;
  if (dataset ==="combat") {
    svgSet = combatSet;
  } else if(dataset === "run") {
    svgSet = runSet;
  } else if(dataset === "element") {
    svgSet = elementSet;
  }

  const [viewSand, setViewSand] = useState(true);
  const [cubes, setCubes] = useState([]);
  const [cubesClicked, setCubesClicked] = useState([]);
  const [hideMemory, setHideMemory] = useState(false);
  const [errors, setErrors] =useState([]);
  
  useEffect(() => {
    setCubesClicked([]);
    const paletteS = shuffle(Object.values(paletteColors));
    const directionS = shuffle(Object.keys(directionsDataset));
    let _cubes;
    switch (type) {
      case 'memory': // qua combinazione è ARRAY
        _cubes = combinazione;
        while(_cubes.length < 9) {
          const index = Math.floor(Math.random() * Object.keys(svgSet).length);
          _cubes = _cubes.concat(Object.keys(svgSet)[index]);
        }
        _cubes = shuffle(_cubes);
      break;
      case 'domanda': // qua combinazione è STRING
      _cubes = combinazione;
      while(_cubes.length < 9) {
        const index = Math.floor(Math.random() * alphabet.length);
        _cubes = _cubes.concat(alphabet[index]);    
      }
      _cubes = shuffle(_cubes.split(''));
      break;
      case 'colors':
      break;
      case 'directions':
        _cubes = paletteS.reduce((result, ele, index) => {
          if(!result) result=[];
          result.push({
            palette: ele,
            direction: directionS[index] || null
          })
          return result;
        },[])
      break;
    }
    setCubes(_cubes);
  }, []);

  useEffect(() => {
    if (!viewSand) {
      if (type !="memory") {
        verify();
      } else {
        setHideMemory(true)
        const _icons = document.getElementsByClassName(style.svgIcon)
          for (let i=0; i < _icons.length; i++){
            _icons[i].classList.add(style.hide);
          }
      }
    }
  }, [viewSand]);

  useEffect(()=>{},[cubes])
  useEffect(()=>{
    if (type === "memory" && cubesClicked.length === combinazione.length) {
      verify()
    }
  },[cubesClicked]);
  useEffect(()=>{},[hideMemory]);
  useEffect(()=>{
    if(["memory","domanda"].includes(type) && errors.length === 3) {
      verify();
    }
  },[errors]);
  
  const verify = () => {
    let result = false;
    if (type === 'domanda') {
      result = combinazione === cubesClicked.join('');
    } else if(type === 'memory' ){
      result = combinazione.join('') === cubesClicked.join('');
    } else {
      result = combinazione.every((val, index) => {
        if (!cubesClicked || !cubesClicked[index]) return false;
        if (type === 'directions') return val === cubesClicked[index].direction
        return paletteColors[val] === cubesClicked[index].palette;
      });
    }
    onend(result ? successo : fallimento, result);
  }

  const drawHeader = () => {
    return html`
      <div class=${style.subHeader}>
        ${type === "domanda"
          ? html`${drawDomanda()}`
          : html`${drawCombinazioni()}`
        }
      </div>    
    `
  }

  const drawCombinazioni = () => {
    return combinazione.map((el, i) => {
      // permette di vedere 1 click alla volta
      if (i > cubesClicked.length) return ''
      if (type === 'memory') {
        return hideMemory
          ? html`
            <div class=${cubesClicked.length > i ? style.reduce : style.iconContainer}>
              <${svgSet[el]} class=${style.svgIcon} />
            </div>`
          : html`<span class=${style.memo}>memorizza le immagini</span>`
      } else {
        return html`
          <div class=${style.combinazione}>
            <div>${el}</div>
          </div>
        `
      }
    })
  }

  const drawDomanda = () => {
    return html`
      <div class=${style.domanda}>${domanda}</div>
    `;
  }

// draw cubes per domanda e per memory
  const drawCubesDomanda = () => {
    return cubes.map((cube) => 
      html`
        <div class=${style.game} 
          style=${{background: "grey"}}
          onclick=${(evt) =>{
            // se corretto
            const candidate = cubesClicked.concat(cube);
            if(type === "memory") {
              if (!hideMemory) return;
              const _cube = evt.currentTarget.children[0];
              _cube.classList.remove(style.hide);
              if (combinazione.slice(0, candidate.length).join('') === candidate.join('')) {
                setCubesClicked(candidate);
                const styled = evt.currentTarget.style;
                styled.border = "5px solid green";
                styled.borderRadius = "5px";
                styled.pointerEvents = "none";
              } else {
                const gameContainer = document.getElementById('gameContainer');
                gameContainer.addEventListener('animationend', () => {
                  gameContainer.classList.remove(style.containerTilt); 
                  _cube.classList.add(style.hide);
                })
                setErrors(errors.concat(true));
                gameContainer.classList.add(style.containerTilt);
              }

            } // type directions, domanda 
            else if (combinazione.slice(0, candidate.length) === candidate.join('')) {
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
              setErrors(errors.concat(true));
              gameContainer.classList.add(style.containerTilt);
            }
          }}
        >
          ${type === "memory" ? html`<${svgSet[cube]} class=${style.svgIcon} />` : html`<span>${cube}</span>`}
        </div>
    `);
  }

  const drawCubes = () => {
    if(type === "domanda") {
      return html`${drawCubesDomanda()}`;
    } else if(type === "memory") {
      return html`${drawCubesDomanda()}`;
    } else {
      return html`
        ${cubes.map((cube, index) => html`
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
      `
    }
  }

  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.clessidraContainer}>
          ${viewSand && html`<${Clessidra} duration=${durata} onend=${()=> setViewSand(false)}
            />`}
        </div>
        ${drawHeader()}
      </div>
      <div id="gameContainer" class=${style.gameContainer}>
        ${(cubes && drawCubes())}
      </div>
    </div>
  `
}

export default Gioco9;