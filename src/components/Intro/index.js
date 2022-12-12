import { Fragment, h } from "preact";
import { useState, useEffect, useCallback } from "preact/hooks";
import { html } from "htm/preact";
import emerald from "../../assets/icons/android-chrome-512x512.png";
import TitleIcon from "../TitleIcon";
import next from "../../assets/icons/intro/next.svg";
import allBkgVideo from "../../assets/video";
import style from "./style.css";

import { isIOS } from "../utils";
import Chrome1 from "../../assets/icons/intro/tutorial/android/tutorial1.jpg";
import Chrome2 from "../../assets/icons/intro/tutorial/android/tutorial2.jpg";
import Chrome3 from "../../assets/icons/intro/tutorial/android/tutorial3.jpg";
import IOS1 from "../../assets/icons/intro/tutorial/ios/tutorial1.jpg";
import IOS2 from "../../assets/icons/intro/tutorial/ios/tutorial2.jpg";
import IOS3 from "../../assets/icons/intro/tutorial/ios/tutorial3.jpg";

const Intro = ({ onend }) => {
  const frasi = [
    "", // logo (0)
    "", // ringraziamenti (1)
    "", // tutorial1 ...
    "", // tutorial2
    "", // tutorial3
    "Prenditi 5 minuti",
    "C'è una storia dove TU sei il protagonista!",
    "La strada è lunga e piena di difficoltà",
    "Ci saranno prove in cui dovrai dimostrare tutta la tua abilità",
    "Ce la farai ad arrivare alla fine?",
    "Metti gli auricolari per una miglior esperienza",
  ];
  const [actual, setActual] = useState(0);

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

  const changeStep = useCallback(() => {
    // console.log(actual);
    setActual(actual + 1);
  }, [actual]);

  const getIntroVideo = () => {
    return html`
      <div
        onClick=${() => {
          const intro = document.getElementById("intro");
          if (!intro) return;
          document.getElementById("tap").style.display = "none";
          intro.play();
        }}
      >
        <div id="tap" class=${style.finger}>
          <img src=${emerald} />
        </div>

        <video
          id="intro"
          class=${style.bkgVideoFull}
          playsinline
          onClick=${() => {
            // console.log("click");
            changeStep();
          }}
          onended=${() => {
            // console.log("finito");
            if (actual === 0) changeStep();
          }}
        >
          <source src=${allBkgVideo.intro} type="video/mp4" />
        </video>
      </div>
    `;
  };

  const getBackgroundAudio = () => {
    return html`
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
  `;
  };

  const getLogo = () => {
    return html` <div class=${style.animationContainer}>
      <div
        class=${style.titleContainer}
        onClick=${() => {
          changeStep();
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
      </div>
    </div>`;
  };

  const getTutorial = () => {
    return html`
      <div class=${style.fullPage}>
        ${actual === 2 &&
        html`<img
          class=${style.imgFullPage}
          src=${isIOS() ? IOS1 : Chrome1}
          onClick=${() => changeStep()}
        />`}
        ${actual === 3 &&
        html`<img
          class=${style.imgFullPage}
          src=${isIOS() ? IOS2 : Chrome2}
          onClick=${() => changeStep()}
        />`}
        ${actual === 4 &&
        html`<img
          class=${style.imgFullPage}
          src=${isIOS() ? IOS3 : Chrome3}
          onClick=${() => changeStep()}
        />`}
      </div>
    `;
  };

  const getCredits = () => {
    return html`
      <div class=${style.animationContainer}>
        <article id="credits" 
        class=${style.credits} 
        onClick=${() => changeStep()} 
        onanimationend=${(event) => {
          event.target.style.opacity = 0;
          changeStep();
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
      </div>
      `;
  };

  const getFrase = useCallback(() => {
    return html` <div
      class=${style.animationContainer}
      id=${actual}
      key=${actual}
    >
      <div
        class=${style.animation}
        onanimationend=${() => {
          console.log("adsfdg");
          changeStep();
        }}
      >
        ${frasi[actual]}
      </div>
    </div>`;
  }, [actual, changeStep, frasi]);

  const getAuricolari = () => {
    return html`
      <div class=${style.animationContainer} id=${actual} key=${actual}>
        <div class=${style.auricolari}>${frasi[actual]}</div>
      </div>
    `;
  };

  return html`
    ${actual === 0 ? getIntroVideo() : getBackgroundAudio()}
    ${actual === 1 && getLogo()} ${[2, 3, 4].includes(actual) && getTutorial()}
    ${actual === 5 && getCredits()}
    ${actual > 5 &&
    html`<div id="salta" class=${style.salta} onClick=${() => onend()}>
      <${next} />
    </div>`}
    ${[5, 6, 7, 8, 9].includes(actual) && getFrase()}
    ${actual === 10 && getAuricolari()}
  `;
};

export default Intro;
