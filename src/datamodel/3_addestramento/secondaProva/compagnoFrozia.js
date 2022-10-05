export default {
  "titolo": "prima prova",
  "frase": `
    Hai scelto Frozia e subito il soldato vi chiede in cosa volete specializzarvi.
    Frozia, senza esitare, afferma di voler imparare l'arte della difesa e, senza aspettare la tua approvazione, convince la guardia che gli mostra i diversi tipi di strategia: 
    uno scudo, una armatura e un mantello.
    Frozia incrocia il tuo sguardo non sapendo cosa scegliere.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: "Scegli lo scudo", next: "addestramento", zaino: "scudo" },
    { frase: "Scegli l'armatura", next: "addestramento", zaino: "armor1" },
    { frase: "Scegli il mantello", next: "addestramento", zaino: "mantello" },
  ]
}