export default {
  "titolo": "ultima prova",
  "frase": `
    Cammini sul pavimento arancione fino ad arrivare ad una svolta a 90 gradi, verso sud.
    Dopo l'angolo il pavimento cmabia colore ed il corridio a sud è tutto bianco;
    con la torcia illumini per bene vedendo che ci sono molti segni di passaggio anche recenti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Continui a sud sul corridoio bianco", next: 'biancoSDirezioneBlu' },
    { frase: "Torni indietro per la via arancione, direzione Est", next: 'arancioneEDirezioneNero', },
  ]
}