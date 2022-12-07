export default {
  titolo: "ultima prova",
  frase: `
    Cammini sul pavimento arancione fino ad arrivare a un incrocio con quattro vie: a sinistra la via iniziale dalla quale sei entrato nel labirinto, indietro, da dove arrivi, un passaggio di colore arancione acceso, a destra, un corridio colorato di viola, aventi, in direzione est, un corridoio nero.
  `,

  audio: {
    src: "/assets/audio/arancioneEDirezioneNero.mp3",
  },
  risposte: [
    { frase: "Indietro verso l'arancione", next: "arancioneODirezioneBianco" },
    { frase: "Destra percorrendo la via viola", next: "versoIncrocio" },
    { frase: "Avanti corridoio nero", next: "neroEDirezioneBlu" },
  ],
};
