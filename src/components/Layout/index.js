import { h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { initialcap, initialAbilita } from '../config';
import Storia from '/datamodel';
import Intestazione from '../Intestazione';
import Audio from '../Audio';
import Etc from '../Etc';
import Shoot from '../Shoot';
import Risposte from '../Risposte';
import Cassaforte from '../Cassaforte';
import Text from '../Text';
import Gioco9 from '../Gioco9';
import Dice from '../Dice';
import Intro from '../Intro';
import Ferita from '../Ferita'
import Morte from '../Morte'; 
import animation from './animation.css';
import style from './style.css';


const Layout = () => {
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(null);
  // { cap: cap1, gioco: "text", successo: true/false, nextCap: "cap1", ferite: true/false}
  const [actualComponent, setActualComponent] = useState(""); //useState("audio");
  const [orientation, setOrientation] = useState(0);
  const [abilita, setAbilita] = useState(initialAbilita);

  useEffect(() => {
    window.addEventListener('orientationchange', (evt) => {
      const angle = evt.target.screen.orientation.angle;
      if (angle === 90 || angle === 270) {
        setOrientation(1); // landscape
      } else {
        setOrientation(0); // portrait
      }
    })
  }, []);

  useEffect(() => {
    // console.log('orientation effect', orientation)
  }, [orientation]);

  useEffect(() => {
    // console.log('story', story)
  }, [story]);

  useEffect(() => {
    // change paragraph
    // !!!salvare nello storage ogni volta
  }, [actual]);

  useEffect(() => {
    // animazione // suoni etc feedback!!
  }, [actualComponent]);

  useEffect(() => {
    // console.log(abilita);
  }, [abilita]);

  const onEndAudio = () => {
    const actualCap = story[actual.cap];
    if (actualCap.morte) {
      setAbilita(Object.assign({ ...abilita }, { vita: 0 }));
    } else if (actualCap.risposte) {
      setActualComponent("risposte");
    } else if (actualCap.gioco) {
      setActualComponent(actualCap.gioco);
      if (actualCap.next) {
        setActual(actualCap.next);
      }
    }
  };

  const onEndRisposte = (gioco, nextCap, newAbilita, zaino) => {
    setActualComponent(null);
    if (newAbilita) {
      setAbilita(Object.assign({ ...abilita }, { [newAbilita]: abilita[newAbilita] + 1 }));
    }
    if (zaino) {
      setAbilita(Object.assign({ ...abilita }, { zaino: abilita.zaino.concat(zaino) }));
    }
    toggleTransition(gioco, nextCap);
  }

  const decrementVita = () => {
    setAbilita(Object.assign({ ...abilita }, { vita: abilita.vita - 1 }));
  }

  const onGameEnd = (nextCap, feedback) => {
    console.log('actual cap ', nextCap);
    toggleTransition("audio", nextCap, feedback);
  };

  const toggleTransition = (gioco = "audio", nextCap, feedback) => {
    setActualComponent(null);
    if (feedback === false) {
      setActualComponent('ferita');
    } else {
      document.getElementById("2").style.left = '33.3vw';
      document.getElementById("3").style.left = '66.6vw';
      document.getElementById('overlay').classList.toggle(animation.show);
    }
    setTimeout(() => {
      if (nextCap) {
        setActual(Object.assign({ ...actual }, { gioco, cap: nextCap }));
      } else {
        setActual(Object.assign({ ...actual }, { gioco }));
      }
      setActualComponent(gioco);
    }, 2000);
  }

  const transitionEnd = () => {
    // console.log('transition end quella barre blu');
  }

  const whichComponent = () => {
    const actualCap = story[actual.cap];
    console.log(`
      actual cap = ${actual.cap}, 
      component = ${actualComponent}
      abilita = ${JSON.stringify(abilita)}
    `);
    const data = actualCap[actualComponent];
    if(abilita && abilita.vita === 0) {
      return html`<${Morte} />`;
    }
    switch (actualComponent) {
      case "audio":
        return html`<${Audio} data=${data} onend=${()=> onEndAudio()} orientation=${orientation} />`;
      case "risposte":
        return html`<${Risposte} data=${data} caratteristiche=${abilita} onend=${(gioco, nextCap, newAbilita, zaino) => onEndRisposte(gioco,
  nextCap, newAbilita, zaino)}
  />`;
      case "etc":
        return html`<${Etc} data=${data} onend=${(nextCap, feedback) => onGameEnd(nextCap, feedback)}
  orientation=${orientation} />`;
      case "shoot":
        return html`<${Shoot} data=${data} onend=${(nextCap,feedback)=> onGameEnd(nextCap,feedback)} />`;
      case "cassaforte":
        return html`<${Cassaforte} data=${data} onend=${(nextCap,feedback)=> onGameEnd(nextCap,feedback)}
  />`;
      case "text":
        return html`<${Text} data=${data} onend=${(nextCap,feedback)=> onGameEnd(nextCap,feedback)} />`;
      case 'gioco9':
        return html`<${Gioco9} data=${data} onend=${(nextCap,feedback)=> onGameEnd(nextCap,feedback)} />`;
      case "dice":
        return html`<${Dice} data=${data} caratteristiche=${abilita} onend=${(nextCap,feedback) =>
        onGameEnd(nextCap, feedback)} />`;
      case 'ferita':
        return html`<${Ferita} onend=${() => decrementVita()} />`;
      default:
        return;
    }
  }

  return html`
    <div id="overlay" class=${animation.overlay} onanimationend=${() => transitionEnd()}>
      <div id="1" class=${animation.bar} />
      <div id="2" class=${animation.bar} />
      <div id="3" class=${animation.bar} />
      ${actual && html`
      <${Intestazione} abilita=${abilita} title=${story[actual.cap].titolo || ''} actualComponent=${actualComponent} />
      `}
      ${!actual
          ? html`<${Intro} onend=${() => {
            setActual({ cap: initialcap });
            setActualComponent('risposte');
          }} />`
          : html`<div class=${style.wrapper}>
              ${whichComponent()}
        </div>`
      }
    </div>`;
}

export default Layout;