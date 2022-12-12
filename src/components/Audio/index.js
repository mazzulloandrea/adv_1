import { h } from "preact";
import { html } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import ReactGA from "react-ga4";
import TitleIcon from "../TitleIcon";
import style from "./style.css";
import switchStyle from "./switch.css";
import { isIOS } from "../utils";

function Audio({
  data,
  capName,
  caratteristiche,
  frase,
  morte,
  step,
  onend,
  shareToHelp,
  visibility,
}) {
  const { helpCount, helpCountMax } = caratteristiche;
  const [mode, setMode] = useState(!isIOS());
  const [play, setPlay] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageView", page: `/${capName}` });
  }, [capName]);

  useEffect(() => {}, [play]);

  useEffect(() => {
    if (!visibility) {
      setMode(false);
    }
  }, [visibility]);

  useEffect(() => {
    const audio = document.getElementById("audio");
    if (!mode) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [mode]);

  const audioEnd = () => {};

  const getText = (el) => {
    if (el.includes("**")) {
      const re = /\*\*/gi;
      const str = el.trim().replace(re, "");
      return html` <div class=${style.imageMiddleText}>
        <${TitleIcon} type=${str} />
      </div>`;
    }
    return html`<p>${el}</p>`;
  };

  return html`
    <div>
      ${step && html`<div class=${style.capitolo}>CAPITOLO ${step}</div>`}
      <div class=${switchStyle.widget}>
        <div class=${switchStyle.item} onClick=${() => setMode(!mode)}>
          <${TitleIcon} type=${mode ? "audioSvg" : "silenceSvg"} />
        </div>
        <div
          class=${helpCount < helpCountMax
            ? switchStyle.shareToHelp
            : switchStyle.shareToHelpDisabled}
          onClick=${() => shareToHelp()}
        >
          <${TitleIcon} type=${"cuoreAiuto"} />
          <span>${helpCountMax - helpCount}</span>
        </div>
      </div>
      <div class=${style.txt}>
        ${frase.split("\n").map((el) => el && getText(el))}
        ${morte &&
        html` <div class=${style.teschioContainer}>
          <div class=${style.teschio}>
            <${TitleIcon} type=${"teschio"} />
          </div>
        </div>`}
        <div class=${style.continueBtn} onClick=${() => onend()}>Continua</div>
        <audio
          id="audio"
          loop
          autoplay=${"autoplay"}
          playsinline
          class=${style.play}
          onended=${(evt) => audioEnd(evt)}
          onplaying=${() => setPlay(true)}
        >
          <source src=${data.src} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  `;
}

export default Audio;
