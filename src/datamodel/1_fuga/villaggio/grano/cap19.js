export default {
  titolo: "Nel grano",
  frase: `
    Convincerlo è facile, soprattutto perchè i soldati hanno dato fuoco al campo che sta bruciando sempre più velocemente.
    Uscite fuori dal campo insieme e vi dirigete nel bosco in piena notte.
  `,
  audio: {
    src: "/assets/audio/cap19.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "cap51",
      gioco: "audio",
      icon: "corpo",
      aaron: true,
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "cap51",
      gioco: "audio",
      icon: "mente",
      aaron: true,
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "cap51",
      gioco: "audio",
      icon: "spirito",
      aaron: true,
    }
  ],
}