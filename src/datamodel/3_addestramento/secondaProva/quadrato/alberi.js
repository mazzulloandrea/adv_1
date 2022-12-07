import nemico from "./nemico.js";

const resp = nemico.risposte;

export default {
  titolo: "prima prova",
  frase: `
    Sei dietro gli alberi; ti guardi attorno, cercando indizi su dove possa essere il tuo avversario.
    Non hai il tempo di ragionare che un dardo si conficca nella corteccia a pochi centimetri dalla tua faccia.

    Darius è molto vicino a te e sta caricando la balestra per un nuovo colpo.
  `,

  audio: {
    src: "/assets/audio/alberi.mp3",
  },
  risposte: resp,
};
