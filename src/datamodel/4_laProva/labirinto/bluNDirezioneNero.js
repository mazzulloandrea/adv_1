export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia;
    arrivi ad un incrocio ad angolo con ovest dove il terreno diventa ancora più scuro.
    Davanti a te un nero pesante è il colore del prossimo passaggio.
    
    a sinistra, direzione ovest, nero notte,
    alle tue spalle, direzione sud, il blu intenso

    Da che parte andrai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest verso il nero", next: 'neroODirezioneArancione' },
    { frase: "Torni indietro per la via blu, direzione sud", next: 'bluSDirezioneBianco', },
  ]
}