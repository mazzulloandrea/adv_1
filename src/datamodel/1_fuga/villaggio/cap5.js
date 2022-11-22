import cap1 from "./cap1.js";

export default {
  titolo: "L'arrivo dei soldati",
  frase:
    "<<Sono legata insieme ad altri, scappa>> il tono di tua sorella ti fa capire che non c'è un attimo da perdere",
  audio: {
    src: "/assets/audio/cap5.mp3", // TODO rifre audio ed mettere voce di carcadena
  },
  risposte: cap1.risposte.slice(1),
  dice: cap1.dice,
  gioco9: cap1.gioco9,
};
