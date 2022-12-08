import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { html } from "htm/preact";
import Spezzato from "/assets/icons/ferite/heartCrash.svg";
import TitleIcon from "../TitleIcon";
import style from "./style.css";

function Ferita({ onend }) {
  const [cuoreIntero, setCuore] = useState(true);

  useEffect(() => {
    document
      .getElementById("animContainer")
      .classList.toggle(style.containerTilt);
  }, []);

  return html`
    <div class=${style.wrapper}>
      <audio id="audio" autoplay>
        <source src=${"/assets/audio/ferita.mp3"} type="audio/mp3" />

        Your browser does not support the audio tag.
      </audio>
      <div
        id="animContainer"
        class=${style.container}
        onanimationend=${(evt) => {
          setCuore(false);
          evt.currentTarget.classList.remove(style.containerTilt);
          onend();
        }}
      >
        ${cuoreIntero
          ? html`<${TitleIcon} type=${"cuore"} />`
          : html`<${Spezzato} />`}
      </div>
    </div>
  `;
}

export default Ferita;
