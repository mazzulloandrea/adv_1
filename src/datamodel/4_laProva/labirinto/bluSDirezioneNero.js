export default {
  titolo: "ultima prova",
  frase: `
    Il blu scuro sembra assorbire la luce della torcia; arrivi ad un incrocio ad angolo, a sinistra, dove il terreno diventa ancora più scuro.
    Nero è il colore del prossimo passaggio.

    Da che parte andrai?
  `,

  audio: {
    src: "/assets/audio/bluSDirezioneNero.mp3",
  },
  risposte: [
    { frase: "Sinistra verso il nero", next: "neroEDirezioneArancione" },
    { frase: "Torni indietro per la via blu", next: "bluNDirezioneBianco" },
  ],
};
