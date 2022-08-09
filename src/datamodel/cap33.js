export default {
  "titolo": "Falegnameria",
  "frase": `
    Ti fai più piccolo che puoi cercando di trattenere il respiro restando immobile.
    Senti i battiti del cuore forti come un tamburo rimbombare nel tuo petto e nella tua testa
  `,
  "audio": {
    "src": "/assets/audio/cap33.mp3",
    "interrompe": ""
  },
  "gioco": "dice",
  "dice": {
    "successo": "cap34",
    "fallimento": "cap36",
    "obiettivo": 11, // numero da raggiungere con il lancio dei dadi
    "abilita": ["corpo", "spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 4 // quanti lanci col dado
  },

}