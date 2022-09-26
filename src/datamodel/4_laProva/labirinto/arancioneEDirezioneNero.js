export default {
  "titolo": "ultima prova",
  "frase": `
    Cammini sul pavimento arancione fino ad arrivare ad un incrocio a quattro vie:
    a nord la via iniziale dalla quale sei entrato nel labirinto,
    a ovest, da dove arrivi, un passaggio di colore arancione acceso
    a sud, un corridio colorato di viola,
    aventi, in direzione est, un corridoio nero.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest verso l'arancione", next: 'arancioneODirezioneBianco' },
    { frase: "Sud percorrendo la via viola", next: 'versoIncrocio', },
    { frase: "Est corridoio nero", next: "neroEDirezioneBlu" },
  ]
}