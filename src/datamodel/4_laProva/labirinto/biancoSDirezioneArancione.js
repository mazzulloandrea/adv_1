export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio bianco è pieno di tracce ben visibili che seguono la tua direzione ma anche la direzione contraria.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale;
    infine arrivi ad una svolta ad angola verso ovest:

    avanti a te, verso ovest, un corridoio arancione acceso
    a nord, alle tue spalle, il percorso bianco.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest via arancione", next: 'arancioneODirezioneNero' },
    { frase: "Direzione nord bianco", next: 'biancoNDirezioneBlu', }, // todo
  ]
}