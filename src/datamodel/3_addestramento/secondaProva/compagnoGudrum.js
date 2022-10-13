export default {
  "titolo": "prima prova",
  "frase": `
    Hai scelto Gudrum e subito il soldato vi chiede in cosa volete specializzarvi.
    Gudrum, senza esitare, afferma di voler imparare il combattimento ravvicinato e, senza aspettare la tua approvazione, convince la guardia che gli mostra quattro armi diverse: 
    una spada, un bastone lungo, un'ascia ed un martello.
    Gudrum incrocia il tuo sguardo non sapendo cosa scegliere.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: 'Spada', next: "addestramento", zaino: "spada" },
    { frase: "Il bastone è la scelta milgiore", next: "addestramento", zaino: "bastone" },
    { frase: "Impugni l'ascia ", next: "addestramento", zaino: "ascia" },
    { frase: "Scegli il martello", next: "addestramento", zaino: "martello" }
  ]
}