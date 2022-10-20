export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio bianco è pieno di tracce ben visibili.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale; infine arrivi ad un nuovo bivio:

    a sinistra un corriodio rosso,
    avanti, un terreno blu intenso che ricorda il mare,
    dietro di te, sul percorso bianco.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sinistra via rossa", next: 'versoIncrocio' },
    { frase: "Via bianca, ritornando indietro", next: 'biancoNDirezioneArancione', },
    { frase: "Sempre dritto pavimento blu", next: 'bluSDirezioneNero', },
  ]
}