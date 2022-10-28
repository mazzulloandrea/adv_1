export default {
  titolo: "ultima prova",
  frase: `
    Cammini sul pavimento arancione fino ad arrivare ad una svolta ad angolo verso sinistra.
    Dopo l'angolo il pavimento cambia colore ed il corridio è tutto bianco; con la torcia illumini per bene vedendo segni di passaggio anche recenti.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Continui a sinistra sul corridoio bianco", next: 'biancoSDirezioneBlu' },
    { frase: "Torni indietro per la via arancione", next: 'arancioneEDirezioneNero', },
  ]
}