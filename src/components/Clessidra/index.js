import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { html } from 'htm/preact';
import style from './style.css';

function Clessidra({ duration, onend }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--duration', `${duration}s`);
  }, []);

  return html`
    <div class=${style.progress}>
      <div class=${style.progressbar} onanimationend=${() => onend()}></div>
    </div>
  `
}

export default Clessidra;