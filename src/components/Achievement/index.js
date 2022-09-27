import preact from 'preact';
import { html } from 'htm/preact';

const aList = [
  {
    text: 'morire'
  },
  {
    text: 'Raggiungere corpo 2'
  },
  {
    text: 'Raggiungere mente 2'
  },
  {
    text: 'Raggiungere spirito 2'
  },
  {
    text: 'zaino vuoto'
  },
  {
    text: 'zaino pieno'
  },
  {
    text: 'finire in 30 minuti'
  },
  {
    text: 'finire in 10 minuti'
  },
  {
    text: 'finire in 5 minuti'
  },
  {
    text: 'finire con 4 vite'
  },
  {
    text: 'salvare Aaron'
  }
]
function Achievement() {
  return (
    html`
    <div>
      <div>Risultati</div>
      <div>- - -</div>
      <div>
        ${aList.map(el => html`
        <div>${el.text}</div>
        `)}
      </div>
    </div>`
  );
}

export default Achievement;