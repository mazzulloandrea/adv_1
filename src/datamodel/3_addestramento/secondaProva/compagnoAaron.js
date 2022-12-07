export default {
  titolo: "prima prova",
  frase: `
    Hai scelto Aaron e subito il soldato vi chiede in cosa volete specializzarvi.
    Aaron, senza esitare, afferma di voler imparare l'arte della difesa e, senza aspettare la tua approvazione, convince la guardia che gli mostra i diversi tipi di strategia: uno scudo, una armatura e un mantello.
    Aaron incrocia il tuo sguardo non sapendo cosa scegliere.
  `,
  audio: {
    src: "/assets/audio/compagnoAaron.mp3",
  },
  risposte: [
    { frase: "Prendi lo scudo", next: "addestramento", zaino: "scudo" },
    { frase: "Indossi l'armatura", next: "addestramento", zaino: "armatura" },
    {
      frase: "Preferisci il mantello",
      next: "addestramento",
      zaino: "mantello",
    },
  ],
};
