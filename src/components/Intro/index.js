import { Fragment, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { html } from "htm/preact";
import emerald from "../../assets/icons/android-chrome-512x512.png";
import TitleIcon from "../TitleIcon";
import next from "../../assets/icons/intro/next.svg";
import style from "./style.css";
import allBkgVideo from "../../assets/video";

const Intro = ({ onend }) => {
  const frasi = [
    "",
    "Prenditi 5 minuti",
    "C'è una storia dove TU sei il protagonista!",
    "La strada è lunga e piena di difficoltà",
    "Ci saranno prove in cui dovrai dimostrare tutta la tua abilità",
    "Ce la farai ad arrivare alla fine?",
    "Metti gli auricolari per una miglior esperienza",
  ];
  const [actual, setActual] = useState(-1);

  useEffect(() => {}, []);

  useEffect(() => {
    if (actual === frasi.length - 1) {
      const salta = document.getElementById("salta");
      salta.classList.add(style.saltaAnimation);
    }
  }, [actual, frasi.length]);

  const changeFrase = () => {
    setActual(actual + 1);
  };

  return html`
    <div class=${style.fullPage} id="main">
      ${actual > 0 &&
      html`<div id="salta" class=${style.salta} onClick=${() => onend()}>
        <${next} />
      </div>`}
      <div class=${style.animationContainer}>
        ${actual === 0 &&
        html`<div
          class=${style.titleContainer}
          onClick=${() => {
            changeFrase();
            const audio = document.getElementById("soundtrack");
            const video = document.getElementById("fiammaBackground");
            if (audio.paused) audio.play();
            if (video.paused) video.play();
          }}
        >
          <div class=${style.logo}>
            <${TitleIcon} type="logo" />
          </div>
          <div class=${style.emerald}>
            <img src=${emerald} />
          </div>
        </div>`}
        ${actual === 1 &&
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 2 &&
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 3 &&
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 4 &&
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 5 &&
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 6 &&
        html`<div class=${style.auricolari}>${frasi[actual]}</div>`}
      </div>
      ${actual === -1
        ? html`
            <video
              id="intro"
              class=${style.bkgVideoFull}
              autoplay=${"autoplay"}
              playsinline
              onended=${() => {
                console.log("finito");
                setActual(0);
              }}
            >
              <source src=${allBkgVideo.intro} type="video/mp4" />
            </video>
          `
        : html`
            <${Fragment}>
              <audio id="soundtrack" loop autoplay=${"autoplay"} playsinline>
                <source
                  src=${"/assets/audio/soundtrack.mp3"}
                  type="audio/mp3"
                  volume="0.2"
                />
                Your browser does not support the audio tag.
              </audio>
              <!-- <video
                id="fumoBackground"
                class=${style.bkgVideo}
                loop
                muted
                autoplay=${"autoplay"}
                playsinline
              >
                <source src=${allBkgVideo.fumo} type="video/mp4" />
              </video> -->
            </${Fragment}>
          `}
    </div>
  `;
};

export default Intro;
