export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio bianco è pieno di tracce ben visibili in tutte le direzioni.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale; infine arrivi ad una svolta verso destra dove il passaggio diventa arancione.
    
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sud, ritornando sui tuoi passi sul percorso bianco", next: 'biancoSDirezioneBlu' },
    { frase: "Destra percorso arancione", next: 'arancioneEDirezioneNero', },
  ]
}