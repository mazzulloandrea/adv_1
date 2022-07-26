import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = ({ title }) => (
  <header class={style.header}>
    <h1 class={style.nomargin}>{title}</h1>

  </header>
);

export default Header;
