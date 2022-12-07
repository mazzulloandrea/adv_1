export default {
  titolo: "prima prova",
  frase: `
    Hai scelto Giak e subito il soldato vi chiede in cosa volete specializzarvi.
    Giak, senza esitare, afferma di voler imparare l'arte dell'attacco a distanza e, senza aspettare la tua approvazione, convince la guardia che gli mostra i diversi tipi di armi: un arco, una balestra ed una fionda.
    Giak incrocia il tuo sguardo non sapendo cosa scegliere.
  `,

  audio: {
    src: "/assets/audio/compagnoGiak.mp3",
  },
  risposte: [
    { frase: "Prendi l'arco", next: "addestramento", zaino: "arco" },
    { frase: "Scegli la balestra", next: "addestramento", zaino: "balestra" },
    { frase: "Meglio la fionda", next: "addestramento", zaino: "fionda" },
  ],
};
