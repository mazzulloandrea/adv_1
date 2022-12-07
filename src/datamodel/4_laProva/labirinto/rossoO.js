export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio rosso prosegue fino ad un incrocio a tre vie di cui una è la tua.
    A destra una strada bianca mentre a sinistra un pavimento blu profondo.
  `,

  audio: {
    src: "/assets/audio/rossoO.mp3",
  },
  risposte: [
    { frase: "Destra strada bianca", next: "biancoNDirezioneArancione" },
    { frase: "Pavimento blu scuro a sinistra", next: "bluSDirezioneNero" },
    { frase: "Torni indietro alla statua", next: "versoIncrocio" },
  ],
};
