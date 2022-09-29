import cap1 from './cap1.js';

export default {
  "titolo": "L'arrivo dei soldati",
  "frase": "<<Sono 7 soldati, presto scappa>> il tono di tua sorella ti fa capire che non c'è un attimo da perdere",
  "audio": {
    "src": "/assets/audio/cap4.mp3",
    "interrompe": ""
  },
  "risposte": cap1.risposte.slice(1),
  "dice": cap1.dice,
  "gioco9": {
    durata: "25",
    combinazione: ["acqua", "aria", "elettricita", "fuoco"],
    type: "memory",
    dataset: "element",
    "successo": "cap13",
    "fallimento": "cap13"
  }
}