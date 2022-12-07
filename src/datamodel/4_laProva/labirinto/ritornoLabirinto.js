export default {
  titolo: "ultima prova",
  frase: `
    Il piccolissimo corridoio prosegue fino ad un incrocio a quattro vie di cui una è la tua: a sud la strada dalla quale arrivi, a nord un corridoio viola, ad est un corridodio arancione, a ovest una via nera.
  `,

  audio: {
    src: "/assets/audio/ritornoLabirinto.mp3",
  },
  risposte: [
    { frase: "Est verso l'arancione", next: "arancioneEDirezioneBianco" },
    { frase: "Nord per la via viola", next: "versoIncrocio" },
    { frase: "Sud, tornando indietro", next: "portaMetallica" },
    { frase: "Ovest percorrendo la via nera", next: "neroODirezioneBlu" },
  ],
};
