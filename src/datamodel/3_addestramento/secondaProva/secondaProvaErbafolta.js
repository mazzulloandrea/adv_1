export default {
  "titolo": "prima prova",
  "frase": `
    Davanti a te ci sono Gudrum, Aaron e Alexis mentre tua sorella Carcadena ha già formato coppia con Teela.

    Gudrum, più giovane di te di due anni, sembra essere ancora abbattuto per la perdita dell'amico Essertag.
    Aaron, abbassa lo sguardo e sembra non aver sconfitto i timori che lo accompagnano. 
    Alexis, sta guarendo molto lentamente e secondo te non riuscirà ad essere competitivo per i prossimi giorni.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: "Scegli Gudrum ?", next: "compagnoGudrum" },
    { frase: "Scegli Aaron ?", next: "compagnoAaron" },
    { frase: "Scegli Alexis ?", next: "compagnoAlexis" }
  ]
}