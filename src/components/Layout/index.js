import { useEffect, useState } from 'preact/hooks';
import Storia from '../../assets/datamodel/adv_1.json';
import Header from '../Header/index';
import Audio from '../Audio/index';
import Etc from '../Etc/index';
import Shoot from '../Shoot/index';
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
  const [actual, setActual] = useState({ cap: "1" }); // { cap: 1, gioco: "text", successo: true/false}
  const [actualComponent, setActualComponent] = useState("audio"); //useState("audio");
  const [isFeedbackOk, setIsFeedbackOk] = useState(false);
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
    console.log('screen', screen);
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
    // console.log('isFeedbackOk value ', isFeedbackOk);
  }, [isFeedbackOk]);

  const setNewCap = (feedbackResult, newCap) => {
    setActual({ cap: newCap });
    setIsFeedbackOk(feedbackResult);
    setActualComponent("feedback");
  };

  const onendFeedback = () => {
    setActualComponent('audio');
  }

  const toggleTransition = (gioco, cb = () => { }) => {
    setActual({ ...actual, gioco });
    document.getElementById("2").style.left = '33.3vw';
    document.getElementById("3").style.left = '66.6vw';
    document.getElementById('overlay').classList.toggle(animation.show);
    setTimeout(() => {
      setActualComponent(gioco);
      cb();
    }, 750);
  }

  const transitionEnd = () => {
    console.log('transition end quella barre blu')
  }

  const whichComponent = () => {
    const actualCap = story["capitoli"][actual.cap];
    // console.log('new render Wich component', actualComponent);
    switch (actualComponent) {
      case "audio":
        return (<Audio data={actualCap.audio} onend={() => setActualComponent("risposte")} orientation={orientation} />);
      case "risposte":
        return (<Risposte data={actualCap.risposte} onend={(gioco) => {
          setActualComponent(null); // ?????
          toggleTransition(gioco);
          // qui doop aver scelto la risposta ho già le info sul gioco e sui capitolo successivi
        }} />);
      case "etc":
        return (<Etc data={actualCap[actualComponent]} onend={(feedbackResult, nextCap) => setNewCap(feedbackResult, nextCap)} orientation={orientation} />)
      case "shoot":
        return (<Shoot data={actualCap[actualComponent]} onend={(feedbackResult, nextCap) => setNewCap(feedbackResult, nextCap)} />)
      case "cassaforte":
        return (<Cassaforte data={actualCap[actualComponent]} onend={(feedbackResult, nextCap) => setNewCap(feedbackResult, nextCap)} />);
      case "text":
        return (<Text data={actualCap[actualComponent]} onend={(feedbackResult, nextCap) => setNewCap(feedbackResult, nextCap)} />);
      case 'feedback':
        return (<Feedback isSuccessImage={isFeedbackOk} onend={() => onendFeedback()} />)
      default:
        return;
    }
  }

  return (
    <div id="overlay" class={animation.overlay} onanimationend={() => transitionEnd()}>
      <div id="1" class={animation.bar} />
      <div id="2" class={animation.bar} />
      <div id="3" class={animation.bar} />
      <Header title={story["capitoli"][actual.cap].titolo} />
      <div class={style.wrapper}>
        {whichComponent()}
      </div>
    </div>)
}

export default Layout;