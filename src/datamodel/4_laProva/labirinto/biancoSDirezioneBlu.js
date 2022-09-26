export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio bianco è pieno di tracce ben visibili che seguono la tua direzione ma anche la direzione contraria.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale;
    infine arrivi ad un nuovo bivio:

    in direzione Est mattoni rossi decorano il pavimento,
    a sud, un terreno blu intenso che ricorda il mare,
    a nord, sul percorso bianco.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est via rossa", next: 'versoIncrocio' },
    { frase: "Via bianca, direzione Nord", next: 'biancoNDirezioneArancione', },
    { frase: "Direzione sud pavimento blu", next: 'bluSDirezioneNero', },
  ]
}