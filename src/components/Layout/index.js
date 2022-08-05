import { h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import Storia from '/datamodel/index.js';
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
import animation from './animation.css';
// import TitleIcon from '../TitleIcon'
// import IR from '../../assets/icons/risposte/directions.svg';
import style from './style.css';


const config = {
  "audio": 0,
  "risposte": 1,
  "etc": 2,
  "shoot": 3,
  "cassaforte": 4,
  "text": 5,
  "quiz": 6,
  "gioco9": 7,
  "dice": 8,
}

/**
 * Il flusso base prevede
 * Audio -> risposte
 * Risposte -> transizione a 3 finestre
 * Transizione -> setActualComponent(gioco)
 * Wich gioco -> carica componente e gioca
 * gioca -> onend
 * onend -> setNewCap = (newCap) (setta capitolo nuovo), setActualComponent(audio)
 * inizia audio newCap
 * 
 */

const initialAbilita = {
  corpo: 0, mente: 0, spirito: 0, vita: 4,
  zaino: []
}

const Layout = () => {
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(null); // { cap: cap1, gioco: "text", successo: true/false}
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
    setActualComponent("risposte");
  };

  const onEndRisposte = (gioco, nextCap, newAbilita) => {
    setActualComponent(null);
    if (abilita) {
      setAbilita(Object.assign({ ...abilita }, { [newAbilita]: abilita[newAbilita] + 1 }));
    }
    toggleTransition(gioco, nextCap);
  }

  // rinominare con onGameEnd
  const setNewCap = (nextCap) => {
    console.log('actual cap ', nextCap);
    toggleTransition("audio", nextCap);
  };

  const toggleTransition = (gioco, nextCap) => {
    setActualComponent(null);
    document.getElementById("2").style.left = '33.3vw';
    document.getElementById("3").style.left = '66.6vw';
    document.getElementById('overlay').classList.toggle(animation.show);
    setTimeout(() => {
      if (nextCap) {
        setActual(Object.assign({ ...actual }, { gioco, cap: nextCap }));
      } else {
        setActual(Object.assign({ ...actual }, { gioco }));
      }
      setActualComponent(gioco);
    }, 750);
  }

  const transitionEnd = () => {
    // console.log('transition end quella barre blu');
  }

  const whichComponent = () => {
    const actualCap = story[actual.cap];
    // console.log('new render Wich component', actualComponent);
    const data = actualCap[actualComponent];
    switch (actualComponent) {
      case "audio":
        return html`<${Audio} data=${data} onend=${()=> onEndAudio()} orientation=${orientation} />`;
      case "risposte":
        return html`<${Risposte} data=${data} onend=${(gioco, nextCap, newAbilita)=> onEndRisposte(gioco,
          nextCap, newAbilita)}
  />`;
      case "etc":
        return html`<${Etc} data=${data} onend=${(nextCap) => setNewCap(nextCap)}
  orientation=${orientation} />`;
      case "shoot":
        return html`<${Shoot} data=${data} onend=${(nextCap)=> setNewCap(nextCap)} />`;
      case "cassaforte":
        return html`<${Cassaforte} data=${data} onend=${(nextCap)=> setNewCap(nextCap)}
  />`;
      case "text":
        return html`<${Text} data=${data} onend=${(nextCap)=> setNewCap(nextCap)} />`;
      case 'gioco9':
        return html`<${Gioco9} data=${data} onend=${(nextCap)=> setNewCap(nextCap)} />`;
      case "dice":
        return html`<${Dice} data=${data} caratteristiche=${abilita} onend=${(nextCap) =>
        setNewCap(nextCap)} />`;
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
      <${Intestazione} abilita=${abilita} title=${story[actual.cap].titolo} actualComponent=${actualComponent} />`}
      ${!actual
      ? html`<${Intro} onend=${()=> {
        setActual({ cap: '_0' });
        setActualComponent('risposte');
        }} />`
        : html`<div class=${style.wrapper}>
          ${whichComponent()}
        </div>`
      }
    </div>`;
}

export default Layout;