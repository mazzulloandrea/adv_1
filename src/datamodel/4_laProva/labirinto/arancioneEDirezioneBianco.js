export default {
  "titolo": "ultima prova",
  "frase": `
    Cammini sul pavimento arancione fino ad arrivare ad una volta verso sud;
    da questo punto in poi il pavimento è bianco con molti segni di passaggio.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sud percorrendo la via bianca", next: 'biancoSDirezioneBlu', },
    { frase: "Ovest, ritornando sul percorso arancione", next: "arancioneODirezioneNero" },
  ]
}