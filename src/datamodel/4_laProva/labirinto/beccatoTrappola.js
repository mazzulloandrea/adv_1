import portaMetallica from "./portaMetallica";

export default {
  titolo: "ultima prova",
  frase: `
    La lama ti ferisce ed immediatamente si ritrae, scomparendo nella parete sopra di te.
    La porta metallica è ancora chiusa e non ci sono altre vie se non ritornare indietro.
  `,
  audio: {
    src: "/assets/audio/beccatoTrappola.mp3",
  },
  risposte: portaMetallica.risposte,
};
