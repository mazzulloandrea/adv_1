export default {
  titolo: "seconda prova",
  frase: `
    Su questo lato del muro non c'è assolutamente nulla.
  `,
  audio: {
    src: "/assets/audio/latoDestro.mp3",
  },
  risposte: [
    { frase: "Prosegui", next: "latoAlto" },
    { frase: "Ritorni indietro", next: "latoBasso" },
  ],
};
