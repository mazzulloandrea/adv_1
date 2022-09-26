export default {
  "titolo": "eremita",
  "frase": `
    L'umanoide svolta l'angolo mentre ti senti il cuore in gola;
    l'ombra si fa sempre più vicina e questi attimi sembrano una eternità.

    Compare finalmente un umanoide anziano o quasi, con i vestiti stracciati, 
    senz'armi e stupito della tua presenza cade sulle sue gambe.
    Con un filo di voce ti chiede come ti chiami e soprattutto cosa ci fai li.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi rispondere la verità", next: "verita" },
    { frase: "Vuoi rispondere una bugia", next: "bugia" },
  ],
}