export default {
  "titolo": "Introduzione",
  "frase": `
    <<chop efx ...Bastardo! Te la farò pagare! ah si se te la farò pagare <chop efx> >> 
    Ti chiami Pantelion, hai 14 anni e sei infuriato con tuo fratellastro maggiore Denred`,
  "audio": {
    "src": "/assets/audio/a.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Spacchi la legna infuriato con Denred",
      "gioco": "dice",
    },
    {
      "frase": "Cerchi di calmarti",
      "gioco": "gioco9",
    },
  ],
  "dice": {
    "successo": "a0",
    "fallimento": "a1",
    "obiettivo": 14,
    "abilita": ["corpo", "mente", "spirito"],
    "lanci": 6
  },
  // "gioco9": {
  //   "successo": "a0",
  //   "fallimento": "a1",
  //   "durata": "10",
  //   // "combinazione": [
  //   //   "corri",
  //   //   "zigzag",
  //   //   "destra",
  //   // ],
  //   "combinazione": "pantelion",
  //   "type": "domanda",
  //   "domanda": "Come ti chiami?",
  // }
  "gioco9": {
    "successo": "a0",
    "fallimento": "a1",
    "durata": "10",
    "combinazione": ["stop", "stop"],
    "type": "memory",
    "dataset": "run"
  }
}