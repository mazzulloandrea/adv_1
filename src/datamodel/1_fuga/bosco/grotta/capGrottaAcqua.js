export default {
  titolo: "La grotta",
  frase: `
    L'acqua fresca e pura migliora le tue capacità.
    Mentre deglutisci intravedi un cunicolo che prima non avevi notato.
  `,
  audio: {
    src: "/assets/audio/capGrottaAcqua.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "capGrottaSentiero",
      gioco: "audio",
      icon: "corpo",
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "capGrottaSentiero",
      gioco: "audio",
      icon: "mente",
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "capGrottaSentiero",
      gioco: "audio",
      icon: "spirito",
    },
  ],
};
