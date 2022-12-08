import { h } from "preact";
import { html } from "htm/preact";
import { useEffect, useState, useCallback } from "preact/hooks";
import Clessidra from "../Clessidra/index";
import style from "./style.css";
import { Prosegui } from "../Dice/styled";
import blurStyle from "./blurStyle.css";

function Text({ data, onend }) {
  const { domande, durata, risposte, successo, fallimento, image } = data;
  const [domanda, setDomanda] = useState(null);
  const [risposta, setRisposta] = useState("");
  const [viewSand, setViewSand] = useState(true);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    if (!domanda) {
      const rand = Math.floor(Math.random() * domande.length);
      setDomanda(rand);
    }
  }, []);

  useEffect(() => {}, [domanda]);

  useEffect(() => {}, [risposta]);

  useEffect(() => {
    if (!viewSand) verifica();
  }, [verifica, viewSand]);

  const verifica = useCallback(() => {
    if (domanda === null) {
      return;
    }
    const result = risposte[domanda].includes(risposta.toLowerCase());
    onend(result ? successo : fallimento, result);
  }, [domanda, fallimento, onend, risposta, risposte, successo]);

  return html`
    <div>
      ${viewSand &&
      html`<${Clessidra}
        class=${style.clessidraContainer}
        duration=${durata}
        onend=${() => setViewSand(false)}
      />`}
      <div class=${style.domanda}>${domande[domanda]}</div>
      ${image &&
      html`
        <div class=${blurStyle.focus}>
          <div class=${blurStyle.focusMask}>
            <div class=${blurStyle.focusMaskInner}>
              <img src=${image} />
            </div>
          </div>
        </div>
      `}
      <div class=${style.responseContainer}>
        <input
          value=${risposta}
          type="text"
          value=${textValue}
          class=${style.pin}
          maxlength="10"
          oninput=${(evt) => {
            if (evt.target.value.length > 10) return;
            setRisposta(evt.target.value);
            setTextValue(evt.target.value);
          }}
        />
      </div>
      <${Prosegui}
        onClick=${() => verifica()}
        style=${{ backgroundColor: "white" }}
        >Conferma<//
      >
    </div>
  `;
}

export default Text;
