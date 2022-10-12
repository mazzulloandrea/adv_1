import cap1 from './cap1.js';

export default {
  "titolo": "L'arrivo dei soldati",
  "frase": "<<Sta morendo, ma Pantelion scappa, scappa>> il tono di tua sorella ti fa capire che non c'è un attimo da perdere",
  "audio": {
    "src": "/assets/audio/cap6.mp3",
    "interrompe": ""
  },
  "risposte": cap1.risposte.slice(1),
  "dice": cap1.dice,
  gioco9: {
    livello: 2,
    combinazione: ["luna", "aria", "terra", "fuoco"],
    type: "memory",
    dataset: "element",
    successo: "cap13",
    "fallimento": "cap13"
  }
}