export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio viola prosegue fino ad un incrocio a quattro vie di cui una è la tua: avanti c'è l'ingresso del labirinto dal quale sei entrato, ad destra un corridodio nero, a sinistra una via arancione.
  `,

  audio: {
    src: "/assets/audio/violaN.mp3",
  },
  risposte: [
    { frase: "Destra (nero)", next: "neroEDirezioneBlu" },
    { frase: "Sinistra (arancione)", next: "arancioneODirezioneBianco" },
    { frase: "Alle tue spalle (viola) verso la statua", next: "versoIncrocio" },
  ],
};
