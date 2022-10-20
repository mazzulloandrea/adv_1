import { h } from 'preact';
import { html } from 'htm/preact';
import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
// import error from '/assets/icons/memory/error.svg';
import { shuffle, paletteColors, directionsDataset, alphabet, numbers, combatSet, runSet, elementSet, natureSet, varioSet } from '../utils';

import style from './style.css';

function Gioco9({ data, onend }) {
  const { combinazione, type, domanda, durata, successo, fallimento, dataset, livello = 3 } = data;
  const durataEffective = durata || (livello === 1 ? 5 : livello === 2 ? 13 : 20);
  let svgSet;
  if (dataset ==="combat") {
    svgSet = combatSet;
  } else if(dataset === "vario") {
    svgSet = varioSet;
  } else if(dataset === "element") {
    svgSet = elementSet;
  } else if (dataset === "nature") {
    svgSet = natureSet;
  }
  const [randomCombinazione, setRandomCombinazione] = useState([]);
  const [viewSand, setViewSand] = useState(true);
  const [cubes, setCubes] = useState([]);
  const [cubesClicked, setCubesClicked] = useState([]);
  const [hideMemory, setHideMemory] = useState(false);
  const [errors, setErrors] =useState([]);
  
  useEffect(() => {
    let howManyCubes = livello === 1 ? 3 : livello === 2 ? 6 : 9;
    setCubesClicked([]);
    // const paletteS = shuffle(Object.values(paletteColors));
    // const directionS = shuffle(Object.keys(directionsDataset));
    let _cubes;
    switch (type) {
      case 'memory': // qua combinazione è ARRAY
        // _cubes = combinazione;
        _cubes = generateCombinazione(livello, svgSet);
        setRandomCombinazione(_cubes);
        while(_cubes.length < howManyCubes) {
          const index = Math.floor(Math.random() * Object.keys(svgSet).length);
          _cubes = _cubes.concat(Object.keys(svgSet)[index]);
        }
        _cubes = shuffle(_cubes);
      break;
      case 'domanda': // qua combinazione è STRING
        setRandomCombinazione(combinazione);
        _cubes = combinazione;
        while(_cubes.length < howManyCubes) {
          const index = Math.floor(Math.random() * alphabet.length);
          _cubes = _cubes.concat(alphabet[index]);    
        }
        _cubes = shuffle(_cubes.split(''));
        break;
      case 'numbers': // qua combinazione è STRING
        setRandomCombinazione(combinazione);
        _cubes = combinazione;
        while(_cubes.length < howManyCubes) {
          const index = Math.floor(Math.random() * numbers.length);
          _cubes = _cubes.concat(numbers[index]);    
        }
        _cubes = shuffle(_cubes.split(''));
        break;
        // not used more
      // case 'colors':
      //   break;
      // case 'directions':
      //   _cubes = paletteS.reduce((result, ele, index) => {
      //     if(!result) result=[];
      //     result.push({
      //       palette: ele,
      //       direction: directionS[index] || null
      //     })
      //     return result;
      //   },[])
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
    if (["memory", "domanda"].includes(type) && randomCombinazione.length > 0 && randomCombinazione.length === cubesClicked.length) {
      verify();
    }
  },[cubesClicked]);

  useEffect(()=>{},[hideMemory]);
  
  useEffect(()=>{
    let HowManyError = livello;
    if(["memory","domanda", "numbers"].includes(type) && errors.length === HowManyError) {
      verify();
    }
  },[errors]);
  
  const generateCombinazione = (numberOfGenerated, list) => {
    let generated = [];
    for (let i = 0; i < numberOfGenerated; i++) {
      const index = Math.floor(Math.random() * Object.keys(svgSet).length);
      console.log(index, svgSet);
      generated = generated.concat(Object.keys(svgSet)[index]);
    }
    return generated;
  }

  const verify = () => {
    let result = false;
    if (['domanda', 'numbers'].includes(type)) {
      result = randomCombinazione === cubesClicked.join('');
    } else if(type === 'memory' ){
      result = randomCombinazione.join('') === cubesClicked.join('');
    } else {
      result = randomCombinazione.every((val, index) => {
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
        ${["domanda", "numbers"].includes(type)
          ? html`${drawDomanda()}`
          : html`${drawCombinazioni()}`
        }
      </div>    
    `
  }

  const drawCombinazioni = () => {
    return randomCombinazione.map((el, i) => {
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
    if (type === "domanda") {
      return html`
        <div class=${style.domanda}>${domanda}</div>
      `;
    }
    if (type === "numbers") {
      return domanda.map(d => html`
        <div class=${style.domanda}>${d}</div>
      `)
    }
  }

// draw cubes per domanda e per memory
  const drawCubesDomanda = () => {
    return cubes.map((cube) => 
      html`
        <div class=${style.game} 
          style=${{background: "grey"}}
          onclick=${(evt) => {
            // se corretto
            const candidate = cubesClicked.concat(cube);
            if(type === "memory") {
              if (!hideMemory) return;
              const _cube = evt.currentTarget.children[0];
              _cube.classList.remove(style.hide);
              if (randomCombinazione.slice(0, candidate.length).join('') === candidate.join('')) {
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
            else if (randomCombinazione.slice(0, candidate.length) === candidate.join('')) {
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
    if(["domanda", "numbers"].includes(type)) {
      return html`${drawCubesDomanda()}`;
    } else if(type === "memory") {
      return html`${drawCubesDomanda()}`;
    } else {
      return html`
        ${cubes.map((cube, index) => html`
          <div class=${style.game}
            style=${{backgroundColor: cube.palette}}
            onclick=${()=> {
              if (cubesClicked.length >= randomCombinazione.length) return;
              setCubesClicked(cubesClicked.concat(cube));
            }}
          >
            <span>${cube.direction}</span>
          </div>
        `)}
      `
    }
  }

  return randomCombinazione.length > 0 && html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.clessidraContainer}>
          ${viewSand && html`<${Clessidra} duration=${durataEffective} onend=${()=> setViewSand(false)}
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