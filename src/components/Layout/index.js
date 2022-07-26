import { useEffect, useState } from 'preact/hooks';
import Storia from '../../assets/datamodel/adv_1.json';
import Audio from '/components/Audio/index';
import Etc from '/components/Etc/index';
import Shoot from '/components/Shoot/index';
import Risposte from '../Risposte/index';
import Cassaforte from '../Cassaforte/index';
import Text from '../Text/index';
import Feedback from '../Feedback/index';

const config = {
  "audio": 0,
  "risposte": 1,
  "etc": 2,
  "shoot": 3,
  "cassaforte": 4,
  "text": 5,
  "quiz": 6,
}

const getGameId = (name) => Object.values(config);

const Layout = () => {
  const [story, setStory] = useState(Storia);
  const [actual, setActual] = useState(1);
  const [actualComponent, setActualComponent] = useState("text"); //useState("audio");
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    console.log('story', story)
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
    console.log('ffedback value ', feedback);
  }, [feedback]);

  const setNewCap = (feedbackResult) => {
    setFeedback(feedbackResult ? "true" : "false");
  };

  const onendFeedback = (succ) => {
    const nextCap = story["capitoli"][actual][actualComponent];
    setActual(succ ? nextCap.successo : nextCap.fallimento);
    setActualComponent('audio');
    setFeedback(null)
  }

  const whichComponent = () => {
    const actualCap = story["capitoli"][actual];
    console.log('new render Wich component', actualComponent);
    switch (actualComponent) {
      case "audio":
        return (<Audio data={actualCap.audio} onend={() => setActualComponent("risposte")} />);
      case "risposte":
        return (<Risposte data={actualCap.risposte} onend={(gioco) => {
          setActualComponent(gioco)
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
    <div>
      {feedback === "true" && <Feedback onend={() => {
        onendFeedback(true);
      }} />}
      {feedback === "false" && <Feedback onend={() => {
        onendFeedback(false);
      }} />}
      <h1>Titolo capitolo {actual}</h1>
      {whichComponent()}
    </div>)
}

export default Layout;