import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { html } from "htm/preact";
import style from "./style.css";
import { initialAbilita } from "../config";
import TitleIcon from "../TitleIcon";

function Zaino({ abilita, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // wait 1 sec to finish animation
    setTimeout(() => setVisible(true), 1500);
  }, []);

  if (!visible) return html``;
  return html`
    <div class=${style.wrapper}>
      <div class=${style.textContainer}>
        <div>Puoi portare solo ${initialAbilita.zaino.length} oggetti</div>
        <div>A cosa vuoi rinunciare?</div>
      </div>
      <div class=${style.objects}>
        ${abilita.zaino.map(
          (z) => html`
        <div class=${style.svgContainer}>
          <${TitleIcon} type=${z} onClick=${() => onClick(z)}></${TitleIcon}>
          <div>${z}</div>
        </div>
        `
        )}
      </div>
    </div>
  `;
}

export default Zaino;
