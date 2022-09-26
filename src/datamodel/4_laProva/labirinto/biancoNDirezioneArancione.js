export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio bianco è pieno di tracce ben visibili che seguono la tua direzione ma anche la direzione contraria.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale;
    infine arrivi ad una svolta verso est dove il passaggio diventa arancione.

    
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sud, ritornando sui tuoi passi sul percorso bianco", next: 'biancoSDirezioneBlu' },
    { frase: "Est percorso arancione", next: 'arancioneEDirezioneNero', },
  ]
}