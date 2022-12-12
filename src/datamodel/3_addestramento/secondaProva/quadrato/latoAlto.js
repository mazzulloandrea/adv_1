export default {
  titolo: "seconda prova",
  frase: `
    Prosegui avanti e indietro, per tutto il lato, senza trovare alcun appiglio o aiuto per scavalcare.

    Da che parte prosegui?
  `,

  audio: {
    src: "/assets/audio/latoAlto.mp3",
  },
  risposte: [
    { frase: "Vai a sinistra", gioco: "latoSinistro" },
    { frase: "Vai a destra", next: "latoBasso" },
  ],
};
