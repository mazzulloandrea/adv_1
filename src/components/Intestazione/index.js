import { html } from 'htm/preact';
import Spezzato from '../../assets/icons/ferite/heartCrash.svg';
import { initialAbilita } from '../config';
import TitleIcon from '../TitleIcon';
import {
  Header,
  Abilita,
  AbilitaIconContainer,
  Caratteristica,
  Cuori,
  AbilitaContainer,
  Left,
  Center,
  Right,
} from './styled.js';

const Intestazione = ({ abilita = {}, title = '', actualComponent }) => {
  const { corpo, mente, spirito, vita, zaino, chiavi, borsello } = abilita;

  function getAbilita() {
    return html`
    <${AbilitaContainer}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"corpo"} />
        </${AbilitaIconContainer}>
        <div>${corpo}</div>
      </${Caratteristica}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"mente"} />
        </${AbilitaIconContainer}>
        <div>${mente}</div>
      </${Caratteristica}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"spirito"} />
        </${AbilitaIconContainer}>
        <div>${spirito}</div>
      </${Caratteristica}>
    </${AbilitaContainer}>`
  };

  function getVita() {
    const total = new Array(initialAbilita.vita).fill(0);
    const vitaActual = new Array(vita).fill(0);
    return html`
    <${Cuori}>
      ${vitaActual.map(c => html`
      <${TitleIcon} type="cuore" />
      `)}
      ${total.slice(vitaActual.length).map(c => html`
      <${Spezzato} />
      `)}
    </${Cuori}>
    `;
  }

  function getZaino() {
    return html`
      ${zaino.map((z, index) => index < initialAbilita.zainoMaxLength && html`<div>
        <${TitleIcon} type=${z} />
        </div>`
      )}
    `
  }

  function getLeft() {
    return html`
    <${Left}>
      <${Abilita}>
        ${getAbilita()}
        ${getVita()}
      </${Abilita}>
    </${Left}>
    `
  }

  function getCenter() {
    return html`
      <${Center}>
        <div>
          ${html`
          <${TitleIcon} type=${"chiavi"} />
          <div>${chiavi}</div>`}
        </div>
        <div>
          ${html`
          <${TitleIcon} type=${"borsello"} />
          <div>${borsello}</div>`}
        </div>
      </${Center}>
    `;
  }

  function getRight() {
    return html`
      <${Right}>
        ${zaino.length > 0 && html`
        <${TitleIcon} type=${"zaino"} />`}
        ${zaino.length > 0 && html`<div>${getZaino()}</div>`}
      </${Right}>
    `
  }

  return html`
      <${Header}>
        ${getLeft()}
        ${getCenter()}
        ${getRight()}
      </${Header}>
  `;
};

export default Intestazione;