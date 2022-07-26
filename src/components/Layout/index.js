import { useEffect, useState } from 'preact/hooks';
import Storia from '../../assets/datamodel/adv_1.json';
import Header from '/components/Header/index';
import Audio from '/components/Audio/index';
import Etc from '/components/Etc/index';
import Shoot from '/components/Shoot/index';
import Risposte from '../Risposte/index';
import Cassaforte from '../Cassaforte/index';
import Text from '../Text/index';
import Feedback from '../Feedback/index';
import animation from './animation.css';
import style from './style.css';

const config = {
  "audio": 0,
  "risposte": 1,
  "etc": 2,
  "shoot": 3,
  "cassaforte": 4,
  "text": 5,
  "quiz": 6,
}

// stub
Storia.capitoli["1"].audio.src = "/assets/audio/test3.ogg";

// const getGameId = (name) => Object.values(config);

const Layout = () => {
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(1);
  const [actualComponent, setActualComponent] = useState("audio"); //useState("audio");
  const [feedback, setFeedback] = useState(null);
  const [orientation, setOrientation] = useState(0);

  useEffect(() => {
    window.addEventListener('orientationchange', (evt) => {
      const angle = evt.target.screen.orientation.angle;
      if (angle === 90 || angle === 270) {
        setOrientation(1); // landscape
      } else {
        setOrientation(0); // portrait
      }
    })
    // console.log('screen', screen);
  }, []);

  useEffect(() => {
    // console.log('orientation effect', orientation)
  }, [orientation]);

  useEffect(() => {
    // console.log('story', story)
  }, [story]);

  useEffect(() => {
    // change paragraph
    setActualComponent("audio");
    // inizia nuovo capitolo -> audio
  }, [actual]);

  useEffect(() => {
    // animazione // suoni etc feedback!!
  }, [actualComponent]);

  useEffect(() => {
    // console.log('feedback value ', feedback);
  }, [feedback]);

  const setNewCap = (feedbackResult) => {
    setFeedback(feedbackResult ? "true" : "false");
  };

  const toggleTransition = (gioco) => {
    document.getElementById("2").style.left = '33.3vw';
    document.getElementById("3").style.left = '66.6vw';
    document.getElementById('overlay').classList.toggle(animation.show);
    setTimeout(() => {
      setActualComponent(gioco);
    }, 750);
  }

  const onendFeedback = (succ) => {
    const nextCap = story["capitoli"][actual][actualComponent];
    setActual(feedback ? nextCap.successo : nextCap.fallimento);
    setActualComponent('audio');
    setFeedback(null)
  }

  const transitionEnd = () => {
    console.log('transition end quella barre blu')
  }

  const whichComponent = () => {
    const actualCap = story["capitoli"][actual];
    // console.log('new render Wich component', actualComponent);
    switch (actualComponent) {
      case "audio":
        return (<Audio data={actualCap.audio} onend={() => setActualComponent("risposte")} orientation={orientation} />);
      case "risposte":
        return (<Risposte data={actualCap.risposte} onend={(gioco) => {
          setActualComponent('transition');
          toggleTransition(gioco);
        }} />);
      case "etc":
        return (<Etc data={actualCap[actualComponent]} onend={(feedbackResult) => setNewCap(feedbackResult)} />)
      case "shoot":
        return (<Shoot data={actualCap[actualComponent]} onend={(feedbackResult) => setNewCap(feedbackResult)} />)
      case "cassaforte":
        return (<Cassaforte data={actualCap[actualComponent]} onend={(feedbackResult) => setNewCap(feedbackResult)} />);
      case "text":
        return (<Text data={actualCap[actualComponent]} onend={(feedbackResult) => setNewCap(feedbackResult)} />);
      default:
        return;
    }
  }

  return (
    <div id="overlay" class={animation.overlay} onanimationend={() => transitionEnd()}>
      <div id="1" class={animation.bar} />
      <div id="2" class={animation.bar} />
      <div id="3" class={animation.bar} />
      {feedback === "true" && <Feedback onend={() => {
        onendFeedback(true);
      }} />}
      {feedback === "false" && <Feedback onend={() => {
        onendFeedback(false);
      }} />}
      <Header title={story["capitoli"][actual].titolo} />
      <div class={style.wrapper}>
        {whichComponent()}
      </div>
    </div>)
}

export default Layout;