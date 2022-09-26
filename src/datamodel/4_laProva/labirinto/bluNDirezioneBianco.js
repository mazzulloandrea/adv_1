export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia,
    infine arrivi ad un incrocio a tre vie: 

    verso Est una via rossa,
    verso nord una strada bianca
    e indietro verso sud la strada blu.

    Che strada prenderai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est verso il rosso", next: 'versoIncrocio' },
    { frase: "Sud nel corridoio blu", next: 'bluSDirezioneNero' },
    { frase: "A nord verso il terreno bianco", next: 'biancoNDirezioneArancione' },
  ]
}