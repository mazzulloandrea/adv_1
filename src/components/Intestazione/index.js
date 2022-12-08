import { h } from "preact";
import { html } from "htm/preact";
import Spezzato from "../../assets/icons/ferite/heartCrash.svg";
import { initialAbilita } from "../config";
import TitleIcon from "../TitleIcon";
import StepProgressBar from "../StepProgressBar";
import {
  Header,
  TopContainer,
  Abilita,
  AbilitaIconContainer,
  Value,
  Caratteristica,
  Cuori,
  AbilitaContainer,
  Left,
  Center,
  Right,
} from "./styled.js";

const Intestazione = ({ step = 0, abilita = {} }) => {
  const { corpo, mente, spirito, vita, zaino, chiavi, borsello } = abilita;

  function getAbilita() {
    return html`
    <${AbilitaContainer}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"corpo"} />
        </${AbilitaIconContainer}>
        <${Value}>${corpo}</${Value}>
      </${Caratteristica}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"mente"} />
        </${AbilitaIconContainer}>
        <${Value}>${mente}</${Value}>
      </${Caratteristica}>
      <${Caratteristica}>
        <${AbilitaIconContainer}>
          <${TitleIcon} type=${"spirito"} />
        </${AbilitaIconContainer}>
        <${Value}>${spirito}</${Value}>
      </${Caratteristica}>
    </${AbilitaContainer}>`;
  }

  function getVita() {
    const total = new Array(initialAbilita.vita).fill(0);
    const vitaActual = new Array(vita).fill(0);
    return html`<${Cuori}>
      ${vitaActual.map(() => html` <${TitleIcon} type="cuore" /> `)}
      ${total.slice(vitaActual.length).map(() => html` <${Spezzato} /> `)}
    </${Cuori}>
    `;
  }

  function getZaino() {
    return html`
      ${zaino.map(
        (z, index) =>
          index < initialAbilita.zainoMaxLength &&
          html`<div>
            <${TitleIcon} type=${z} />
          </div>`
      )}
    `;
  }

  // Layout functions Left, center e Right
  function getLeft() {
    return html`
    <${Left}>
      <${Abilita}>
        ${getVita()}
        ${getAbilita()}
      </${Abilita}>
    </${Left}>
    `;
  }

  function getCenter() {
    return html`
      <${Center}>
        <div>
          ${
            chiavi > 0 &&
            html`
          <${TitleIcon} type=${"chiavi"} />
          <${Value}>${chiavi}</${Value}>`
          }
        </div>
        <div>
          ${
            borsello > 0 &&
            html`
          <${TitleIcon} type=${"borsello"} />
          <${Value}>${borsello}</${Value}>`
          }
        </div>
      </${Center}>
    `;
  }

  function getRight() {
    return html`
      <${Right}>
        ${zaino.length > 0 && html` <${TitleIcon} type=${"zaino"} />`}
        ${zaino.length > 0 && html`<div>${getZaino()}</div>`}
      </${Right}>
    `;
  }

  return html`
      <${Header}>
        <${TopContainer}>
          ${getLeft()}
          ${getCenter()}
          ${getRight()}
        </${TopContainer}>
        <${StepProgressBar} step=${step} style=${{ "margin-top": "2vh" }} />
      </${Header}>
  `;
};

export default Intestazione;
