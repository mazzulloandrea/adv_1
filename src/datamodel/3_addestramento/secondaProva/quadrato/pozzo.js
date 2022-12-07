export default {
  titolo: "prima prova",
  frase: `
    Guardi attentamente il tuo obiettivo cercando di capire quale sia la strategia migliore per avvicinarti.
  `,

  audio: {
    src: "/assets/audio/pozzo.mp3",
  },
  risposte: [
    { frase: "Strisci per terra", next: "trappola" },
    { frase: "Corri velocemente", gioco: "gioco9" },
  ],
  gioco9: {
    fallimento: "trappola",
    successo: "nemico",
    livello: 2,
    type: "memory",
    combinazione: ["erba", "foresta", "grano", "ruota"],
    dataset: "vario",
  },
};
