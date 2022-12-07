export default {
  titolo: "Introduzione",
  frase: `
    Sei molto stanco e con fatica accatasti gli ultimi ciocchi; poi ti fermi, ti rilassi, chiudi gli occhi e ti concentri su tua sorella gemella.
    Pensi ai suoi capelli biondi, la sua schiena ed infine la voglia a forma di falce che Carcadena ha sulla sua spalla sinistra. 
    Sai che puoi comunicarle col pensiero solo poche parole`,
  audio: {
    src: "/assets/audio/a1.mp3",
  },
  risposte: [
    {
      frase: "Dove sei sorella?",
      gioco: "text",
    },
    {
      frase: "Carcadena, tutto bene?",
      gioco: "text",
    },
  ],
  text: {
    successo: "a3",
    fallimento: "a3",
    durata: "20",
    domande: [
      "Come ti chiami?",
      "Come si chiama tua sorella?",
      "Come si chiama tuo fratello?",
      "Quanti anni ha tua sorella?",
      "Quanti anni hai tu?",
    ],
    risposte: [
      ["pantelion", "phantelion"],
      ["carcadena", "carcadaena"],
      ["denred"],
      ["14"],
      ["14"],
    ],
  },
};
