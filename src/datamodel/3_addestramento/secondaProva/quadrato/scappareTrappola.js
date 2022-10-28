import nemico from './nemico.js';

const resp = nemico.risposte.concat(
  { frase: "Se vuoi scappare", next: 'scappareDarius' },
  { frase: "Se vuoi arrenderti", next: "mortePerResa" },
)

export default {
  titolo: "",
  frase: `
    Mentre salti fuori dalla buca il colpo di balestra ti colpisce di striscio sul polpaccio sinistro,
    un forte dolore pervade il tuo corpo ma senza esitare corri via.
    L'adrenalina e la concentrazione ti caricano così tanto da non sentire momentaneamente il dolore;
    scappi a più non posso dirigendoti verso gli alberi 
    mentre il tuo inseguitore gridando di volerti uccidere ricarica la balestra.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3",
  },
  risposte: resp
}