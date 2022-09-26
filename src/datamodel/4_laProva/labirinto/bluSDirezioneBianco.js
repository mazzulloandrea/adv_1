export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia.
    Arrivi ad un incrocio a tre vie:
    
    direzione ovest, un corridodio rosso,
    alle tue spalle, direzione Nord, il blu intenso,
    davanti, direzione sud, un bianco molto forte

    Da che parte andrai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest verso il rosso", next: 'versoIncrocio' },
    { frase: "Torni indietro per la via blu, direzione Nord", next: 'bluNDirezioneNero', },
    { frase: "Sud corridoio bianco", next: 'biancoSDirezioneArancione', },
  ]
}