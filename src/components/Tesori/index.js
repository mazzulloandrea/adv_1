import h from "preact";
import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import TitleIcon from "../TitleIcon";
import style from "./style.css";
import cubesStyle from "../Gioco9/style.css";
import { shuffle } from "../utils";

function Tesori({ onEnd }) {
  const [tesoriList] = useState(
    shuffle(["corpo", "mente", "spirito", "vita", null, null, null, null, null])
  );
  const [result, setResult] = useState([]);

  useEffect(() => {}, []);
  useEffect(() => {
    if (result.length === 3) {
      setTimeout(() => onEnd(result), 500);
    }
  }, [onEnd, result]);

  return html`
    <div class=${style.wrapper}>
      <div class=${style.header}>
        <div class=${style.title}>
          Scegli ${3 - result.length} baul${3 - result.length === 1 ? "e" : "i"}
        </div>
        <div class=${style.results}>
          Hai trovato:
          ${result.map(
            (r) => html`
              <div class=${style.result}>
                <${TitleIcon} type=${r || "ko"} />
              </div>
            `
          )}
        </div>
      </div>
      <div class=${cubesStyle.gameContainer}>
        ${tesoriList.map(
          (el) => html`
            <div
              class=${style.game}
              onClick=${(evt) => {
                if (result.length > 2) return;
                evt.currentTarget.classList.add(style.hide);
                setResult(result.concat(el));
              }}
            >
              <${TitleIcon} type=${"scrigno"} />
            </div>
          `
        )}
      </div>
    </div>
  `;
}

export default Tesori;
