import style from './style.css';
import Ok from '/assets/images/ok.jpeg';

function Feedback({ onend }) {
  return (
    <div class={style.animationContainer} onanimationend={() => {
      onend();
    }}>
      <img src={Ok} alt="" />
    </div>
  )
}

export default Feedback;