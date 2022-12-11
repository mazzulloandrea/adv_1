export default {
  titolo: "prima prova",
  frase: `
   Dei ragazzi di Murafredde, la tua scelta può cadere solo su Giak o Frozia perchè Teela ha già fatto coppia con Carcadena; Redro, invece, avendo vinto la prima prova, farà coppia con il generale Ravon. 
  `,

  audio: {
    src: "/assets/audio/secondaProvaMurafredde",
  },
  risposte: [
    {
      frase: "Scegli Giak, muscoloso dai capelli rossi ?",
      next: "compagnoGiak",
    },
    { frase: "Scegli Frozia, grassoccio tuttologo ?", next: "compagnoFrozia" },
  ],
};
