import style from './style.css';
// import BlurImage from '/assets/images/bottle.jpg';
function Blur() {

  return (
    <div>
      <div class={style.focus}>
        <div class={style.focusMask}>
          <div class={style.focusMaskInner}><img src="/assets/images/bottle.jpg" /></div>
        </div>
      </div>

    </div>
  );

}

export default Blur;