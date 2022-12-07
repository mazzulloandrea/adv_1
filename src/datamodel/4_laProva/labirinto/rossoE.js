export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio rosso prosegue fino ad un incrocio a tre vie di cui una è la tua.
    A sinistra una strada blu profondo mentre a destra un pavimento bianco.
  `,

  audio: {
    src: "/assets/audio/rossoE.mp3",
  },
  risposte: [
    { frase: "Destra strada bianca", next: "biancoSDirezioneArancione" },
    { frase: "Pavimento blu scuro a sinistra", next: "bluNDirezioneNero" },
    { frase: "Torni indietro alla statua", next: "versoIncrocio" },
  ],
};
