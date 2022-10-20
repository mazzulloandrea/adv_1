export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia.
    Arrivi ad un incrocio a tre vie:
    a destra, un corridodio rosso,
    alle tue spalle il blu intenso,
    davanti, un bianco molto forte

    Da che parte andrai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Destra verso il rosso", next: 'versoIncrocio' },
    { frase: "Torni indietro per la via blu, direzione Nord", next: 'bluNDirezioneNero', },
    { frase: "Avanti corridoio bianco", next: 'biancoSDirezioneArancione', },
  ]
}