export default {
  titolo: "eremita",
  frase: `
    L'umanoide svolta l'angolo mentre ti senti il cuore in gola; l'ombra si fa sempre più vicina e questi attimi sembrano durare una eternità.

    Compare finalmente un uomo, anziano o quasi, con i vestiti stracciati, senz'armi e, stupito della tua presenza, cade sulle sue gambe.
    Con un filo di voce ti chiede come ti chiami e soprattutto cosa ci fai li.
  `,

  audio: {
    src: "/assets/audio/eremita.mp3",
  },
  risposte: [
    { frase: "Vuoi rispondere la verità", next: "verita", giakkos: true },
    { frase: "Vuoi rispondere una bugia", next: "bugia", giakkos: true },
  ],
};
