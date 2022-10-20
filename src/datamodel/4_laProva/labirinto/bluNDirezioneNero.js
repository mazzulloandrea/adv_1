export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia; arrivi ad un incrocio a sinistra dove il terreno diventa ancora più scuro.
    Davanti a te un nero pesante è il colore del prossimo passaggio.
    
    A sinistra, nero notte, alle tue spalle, il blu intenso

    Da che parte andrai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sinistra verso il nero", next: 'neroODirezioneArancione' },
    { frase: "Torni indietro per la via blu", next: 'bluSDirezioneBianco', },
  ]
}