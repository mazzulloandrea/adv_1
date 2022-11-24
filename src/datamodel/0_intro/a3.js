export default {
  titolo: "Introduzione",
  frase: `
    Il bruciore al ginocchio destro, dove anche tu hai lo stesso segno di Carcadena, è davvero molto forte. 
    La voce di tua sorella vibra nella tua mente <<Sono dal vecchio, sta morendo...>> 
    Carcadena è molto più brava di te ad usare il potere, riesce a farlo più volte e più a lungo
  `,
  audio: {
    src: "/assets/audio/a3.mp3", // TODO alzare audio
  },
  risposte: [
    {
      frase:
        "Ti passa il dolore al ginocchio e, prima che cali il sole, ritorni verso casa pensando al vecchio",
      gioco: "audio",
      next: "cap1",
    },
  ],
};
