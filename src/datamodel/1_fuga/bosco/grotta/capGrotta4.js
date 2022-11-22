export default {
  titolo: "La grotta",
  frase: `
    Le rocce sono tropo scivolose per salire e desisti quasi subito.
  `,
  audio: {
    src: "/assets/audio/capGrotta4.mp3",
  },
  risposte: [
    {
      frase: "Esamini il rigagnolo d'acqua",
      next: "capGrotta2",
    },
    {
      frase: "Esamini i resti",
      next: "capGrotta3",
    },
  ],
};
