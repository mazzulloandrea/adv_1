export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio rosso prosegue fino ad un incrocio a tre vie di cui una è la tua:

    verso ovest c'è la strada rossa dalla quale arrivi,
    a nord una strada blu profonfo mentre a sud un pavimento bianco.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sud strada bianca", next: 'biancoSDirezioneArancione' },
    { frase: "Pavimento blu scuro a nord", next: 'bluNDirezioneNero', },
    { frase: "Torni indietro verso est", next: 'versoIncrocio', },
  ]
}