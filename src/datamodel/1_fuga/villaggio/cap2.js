export default {
  titolo: "L'arrivo dei soldati",
  frase: `
    Ti concentri sulla voglia a forma di falce sulla spalla di Carcadena mentre nel tuo ginocchio aumenta il dolore. 
    Sai che puoi dire poche parole, scegli bene cosa chiedere a tua sorella`,
  audio: {
    src: "/assets/audio/cap2.mp3",
  },
  risposte: [
    {
      frase: "Quanti soldati sono?",
      gioco: "audio",
      next: "cap4"
    },
    {
      frase: "Stai bene?",
      gioco: "audio",
      next: "cap5"
    },
    {
      frase: "Il vecchio?",
      gioco: "audio",
      next: "cap6"
    }
  ]
}