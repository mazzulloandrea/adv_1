import style from './style.css';

const Intestazione = ({ title }) => (
  <header class={style.header}>
    <h1 class={style.nomargin}>{title}</h1>

  </header>
);

export default Intestazione;
