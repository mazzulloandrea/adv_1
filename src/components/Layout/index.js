import { h } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { initialcap, initialAbilita, tutorialConfig } from '../config';
import { saveIntoStorage, getFromStorage} from '../utils';
import Storia from '/datamodel';
import LoadData from '../LoadData';
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
import Tutorial from '../Tutorial';
import animation from './animation.css';
import style from './style.css';


const Layout = () => {
  const [load, setLoad] = useState(false);
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(null);
  // { cap: cap1, gioco: "text", successo: true/false, nextCap: "cap1", ferite: true/false}
  const [actualComponent, setActualComponent] = useState(""); //useState("audio");
  const [orientation, setOrientation] = useState(0);
  const [abilita, setAbilita] = useState(initialAbilita);
  const [tutorials, setTutorials] = useState(tutorialConfig);

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
    if(!actual) return;
    updateStorage();
  }, [actual]);

  useEffect(() => {
    if (abilita) return;
    const {corpo, mente, spirito} = abilita;
    if (!corpo && !mente && !spirito) return;
    updateStorage()
  }, [abilita]);


  const updateStorage = () => {
    let data = getFromStorage() || {};
    if (actual) {
      data = Object.assign(data, {cap: actual.cap});
    }
    if (abilita) {
      data = Object.assign(data, {"abilita":abilita});
    }
    saveIntoStorage(data);
  }
  
  /*
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

  */

  const continueFromStorage = () => {
    setLoad(false);
    const parsed = getFromStorage();

    setActual({ cap: parsed.cap });
    setAbilita(parsed.abilita);
    setActualComponent("audio");
  }

  const reset = () => {
    setLoad(false);
    if (typeof window !== "undefined") localStorage.removeItem('GV-1');
    window.location.reload();
  }
    
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

  const onEndRisposte = (gioco, nextCap, newAbilita, newZaino) => {
    setActualComponent(null);
    let updated = abilita;
    if (newAbilita) {
       updated = Object.assign({ ...updated }, { [newAbilita]: abilita[newAbilita] + 1 });
    }
    if (newZaino) {
      updated = Object.assign({ ...updated }, { zaino: abilita.zaino.concat(newZaino) });
    }
    setAbilita(updated);
    changeCap(gioco, nextCap);
  }

  const decrementVita = () => {
    let updated = Object.assign({ ...abilita }, { vita: abilita.vita - 1 });
    setAbilita(updated);
  }

  const onGameEnd = (nextCap, feedback) => {
    changeCap("audio", nextCap, feedback);
  };

  const changeCap = (gioco = "audio", nextCap, feedback) => {
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
    if (abilita && abilita.vita === 0) {
      setTimeout(()=> reset(), 3000);
      return html`<${Morte} />`;
    }
    // rimuovere quando i capitoli saranno tutti
    // WIP
    if (actualCap.wip) {
      setTimeout(()=> reset(), 3000);
      return html`
        <div class=${style.wip}>
          Work
          In
          Progress
          ...
          </ />
      `;
    }
    const componentProps = {
      data,
      onend: (nextCap, feedback) => onGameEnd(nextCap, feedback),
      orientation,
      caratteristiche: abilita,
    }

    switch (actualComponent) {
      case "audio":
        return html`<${Audio} ...${componentProps} frase=${actualCap.frase} onend=${()=> onEndAudio()} />`;
      case "risposte":
        return html`<${Risposte} ...${componentProps} onend=${(gioco, nextCap, newAbilita, zaino) => onEndRisposte(gioco,
          nextCap, newAbilita, zaino)}
  />`;
      case "etc":
        return html`<${Etc} ...${componentProps} />`;
      case "text":
        return html`<${Text} ...${componentProps} />`;
      case 'gioco9':
        return html`<${Gioco9} ...${componentProps} />`;
      case "dice":
        return html`<${Dice} ...${componentProps} />`;
      case 'ferita':
        return html`<${Ferita} onend=${() => decrementVita()} />`;

      case "shoot":// not used now
        return html`<${Shoot} ...${componentProps} />`;
      case "cassaforte":// not used now
        return html`<${Cassaforte} ...${componentProps} />`;

      default:
        return;
    }
  }

  const getComponent = () => {
    const storageCap = getFromStorage();
    if (!actual) {
      return html`<${Intro} onend=${() => {
          if(storageCap) {
            setLoad(true);
          } else {
            setActual({ cap: initialcap });
            setActualComponent('risposte');
          }
      }} />`
    }
    if (tutorials && tutorials[actualComponent] && tutorials[actualComponent].active) {
      return html`
        <${Tutorial} type=${actualComponent} dismiss=${() => {
            delete tutorials[actualComponent];
            setTutorials(Object.assign({}, tutorials));
          }}
        />
      `
    }
    return html`
      <div class=${style.wrapper}>
        ${whichComponent()}
      </div>
    `
  }

  return html`
    <div id="overlay" class=${animation.overlay} onanimationend=${() => transitionEnd()}>
      <div id="1" class=${animation.bar} />
      <div id="2" class=${animation.bar} />
      <div id="3" class=${animation.bar} />
      ${load && html`<${LoadData} yes=${() => continueFromStorage()} not=${() => reset()} />`}
      ${actual && html`
      <${Intestazione} abilita=${abilita} title=${story[actual.cap].titolo || ''} actualComponent=${actualComponent} />
      `}
      ${getComponent()}
    </div>`;
}
export default Layout;