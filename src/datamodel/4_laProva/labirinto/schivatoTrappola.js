import portaMetallica from "./portaMetallica";

export default {
  titolo: "ultima prova",
  frase: `
    Schivi la lama per un pelo, che scompare di nuovo sopra di te.
    La porta metallica è ancora chiusa e non ci sono altre vie se non ritornare indietro.
  `,
  audio: {
    src: "/assets/audio/schivatoTrappola.mp3",
  },
  risposte: portaMetallica.risposte,
};
