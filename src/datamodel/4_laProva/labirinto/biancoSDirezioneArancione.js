export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio bianco è pieno di tracce ben visibili in entrambe le direzioni.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale; infine arrivi ad una svolta ad angolo verso destra.

    Un corridoio arancione acceso e, alle tue spalle, il percorso bianco.
  `,

  audio: {
    src: "/assets/audio/biancoSDirezioneArancione.mp3",
  },
  risposte: [
    { frase: "Destra via arancione", next: "arancioneODirezioneNero" },
    { frase: "Indietro bianco", next: "biancoNDirezioneBlu" },
  ],
};
