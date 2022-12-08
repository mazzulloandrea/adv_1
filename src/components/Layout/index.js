import { h } from "preact";
import { html } from "htm/preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import ReactGA from "react-ga4";
import { initialcap, initialAbilita, tutorialConfig } from "../config";
import { saveIntoStorage, getFromStorage } from "../utils";
import Storia from "../../datamodel";
import LoadData from "../LoadData";
import Intestazione from "../Intestazione";
import Audio from "../Audio";
// import Etc from '../Etc';
// import Shoot from '../Shoot';
import Risposte from "../Risposte";
import Cassaforte from "../Cassaforte";
import Text from "../Text";
import Gioco9 from "../Gioco9";
import Dice from "../Dice";
import Intro from "../Intro";
import Ferita from "../Ferita";
import Morte from "../Morte";
import Tutorial from "../Tutorial";
import Zaino from "../Zaino";
import animation from "./animation.css";
import style from "./style.css";
import Achievement from "../Achievement";
import Tesori from "../Tesori";

const Layout = () => {
  const [load, setLoad] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(null);
  // { cap: cap1, gioco: "text", successo: true/false, nextCap: "cap1", ferite: true/false}
  const [actualComponent, setActualComponent] = useState(""); //useState("audio");
  const [orientation, setOrientation] = useState(0);
  const [abilita, setAbilita] = useState(initialAbilita);
  const [tutorials, setTutorials] = useState(tutorialConfig);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    ReactGA.initialize("G-CKF93XL3FW");
    // ReactGA.send({ hitType: "pageView", page: "/openApp" });
    ReactGA.event({
      category: "init",
      action: "openApp",
    });
    window.addEventListener("orientationchange", (evt) => {
      const angle = evt.target.screen.orientation.angle;
      if (angle === 90 || angle === 270) {
        setOrientation(1); // landscape
      } else {
        setOrientation(0); // portrait
      }
    });
    window.addEventListener("visibilitychange", (evt) => {
      // console.log("visibilitychange", evt);
      const audioLow = document.getElementById("audioBackgroundLow");
      const audioIntro = document.getElementById("soundtrack");
      if (evt.target.visibilityState === "visible") {
        setVisibility(true);
        if (audioLow) audioLow.play();
        if (audioIntro) audioIntro.play();
      } else {
        if (audioLow) audioLow.pause();
        if (audioIntro) audioIntro.pause();
        setVisibility(false);
      }
    });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateStorage = useCallback(() => {
    let data = getFromStorage() || {};
    if (actual) {
      data = Object.assign(data, { cap: actual.cap });
    }
    if (abilita) {
      data = Object.assign(data, { abilita });
    }
    // console.log("dati che salvo per LOG", data);
    saveIntoStorage(data);
  }, [abilita, actual]);

  useEffect(() => {
    if (!actual) return;
    updateStorage();
  }, [actual, updateStorage]);

  // useEffect(() => {
  // }, [timerValue]);

  /*
    useEffect(() => {
      if (abilita) return;
    }, [abilita]);
    
    useEffect(() => {
      console.log(load);
    }, [load]);

    useEffect(() => {
      // console.log('orientation effect', orientation)
    }, [orientation]);
  
    useEffect(() => {
      // console.log('story', story)
    }, [story]);
  
    useEffect(() => {
      // animazione // suoni etc feedback!!
    }, [actualComponent]);
  
    useEffect(() => {
      // console.log('tutorial', tutorial)
    }, [tutorial]);

    useEffect(() => {
      // console.log(timer);
    },[timer])

  */

  const continueFromStorage = (accumulatedAchievement) => {
    setLoad(false);
    const parsed = getFromStorage();
    if (parsed.cap === "_0") {
      parsed.abilita.vita = initialAbilita.vita;
      parsed.abilita.morte = false;
      setAbilita(parsed.abilita);
      setActual({ cap: initialcap });
      setActualComponent("risposte");
    } else {
      // riparte il timer
      // const interval = setInterval(() => {
      //   setTimerValue(Date.now());
      // }, 1000);
      // setTimer(interval);
      // eslint-disable-next-line no-lonely-if
      if (accumulatedAchievement) {
        setActual({ cap: initialcap });
        setAbilita(initialAbilita);
        setActualComponent("risposte");
      } else {
        setActual({ cap: parsed.cap });
        setAbilita(parsed.abilita);
        setActualComponent("audio");
      }
    }
  };

  const reset = (force) => {
    setLoad(false);
    if (force) {
      if (window.localStorage) {
        localStorage.removeItem("GV-1");
      }
      window.location.reload();
    } else {
      continueFromStorage(true);
    }
  };

  const shareToHelp = async () => {
    const shareData = {
      title: "La gemma verde",
      text: "Aiutami a finirlo!!",
      url: "https://adv-1.vercel.app/",
    };
    try {
      await navigator.share(shareData);
      setAbilita(
        Object.assign(
          { ...abilita },
          { vita: abilita.vita + 1, helpCount: abilita.helpCount + 1 }
        )
      );
    } catch (err) {
      console.log("Sharing non  riuscito");
      console.log("sharing err", JSON.stringify(err));
    }
  };

  const onEndAudio = () => {
    const actualCap = story[actual.cap];
    if (actualCap.morte) {
      setAbilita(Object.assign({ ...abilita }, { vita: 0, morte: true }));
    } else if (actualCap.risposte) {
      setActualComponent("risposte");
    } else if (actualCap.gioco) {
      setActualComponent(actualCap.gioco);
    } else if (actualCap.next) {
      changeCap("audio", actualCap.next);
    } else if (actualCap.fine) {
      // clearInterval(timer);
      setActualComponent("achievement");
    }
  };

  const onEndRisposte = (
    gioco,
    nextCap,
    newAbilita,
    newZaino,
    borselloNewValue,
    chiavi,
    zainoElimina,
    ferita,
    custom
  ) => {
    setActualComponent(null);
    let updated = abilita;
    if (nextCap === "a") {
      // inizializzo il timer
      updated = Object.assign({ ...abilita }, { initTime: Date.now() });
      // const interval = setInterval(() => {
      //   setTimerValue(Date.now());
      // }, 1000);
      // setTimer(interval);
    }
    if (
      newAbilita &&
      ((newAbilita === "vita" &&
        abilita.vita < initialAbilita.vitaMaxLength &&
        !ferita) ||
        ["corpo", "spirito", "mente"].includes(newAbilita))
    ) {
      updated = Object.assign(
        { ...updated },
        { [newAbilita]: abilita[newAbilita] + 1 }
      );
    }
    if (ferita) {
      let newVita = abilita.vita - ferita;
      if (newVita < 0) newVita = 0;
      updated = Object.assign({ ...updated }, { vita: newVita });
    }
    if (newZaino) {
      updated = Object.assign(
        { ...updated },
        { zaino: abilita.zaino.concat(newZaino) }
      );
    }
    if (borselloNewValue) {
      updated = Object.assign(
        { ...updated },
        { borsello: abilita.borsello + borselloNewValue }
      );
    }
    if (zainoElimina) {
      const z = Array.from(abilita.zaino);
      z.splice(z.indexOf(zainoElimina), 1);
      updated = Object.assign({ ...updated }, { zaino: z });
    }
    if (custom && Object.keys(custom).length > 0) {
      updated = Object.assign({ ...updated }, { ...custom });
    }
    // aggiorno il timer
    // updated = Object.assign({...updated}, {timer: timerValue, step: nextCap ? story[nextCap].step || abilita.step : abilita.step});
    updated = Object.assign(
      { ...updated },
      { step: nextCap ? story[nextCap].step || abilita.step : abilita.step }
    );
    setAbilita(updated);
    changeCap(gioco, nextCap);
  };

  const decrementVita = () => {
    let updated;
    if (abilita.vita === 1) {
      updated = Object.assign({ ...abilita }, { vita: 0, morte: true });
    } else {
      updated = Object.assign({ ...abilita }, { vita: abilita.vita - 1 });
    }
    setAbilita(updated);
  };

  const onGameEnd = (nextCap, feedback) =>
    changeCap("audio", nextCap, feedback);

  const changeCap = (gioco = "audio", nextCap, feedback) => {
    setActualComponent(null);
    if (feedback === false) {
      setActualComponent("ferita");
      setAbilita(
        Object.assign(
          { ...abilita },
          {
            error: true,
            step: nextCap ? story[nextCap].step || abilita.step : abilita.step,
          }
        )
      );
    } else if (
      feedback === true &&
      abilita.chiavi < initialAbilita.chiaviMaxLength
    ) {
      setAbilita(
        Object.assign(
          { ...abilita },
          {
            chiavi: abilita.chiavi + 1,
            step: nextCap ? story[nextCap].step || abilita.step : abilita.step,
          }
        )
      );
      startAnimationFinestre();
    } else {
      startAnimationFinestre();
    }
    loadNextComponent(gioco, nextCap);
  };

  const loadNextComponent = (gioco, nextCap) => {
    setTimeout(() => {
      if (nextCap) {
        setActual(Object.assign({ ...actual }, { gioco, cap: nextCap }));
      } else {
        setActual(Object.assign({ ...actual }, { gioco }));
      }
      setActualComponent(gioco);
    }, 1500);
  };

  const startAnimationFinestre = () => {
    document.getElementById("2").style.left = "33.3vw";
    document.getElementById("3").style.left = "66.6vw";
    document.getElementById("overlay").classList.toggle(animation.show);
  };

  const transitionEnd = () => {
    // console.log('transition end quella barre blu');
  };

  const whichComponent = () => {
    const actualCap = story[actual.cap];
    // console.log(`
    //   actual cap = ${actual.cap},
    //   component = ${actualComponent}
    //   abilita = ${JSON.stringify(abilita)}
    // `);
    if (actualComponent === "achievement") {
      return html`<${Achievement}
        abilita=${abilita}
        onClick=${() => reset()}
      />`;
    }
    const data = actualCap[actualComponent];
    if (abilita && abilita.vita <= 0) {
      return html`<${Morte}
        onClick=${() => setActualComponent("achievement")}
      />`;
    }

    const componentProps = {
      data,
      onend: (nextCap, feedback) => onGameEnd(nextCap, feedback),
      orientation,
      caratteristiche: abilita,
      capName: actual.cap,
      visibility,
    };

    switch (actualComponent) {
      case "audio":
        return html`<${Audio}
          ...${componentProps}
          frase=${actualCap.frase}
          morte=${actualCap.morte}
          step=${actualCap.step}
          onend=${() => onEndAudio()}
          shareToHelp=${shareToHelp}
        />`;
      case "risposte":
        return html`<${Risposte}
          ...${componentProps}
          onend=${(
            gioco,
            nextCap,
            newAbilita,
            zaino,
            borsello,
            chiavi,
            zainoElimina,
            ferita,
            custom
          ) =>
            onEndRisposte(
              gioco,
              nextCap,
              newAbilita,
              zaino,
              borsello,
              chiavi,
              zainoElimina,
              ferita,
              custom
            )}
        />`;
      case "text":
        return html`<${Text} ...${componentProps} />`;
      case "gioco9":
        return html`<${Gioco9} ...${componentProps} />`;
      case "dice":
        return html`<${Dice} ...${componentProps} />`;
      case "dice2":
        return html`<${Dice} ...${componentProps} />`;
      case "dice3":
        return html`<${Dice} ...${componentProps} />`;
      case "ferita":
        return html`<${Ferita} onend=${() => decrementVita()} />`;
      // case "shoot":// not used now
      //   return html`<${Shoot} ...${componentProps} />`;
      // case "etc":
      //   return html`<${Etc} ...${componentProps} />`;
      case "cassaforte":
        return html`<${Cassaforte} ...${componentProps} />`;
      default:
        return;
    }
  };

  const getComponent = () => {
    const storageCap = getFromStorage();
    if (!actual) {
      // introduzione
      return html`<${Intro}
        onend=${() => {
          if (storageCap) {
            setLoad(true);
          } else {
            setActual({ cap: initialcap });
            setActualComponent("risposte");
          }
        }}
      />`;
    }
    if (abilita.zaino.length > initialAbilita.zainoMaxLength) {
      // gestione zaino
      return html`<${Zaino}
        abilita=${abilita}
        onClick=${(z) => {
          let start = abilita.zaino.indexOf(z);
          let zainoCp = abilita.zaino.slice();
          zainoCp.splice(start, 1);
          setAbilita(Object.assign({ ...abilita }, { zaino: zainoCp }));
        }}
      />`;
    }
    if (
      tutorials &&
      tutorials[actualComponent] &&
      tutorials[actualComponent].active
    ) {
      // tutorial
      return html`
        <${Tutorial}
          type=${actualComponent}
          dismiss=${() => {
            delete tutorials[actualComponent];
            setTutorials(Object.assign({}, tutorials));
          }}
        />
      `;
    }
    if (abilita.chiavi === initialAbilita.chiaviMaxLength) {
      if (tutorials && tutorials.chiavi && tutorials.chiavi.active) {
        return html`
          <${Tutorial}
            type=${"chiavi"}
            dismiss=${() => {
              delete tutorials.chiavi;
              setTutorials(Object.assign({}, tutorials));
            }}
          />
        `;
      }
      return html`
        <${Tesori}
          onEnd=${(result) => {
            let newAbilita = Object.assign(abilita);
            result.forEach((r) => {
              if (
                (r === "vita" && abilita.vita < initialAbilita.vitaMaxLength) ||
                ["corpo", "spirito", "mente"].includes(r)
              ) {
                newAbilita[r] = newAbilita[r] + 1;
              }
            });
            startAnimationFinestre();
            setTimeout(
              () => setAbilita(Object.assign({ ...newAbilita }, { chiavi: 0 })),
              2000
            );
          }}
        />
      `;
    }
    // altri componenti come risposte, giochi, audio
    return html` <div class=${style.wrapper}>${whichComponent()}</div> `;
  };

  return html` <div
    id="overlay"
    class=${animation.overlay}
    onanimationend=${() => transitionEnd()}
  >
    <div id="1" class=${animation.bar} />
    <div id="2" class=${animation.bar} />
    <div id="3" class=${animation.bar} />
    ${actual &&
    html`<audio id="audioBackgroundLow" autoplay loop>
      <source
        src=${"/assets/audio/soundtrack_low.mp3"}
        type="audio/mp3"
        volume="0.2"
      />
      Your browser does not support the audio tag.
    </audio>`}
    ${load &&
    html`<${LoadData}
      yes=${() => continueFromStorage()}
      not=${() => reset(true)}
    />`}
    ${actual &&
    html`<${Intestazione}
      step=${abilita.step || 1}
      abilita=${abilita}
      title=${story[actual.cap].titolo || ""}
      actualComponent=${actualComponent}
    />`}
    ${getComponent()}
  </div>`;
};

export default Layout;
