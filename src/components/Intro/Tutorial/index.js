import { h } from "preact";
import { html } from "htm/preact";
import { useState } from "preact/hooks";

import { isIOS } from "../../utils";
import Chrome1 from "../../../assets/icons/intro/tutorial/android/tutorial1.jpg";
import Chrome2 from "../../../assets/icons/intro/tutorial/android/tutorial2.jpg";
import Chrome3 from "../../../assets/icons/intro/tutorial/android/tutorial3.jpg";
import IOS1 from "../../../assets/icons/intro/tutorial/ios/tutorial1.jpg";
import IOS2 from "../../../assets/icons/intro/tutorial/ios/tutorial2.jpg";
import IOS3 from "../../../assets/icons/intro/tutorial/ios/tutorial3.jpg";
import style from "./style.css";

const Tutorial = ({ onEnd }) => {
  const [actual, setActual] = useState(1);

  if (isIOS()) {
    return html`
      <div class=${style.fullPage}>
        ${actual === 1 &&
        html`<img
          class=${style.imgFullPage}
          src=${Chrome1}
          onClick=${() => setActual(2)}
        />`}
        ${actual === 2 &&
        html`<img
          class=${style.imgFullPage}
          src=${Chrome2}
          onClick=${() => setActual(3)}
        />`}
        ${actual === 3 &&
        html`<img
          class=${style.imgFullPage}
          src=${Chrome3}
          onClick=${() => onEnd()}
        />`}
      </div>
    `;
  }
  return html`
    <div>
      ${actual === 1 &&
      html`<img
        class=${style.imgFullPage}
        src=${IOS1}
        onClick=${() => setActual(2)}
      />`}
      ${actual === 2 &&
      html`<img
        class=${style.imgFullPage}
        src=${IOS2}
        onClick=${() => setActual(3)}
      />`}
      ${actual === 3 &&
      html`<img
        class=${style.imgFullPage}
        src=${IOS3}
        onClick=${() => onEnd()}
      />`}
    </div>
  `;
};

export default Tutorial;
