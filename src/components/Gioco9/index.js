import Clessidra from '../Clessidra';
import { useEffect, useState } from 'preact/hooks';
import { shuffle, rgbToHex, paletteColors } from '../utils';
import style from './style.css';


const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Gioco9({ data = stub, durata = 10, onend }) {
  const { combinazione, giochi = cubes, successo, fallimento } = data
  const [viewSand, setViewSand] = useState(true);
  const [palette, setPalette] = useState([]);
  const [colorsClicked, setColorsClicked] = useState([]);

  useEffect(() => {
    setPalette(shuffle(Object.values(paletteColors)));
  }, []);

  useEffect(() => {
    if (!viewSand) {
      verify();
    }
  }, [viewSand]);

  useEffect(() => {
    if (palette.length) {
      console.log(palette);
      const games = document.getElementById("gameContainer").children;
      // const miniGames = document.getElementById("miniGameContainer").children;
      for (let i = 0; i < games.length; i++) {
        const game = games[i];
        game.style.backgroundColor = palette[i];
        // game = miniGames[i];
        // game.style.backgroundColor = palette[i];
      }
    }
  }, [palette]);

  useEffect(() => {
    console.log(colorsClicked);
  }, [colorsClicked]);

  const verify = () => {
    if (combinazione.length != colorsClicked.length) {
      onend(false, fallimento)
    };
    let result = true;
    for (let i = 0; i < combinazione.length; i++) {
      console.log(paletteColors);
      console.log(combinazione[i]);
      console.log(paletteColors[combinazione[i]]);
      if (paletteColors[combinazione[i]] !== colorsClicked[i]) result = false;
    };
    onend(result, result ? successo : fallimento);
  };

  return (
    <div class={style.wrapper}>
      <div class={style.header}>
        <div class={style.clessidraContainer}>
          {viewSand && <Clessidra duration={durata} onend={() => {
            setViewSand(false);
          }} />}
        </div>
        <div class={style.subHeader}>
          <div class={style.spiega}>
            <ol class={style.discoverList}>
              {combinazione.map((el, i) => (
                <li class={style.discoverElement}>
                  <span>{el}</span>
                  {colorsClicked[i] && <div class={style.miniGame} style={{ backgroundColor: colorsClicked[i] }} />}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
      <div id="gameContainer" class={style.gameContainer}>
        {giochi.map(g =>
          <div
            class={style.game}
            onclick={(evt) => {
              const color = rgbToHex(evt.target.style.backgroundColor);
              setColorsClicked(colorsClicked.concat(color));
              evt.target.classList.toggle(style.delete);
            }}
          >
            {g}
          </div>
        )}
      </div>
    </div >
  )
}

export default Gioco9;