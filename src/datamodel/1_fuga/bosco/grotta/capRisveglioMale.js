export default {
  "titolo": "La grotta",
  "frase": `
    Ti svegli a mattina inoltrata sentendoti chiamare a gran voce da Denred. 
    "Pantelion! Pantelion! Il vecchio è morto, dobbiamo seppelirlo" 
    
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
}