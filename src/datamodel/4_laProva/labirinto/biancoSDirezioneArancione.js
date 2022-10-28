export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio bianco è pieno di tracce ben visibili in entrambe le direzioni.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale; infine arrivi ad una svolta ad angolo verso destra.

    a destra, un corridoio arancione acceso, alle tue spalle, il percorso bianco.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Destra via arancione", next: 'arancioneODirezioneNero' },
    { frase: "Indietro bianco", next: 'biancoNDirezioneBlu', }, // todo
  ]
}