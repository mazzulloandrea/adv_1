export default {
  titolo: "Il Bosco",
  frase: `
    Mancano pochi minuti per arrivare alla capanna ma un rumore vi mette in allarme

    [verso di animale]
  `,
  audio: {
    src: "/assets/audio/cap53.mp3",
  },
  risposte: [
    {
      frase: "Vuoi combattere con l'accetta?",
      checkZaino: "accetta",
      next: "cap56",
    },
    {
      frase: "Preferisci scappare verso la grotta",
      next: "cap60",
    },
    {
      frase: "Meglio scappare verso il fiume",
      next: "cap70",
    },
    {
      frase: "Combatti a mani nude",
      next: "cap90",
    },
  ],
};
