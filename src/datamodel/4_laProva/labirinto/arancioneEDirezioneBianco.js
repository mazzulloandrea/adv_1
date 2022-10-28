export default {
  titolo: "ultima prova",
  frase: `
    Cammini sul pavimento arancione fino ad arrivare ad una volta verso sinistra; da questo punto in poi il pavimento è bianco con molti segni di passaggio.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Svolti l'ngolo a sinistra, la via bianca", next: 'biancoNDirezioneBlu', },
    { frase: "Ritorni sul percorso arancione", next: "arancioneODirezioneNero" },
  ]
}