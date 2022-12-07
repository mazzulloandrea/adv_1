export default {
  titolo: "ultima prova",
  frase: `
    Scocciato il generale ti porge una seconda torcia <<Ora smettila di lamentarti e infilati la sotto>>
  `,
  audio: {
    src: "/assets/audio/secondaTorciaOk.mp3",
  },
  risposte: [
    {
      frase: "Afferri la torcia e inizi a scendere la scala",
      next: "scale",
      zaino: "torcia2",
    },
  ],
};
