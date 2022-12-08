import { h } from "preact";
import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import { shuffle } from "../utils";
import TitleIcon from "../TitleIcon";
import style from "./style.css";

const Risposte = ({ data, caratteristiche, onend }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const filtered = data.filter((resp) => {
      // solo le risposte i cui oggetti sono nello zaino
      if (resp.checkZaino) {
        return caratteristiche.zaino.includes(resp.checkZaino);
      }
      return true;
    });
    setResponse(shuffle(filtered));
  }, [caratteristiche.zaino, data]);

  const animationEnd = (el) => {
    el.target.classList.toggle(style.visible);
  };

  return html`
    <div class=${style.container}>
      ${response.map((el) => {
        const {
          gioco,
          next,
          abilita,
          frase,
          icon,
          zaino,
          borsello,
          chiavi,
          zainoElimina,
          ferita,
          ...custom
        } = el;
        return html`
          <div
            class=${style.response}
            onclick=${() => {
              onend(
                gioco,
                next,
                abilita,
                zaino,
                borsello,
                chiavi,
                zainoElimina,
                ferita,
                custom
              );
            }}
            onanimationend=${(el) => animationEnd(el)}
          >
            ${frase}
            ${icon &&
            html`
              <div class=${style.iconContainer}>
                <${TitleIcon} type=${icon} />
              <//>
            `}
          </div>
        `;
      })}
    </div>
  `;
};

export default Risposte;
