export default {
  titolo: "La grotta",
  frase: `
    Finalmente giungi alla grotta.
    Hai sentito parlare di funghi fluorescenti e di pipistrelli feroci, e non ti sei mai addentrato oltre che pochi metri, fin dove la luce del sole illumina l'interno.
  `,
  audio: {
    src: "/assets/audio/cap61.mp3",
  },
  risposte: [
    {
      frase: "Ti addentri nell'oscurità",
      next: "capGrotta1",
    },
    {
      frase: "Se hai una coperta e vuoi usarla per riposare",
      checkZaino: "coperta",
      next: "cap64",
    },
    {
      frase: "Resti sull'attenti all'ingresso",
      next: "cap65",
    },
  ],
};
