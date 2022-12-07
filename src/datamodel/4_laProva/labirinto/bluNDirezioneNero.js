export default {
  titolo: "ultima prova",
  frase: `
    Il blu scuro sembra assorbire la luce della torcia; arrivi ad un angolo a sinistra dove il terreno diventa ancora più scuro.
    
    A sinistra, c'è il nero notte, alle tue spalle, il blu intenso.

    Da che parte andrai?
  `,

  audio: {
    src: "/assets/audio/bluNDirezioneNero.mp3",
  },
  risposte: [
    { frase: "Sinistra verso il nero", next: "neroODirezioneArancione" },
    { frase: "Torni indietro per la via blu", next: "bluSDirezioneBianco" },
  ],
};
