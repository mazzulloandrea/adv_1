export default {
  "titolo": "La grotta",
  "frase": `
    Il sole oramai illumina da qualche ora e senti le lemantele del tuo stomaco vuoto.
    Gli obiettivi della giornata sono due: cercare tua sorella e procurarsi del cibo.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: "Mangi la razione",
      checkZaino: "razione",
      next: "viaggio",
      vita: 1
    },
    {
      frase: "Cerchi delle bacche",
      gioco: "gioco9"
    },
  ],
  gioco9: {
    successo: "viaggio",
    fallimento: "viaggio",
    durata: "15",
    combinazione: "bacche",
    type: "domanda",
    domanda: "Che cibo stai cercando?"
  }
}