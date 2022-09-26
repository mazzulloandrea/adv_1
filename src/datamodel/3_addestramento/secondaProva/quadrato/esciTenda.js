import nemico from './nemico.js';

const resp = nemico.risposte.concat(
  { frase: "Se vuoi scappare", next: 'scappareDarius' },
  { frase: "Se vuoi arrenderti", next: "mortePerResa" }
);

export default {
  "titolo": "",
  frase: `
    Esci dalla tenda e ti accorgi che alle tue spalle c'è il tuo nemico che 
    senza esitare un momento ti punta la balestra contro e lancia un dardo che ti sfiora per pochi centimetri.

    Corri a più non posso riparandoti dietro gli alberi mentre Darius,
     imprecando per il colpo mancato, sta caricando nuovamente la balestra.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: resp
}