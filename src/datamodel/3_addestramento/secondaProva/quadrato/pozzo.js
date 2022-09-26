export default {
  "titolo": "prima prova",
  "frase": `
    Guardi attentamente il tuo obiettivo cercando di capire quale sia la strategia migliore per avvicinarti.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Strisci per terra', next: "trappola" },
    { frase: 'corri velocemente', gioco: "gioco9" },
  ],
  gioco9: {
    fallimento: "trappola",
    successo: 'nemico',
    durata: "20",
    type: "memory",
    combinazione: ["salta", "zigzag", "zigzag", "sinistra", "destra"],
    dataset: "run",
  }
}