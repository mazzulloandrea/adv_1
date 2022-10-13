export default {
  "titolo": "prima prova",
  "frase": `
    Hai scelto Alexis e subito il soldato vi chiede in cosa volete specializzarvi.
    Alexis, senza esitare, afferma di voler imparare l'arte dell'attacco a distanza e, senza aspettare la tua approvazione, convince la guardia che gli mostra i diversi tipi di armi: 
    un arco, una balestra ed una fionda.
    Alexis incrocia il tuo sguardo non sapendo cosa scegliere.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli l'arco", next: "addestramento", zaino: "arco" },
    { frase: "Prendi la balestra", next: "addestramento", zaino: "balestra" },
    { frase: "La fionda è la scelta migliore", next: "addestramento", zaino: "fionda" },
  ]
}