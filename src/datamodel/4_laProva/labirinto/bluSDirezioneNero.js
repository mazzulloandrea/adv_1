export default {
  "titolo": "ultima prova",
  "frase": `
    Il blu scuro sembra assorbire la luce della torcia;
    arrivi ad un incrocio ad angolo con Est dove il terreno diventa ancora più scuro.
    Davanti a te un nero pesante è il colore del prossimo passaggio.
    
    a sinistra, direzione Est, nero notte,
    alle tue spalle, direzione Nord, il blu intenso

    Da che parte andrai?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est verso il nero", next: 'neroEDirezioneArancione' },
    { frase: "Torni indietro per la via blu, direzione Nord", next: 'bluNDirezioneBianco', },
  ]
}