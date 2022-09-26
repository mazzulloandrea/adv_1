import nemico from './nemico.js';

const resp = nemico.risposte.concat(
  { frase: 'Vuoi scappare cambiando riparo', next: 'scappareDarius' }
);

export default {
  "titolo": "riparo",
  "frase": `
    Continui a seguire Darius; 
    lentamente il tuo avversario si avvicina al retro della tenda, 
    per fortuna non ti sei nascosti li altrimenti ti sarebbe piombato alle spalle.

    Una volta verificato che non c'è nessuno, la guardia, si reca proprio verso il riparo dove sei nascosto tu.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: resp
}