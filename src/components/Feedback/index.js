import style from './style.css';
import Ok from '/assets/images/ok.jpeg';
import Ko from '/assets/images/ko.png';

function Feedback({ isSuccessImage, onend }) {
  return (
    <div class={style.feedbackContainer}>
      <div class={style.animationContainer} onanimationend={() => {
        onend();
      }}>
        <img src={isSuccessImage ? Ok : Ko} alt="" />
      </div>
    </div>
  )
}

export default Feedback;