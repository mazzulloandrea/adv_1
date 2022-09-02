import { h } from 'preact';
import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
import Tomba from '/assets/icons/ferite/morte.svg';
import Reset from '/assets/icons/ferite/reload.svg';
import { morteText, shuffle } from '../utils'
import style from './style.css';

function Morte({ onClick }) {
  const [text, setText] = useState('');

  useEffect(() => setText(shuffle(morteText)[0]), []);

  return html`
    <div class=${style.wrapper}>
      <div class=${style.reset} onClick=${()=> onClick()}>
        <${Reset} />
      </div>
      <div class=${style.text}>${text}</div>
      <${Tomba} />
    </div>
  `;
}

export default Morte;