import { html } from 'htm/preact';
import Cuore from '../../assets/icons/cuore.svg';
import { Header, Abilita, Title, Zaino, Cuori, AbilitaContainer } from './styled.js';

const Intestazione = ({ abilita, title }) => {
  const { corpo, mente, spirito, vita, zaino } = abilita;

  function getAbilita() {
    return html`
    <${AbilitaContainer}>
      <div>
        <div>C</div>
        <div>${corpo}</div>
      </div>
      <div>
        <div>M</div>
        <div>${mente}</div>
      </div>
      <div>
        <div>S</div>
        <div>${spirito}</div>
      </div>
      </ />`
  };

  function getVita() {
    const cuori = new Array(vita).fill(0);
    return html`
    <${Cuori}>
      ${cuori.map(c => html`
      <${Cuore} />`)}
      </ />
      
    `;
  }

  function getZaino() {
    return html`
      ${zaino.map(z => html`<div>${z.nome}</div>`)}
    `
  }

  return html`
    <${Header}>
      <${Abilita}>
        ${getAbilita()}
        ${getVita()}
        </ />
    
        <${Title}>${title}</ />
          <${Zaino}>${getZaino()}</ />
    
            </ />
  `
};

export default Intestazione;
