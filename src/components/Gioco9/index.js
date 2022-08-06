import { h } from 'preact';
import { html } from 'htm/preact';
import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
import { shuffle, rgbToHex, paletteColors, directionsDataset } from '../utils';
import style from './style.css';


const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Gioco9({ data, durata = 10, onend }) {
  const { combinazione, type, giochi = cubes, successo, fallimento } = data;
  const [viewSand, setViewSand] = useState(true);
  const [palette, setPalette] = useState([]);
  const [directions, setDirections] = useState([]);
  const [colorsClicked, setColorsClicked] = useState([]);

  useEffect(() => {
    setPalette(shuffle(Object.values(paletteColors)));
    setDirections(shuffle(Object.keys(directionsDataset)));
  }, []);

  useEffect(() => {
    if (!viewSand) {
      verify();
    }
  }, [viewSand]);

  useEffect(() => {
    if (palette.length) {
      const games = document.getElementById("gameContainer").children;
      for (let i = 0; i < games.length; i++) {
        const game = games[i];
        game.style.backgroundColor = palette[i];
      }
    }
  }, [palette]);

  useEffect(() => {
  }, [colorsClicked]);

  const verify = () => {
    if (combinazione.length != colorsClicked.length) {
      onend(fallimento);
    };
    let result = true;
    for (let i = 0; i < combinazione.length; i++) {
      if (paletteColors[combinazione[i]] !== colorsClicked[i]) result = false;
    };
    onend(result ? successo : fallimento);
  };

  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.clessidraContainer}>
          ${viewSand && html`<${Clessidra} duration=${durata} onend=${()=> setViewSand(false)}
            />`}
        </div>
        <div class=${style.subHeader}>
          <div class=${style.spiega}>
            <ol class=${style.discoverList}>
              ${combinazione.map((el, i) => html`
              <li class=${style.discoverElement}>
                <span>${el}</span>
                ${colorsClicked[i] && html`
                <div class=${style.miniGame} style=${{ backgroundColor: colorsClicked[i] }} />
                `}
              </li>`
              )}
            </ol>
          </div>
        </div>
      </div>
      <div id="gameContainer" class=${style.gameContainer}>
        ${giochi.map((g, index) => html`
          <div class=${style.game} onclick=${(evt)=> {
            const color = rgbToHex(evt.target.style.backgroundColor);
            setColorsClicked(colorsClicked.concat(color));
            evt.target.classList.toggle(style.delete);
          }}
          >
          ${type === "directions" ? directions[index] : ''}
        </div>
        `)}
      </div>
    </div>
  `
}

export default Gioco9;