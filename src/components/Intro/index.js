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
    "", // logo
    "", // ringraziamenti
    "Prenditi 5 minuti",
    "C'è una storia dove TU sei il protagonista!",
    "La strada è lunga e piena di difficoltà",
    "Ci saranno prove in cui dovrai dimostrare tutta la tua abilità",
    "Ce la farai ad arrivare alla fine?",
    "Metti gli auricolari per una miglior esperienza",
  ];
  const [actual, setActual] = useState(-1);
  // const [actual, setActual] = useState(3);

  useEffect(() => {
    // const videoIntro = document.getElementById("intro");
    // if (videoIntro) {
    //   videoIntro.addEventListener("ended", () => {
    //     // console.log("onend");
    //     setActual(0);
    //   });
    //   videoIntro.onended = () => {
    //     // console.log("onended");
    //     setActual(0);
    //   };
    // }
  }, []);

  useEffect(() => {
    if (actual === frasi.length - 1) {
      const salta = document.getElementById("salta");
      salta.classList.add(style.saltaAnimation);
    }
    // // force change credits page
    // if (actual === 1) {
    //   setTimeout(() => {
    //     if (actual === 1) {
    //       setActual(2);
    //     }
    //   }, 3500);
    // }
  }, [actual, frasi.length]);

  const changeFrase = () => {
    // console.log(actual);
    setActual(actual + 1);
  };

  return html`
    <div class=${style.fullPage} id="main">
      ${actual > 1 &&
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
            // const video = document.getElementById("fiammaBackground");
            if (audio.paused) audio.play();
            // if (video.paused) video.play();
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
        html`
          <article id="credits" 
            class=${style.credits} 
            onClick=${() => changeFrase()} 
            onanimationend=${(event) => {
              event.target.style.opacity = 0;
              changeFrase();
            }}>
            <article>
              <p>
                <div>Andrea Mazzullo</div>
                <div>Edited in 2022</div>
              </p>
            </article>
            <article>
              <p>Video intro Creative Content</p>
            </article>
            <article>
              <p>Audio Fire and Tunder, by Cjbeards</p>
              <div>link https://www.youtube.com/watch?v=82hJffyJ5hY</div>
            </article>
            <article>
              <p>Graphics contents Pixelpollution</p>
            </article>
            <article>
              <p>
                Voices Sara Cattaneo, Paolo Giudici, Tommaso Mantegazza, Andrea
                Mazzullo, Alberto Pejrano, Cristiano Soddu
              </p>
            </article>
          </article>
        `}
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
        html`<div
          class=${style.animation}
          onanimationend=${() => changeFrase()}
        >
          ${frasi[actual]}
        </div>`}
        ${actual === 7 &&
        html`<div class=${style.auricolari}>${frasi[actual]}</div>`}
      </div>
      <!-- multimedia files -->
      ${actual === -1
        ? html`
            <div
              onClick=${() => {
                const intro = document.getElementById("intro");
                if (!intro) return;
                document.getElementById("tap").style.display = "none";
                intro.play();
              }}
            >
              <div id="tap" class=${style.finger}>
                <${TitleIcon} type="tap" />
              </div>

              <video
                id="intro"
                class=${style.bkgVideoFull}
                playsinline
                onClick=${() => {
                  console.log("click");
                  setActual(0);
                }}
                onended=${() => {
                  // console.log("finito");
                  setActual(0);
                }}
              >
                <source src=${allBkgVideo.intro} type="video/mp4" />
              </video>
            </div>
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
