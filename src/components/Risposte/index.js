import { useEffect } from 'preact/hooks';
import style from './style.css';

const Risposte = ({ data, onend }) => {
  useEffect(() => {
    // screen space / data.length

  }, [])

  console.log(style);
  const animationEnd = (el) => {
    el.target.classList.toggle(style.visible);
  }
  return (
    <div class={style.container}>
      {data.map((el) => (
        <div
          class={style.response}
          onclick={() => onend(el.gioco, el.next, el.abilita)}
          onanimationend={(el) => animationEnd(el)}
        >{el.frase}</div>
      ))}
    </div>
  )
}

export default Risposte;