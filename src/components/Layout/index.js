import { useEffect, useState } from 'preact/hooks';
import Storia from '../../assets/datamodel/adv_1.json';
import Audio from '/components/Audio/index';
import Etc from '/components/Etc/index';
import Shoot from '/components/Shoot/index';
import Risposte from '../Risposte/index';
import Cassaforte from '../Cassaforte/index';
import Text from '../Text/index';

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


  useEffect(() => {
    console.log('story', story)
  }, [story]);

  useEffect(() => {
    // change paragraph
    console.log('actual paragraph is', actual);
    setActualComponent("audio");
    // inizia nuovo capitolo -> audio
  }, [actual]);

  useEffect(() => {
    // animazione // suoni etc feedback!!
  }, [actualComponent]);

  const setNewCap = (newCap) => {
    setActual(newCap);
    setActualComponent('audio');
  };

  const whichComponent = () => {
    const actualCap = story["capitoli"][actual];
    switch (actualComponent) {
      case "audio":
        return (<Audio data={actualCap.audio} onend={() => setActualComponent("risposte")} />);
      case "risposte":
        return (<Risposte data={actualCap.risposte} onend={(gioco) => {
          setActualComponent(gioco)
        }} />);
      case "etc":
        return (<Etc data={actualCap[actualComponent]} onend={(newCap) => setNewCap(newCap)} />)
      case "shoot":
        return (<Shoot data={actualCap[actualComponent]} onend={(newCap) => setNewCap(newCap)} />)
      case "cassaforte":
        return (<Cassaforte data={actualCap[actualComponent]} onend={(newCap) => setNewCap(newCap)} />);
      case "text":
        return (<Text data={actualCap[actualComponent]} onend={(newCap) => setNewCap(newCap)} />);
      default:
        return;
    }
  }

  return (
    <div>
      <h1>Titolo capitolo {actual}</h1>
      {whichComponent()}
    </div>)
}

export default Layout;