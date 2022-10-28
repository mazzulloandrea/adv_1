export default {
  titolo: "Nel grano",
  frase: `
    Miracolosamente riesci a scappare tra le imprecazioni dei soldati che adesso minacciano di dare fuoco al campo di grano.
    `,
  audio: {
    src: "/assets/audio/cap25.mp3",
    interrompe: ""
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "cap26",
      gioco: "audio",
      icon: "corpo"
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "cap26",
      gioco: "audio",
      icon: "mente"
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "cap26",
      gioco: "audio",
      icon: "spirito"
    }
  ],
}