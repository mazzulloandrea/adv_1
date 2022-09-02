import { h } from 'preact';
import { html } from 'htm/preact';
import style from './style.css';
import { initialAbilita } from '../config';
import TitleIcon from '../TitleIcon';

function Zaino({ abilita, onClick }) {

  return html`
    <div class=${style.wrapper}>
      <div class=${style.textContainer}>
        <div>Puoi portare solo ${initialAbilita.zaino.length} oggetti</div>
        <div>A cosa vuoi rinunciare?</div>
      </div>
      <div class=${style.objects}>
        ${abilita.zaino.map(z => html`
        <div class=${style.svgContainer}>
          <${TitleIcon} type=${z} onClick=${() => onClick(z)}></${TitleIcon}>
          <div>${z}</div>
        </div>
        `)}
      </div>
    </div>
    
  `
}

export default Zaino;