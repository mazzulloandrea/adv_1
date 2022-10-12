export default {
  "titolo": "La grotta",
  "frase": `
    Ti svegli a mattina inoltrata sentendoti chiamare a gran voce da Denred: 
    <<Pantelion! Pantelion! Il vecchio è morto, dobbiamo seppellirlo>>
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: "Vai verso tuo fratello",
      next: "avviciniADenred"
    },
    {
      frase: "Ti allontani, non vuoi essere trovato",
      next: "capRisveglioBene"
    },
  ],
  gioco9: {  // type = domanda
    successo: "capRisveglioBene",
    fallimento: "capRisveglioBene",
    durata: "15",
    combinazione: "panthelion",
    type: "domanda",
    domanda: "Come ti chiami?"
  },
}