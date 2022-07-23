import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import Test from '../../assets/audio/test.ogg';
import Test10 from '../../assets/audio/Test10.ogg';
import style from './style.css';
import animation from './animation.css';

function Audio() {
  useEffect(() => {
    return () => {
      // animation to slide off
      const player = document.getElementById("player");
      player.className = player.className + ' slideOff';
    }
  }, [])
  const [play, setPlay] = useState(false);


  let audio = null;
  const managePlayer = () => {
    if (!audio) audio = document.getElementById("audio");
    if (!audio.paused) {
      audio.pause()
      setPlay(false);
    } else {
      audio.play();
      setPlay(true);
    }

    // ainamtion da spostare all handleEnd
    // console.log(document.getElementById('overlay').className);
    // const directions = {
    //   0:'top',
    //   1:'right',
    //   2:'bottom',
    //   3:'left'
    // }
    // const newStyle = directions[Math.floor(Math.random() * 4)];
  }

  const audioEnd = (event) => {
    console.log(event);
    document.getElementById("2").style.left = '33.3vw';
    document.getElementById("3").style.left = '66.6vw';
    document.getElementById('overlay').classList.toggle(animation.show);
    setTimeout(() => route('/'), 750);
  }

  // const routeChange = () => {
  //   // on animationEnd -> route("/")
  //   route("/")
  // }

  return (
    <div id="overlay" class={animation.overlay}>
      <div id="1" class={animation.bar} />
      <div id="2" class={animation.bar} />
      <div id="3" class={animation.bar} />
      <div id="player" class={style.circle} onclick={() => managePlayer()} >
        <div class={play ? style.bars : style.triangle} />
        <audio id="audio" autoplay class={style.play}
          onended={(evt) => audioEnd(evt)}
          onplaying={() => setPlay(true)}
        >
          <source src={Test10} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div >
  )
}

export default Audio;