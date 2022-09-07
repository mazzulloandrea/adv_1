export default {
  "titolo": "Il Bosco",
  "frase": `
    Inizi ad agitare furiosamente l'accetta verso il cinghiale che non sembra demordere dal provare a colpirti.
  `,
  "audio": {
    "src": "/assets/audio/cap56.mp3",
    "interrompe": ""
  },
  "gioco": "gioco9",
  // "dice": {
  //   "successo": "cap57",
  //   "fallimento": "cap90",
  //   "obiettivo": 17, // numero da raggiungere con il lancio dei dadi
  //   "abilita": ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
  //   "lanci": 4 // quanti lanci col dado
  // },
  "gioco9": {
    "successo": "ca57",
    "fallimento": "cap90",
    "durata": "5",
    "combinazione": ["spada", "spada", "teschio"],
    "type": "memory",
    "dataset": "combat"
  }
}