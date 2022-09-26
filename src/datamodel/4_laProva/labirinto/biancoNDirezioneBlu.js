export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio bianco è pieno di tracce ben visibili che seguono la tua direzione ma anche la direzione contraria.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale;
    infine arrivi ad un nuovo bivio:

    a sinistra, direzione ovest, mattoni rossi decorano il pavimento,
    a nord, un terreno blu intenso che ricorda il mare,
    a sud, ritornando sui tuoi passi sul percorso bianco.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest via rossa", next: 'versoIncrocio' },
    { frase: "Torni indietro per la via bianca, direzione sud", next: 'biancoSDirezioneArancione', },
    { frase: "Direzione nord pavimento blu", next: 'bluNDirezioneNero', },
  ]
}