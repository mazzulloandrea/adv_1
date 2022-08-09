import { html } from 'htm/preact';
import Cuore from '../../assets/icons/caratteristiche/cuore.svg';
import Spezzato from '../../assets/icons/ferite/heartCrash.svg';
import { initialAbilita } from '../config';
import TitleIcon from '../TitleIcon';
import { Header, Abilita, AbilitaIconContainer, Caratteristica, Title, IconContainer, Zaino, Cuori, AbilitaContainer } from './styled.js';

const Intestazione = ({ abilita = {}, title = '', actualComponent }) => {
  const { corpo, mente, spirito, vita, zaino } = abilita;

  function getAbilita() {
    return html`
    <${AbilitaContainer}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"corpo"} />
          </ />
          <div>${corpo}</div>
          </ />
          <${Caratteristica}>
            <${AbilitaIconContainer}>
              <${TitleIcon} type=${"mente"} />
              </ />
              <div>${mente}</div>
              </ />
              <${Caratteristica}>
                <${AbilitaIconContainer}>
                  <${TitleIcon} type=${"spirito"} />
                  </ />
                  <div>${spirito}</div>
                  </ />
                  </ />`
  };

  function getVita() {
    console.log(abilita, initialAbilita);
    const total = new Array(initialAbilita.vita).fill(0);
    const vitaActual = new Array(vita).fill(0);
    return html`
    <${Cuori}>
      ${vitaActual.map(c => html`
      <${Cuore} />
      `)}
      ${total.slice(vitaActual.length).map(c => html`
      <${Spezzato} />
      `)}
      </ />
    `;
  }

  function getZaino() {
    return html`
      ${zaino.map(z => html`<div>${z.nome}</div>`)}
    `
  }

  function getTitle() {
    if (actualComponent === 'audio') return html`<${Title}>${title}</ />`;
    return html`<${IconContainer}>
  <${TitleIcon} type=${actualComponent} />
  </ />`
  }

  return html`
    <${Header}>
      <${Abilita}>
        ${getAbilita()}
        ${getVita()}
        </ />
        ${getTitle()}
        ${zaino && html`<${Zaino}>${getZaino()}</ />`}
          </ />
    `
};

export default Intestazione;
