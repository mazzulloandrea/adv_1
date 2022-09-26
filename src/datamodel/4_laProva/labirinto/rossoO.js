export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio rosso prosegue fino ad un incrocio a tre vie di cui una è la tua:

    verso est c'è la strada rossa dalla quale arrivi,
    a nord una strada bianca mentre a sud un pavimento blu profondo.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Nord strada bianca", next: 'biancoNDirezioneArancione' },
    { frase: "Pavimento blu scuro a sud", next: 'bluSDirezioneNero', },
    { frase: "Torni indietro verso est", next: 'versoIncrocio', },
  ]
}