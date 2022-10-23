import nemico from './nemico.js';

const resp = nemico.risposte.concat(
  { frase: 'Vuoi scappare cambiando riparo', next: 'scappareDarius' }
);

export default {
  "titolo": "riparo",
  "frase": `
    Continui a seguire Darius; lentamente il tuo avversario si avvicina al retro della tenda.
    Per fortuna non ti sei nascosti li, altrimenti ti sarebbe piombato alle spalle.

    Dopo pochi istanti, la guardia, si reca proprio verso il riparo dove sei nascosto tu.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: resp
}