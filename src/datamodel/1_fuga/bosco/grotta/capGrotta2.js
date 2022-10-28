export default {
  titolo: "La grotta",
  frase: `
    L'acqua sembra fresca e pulita, potresti berne un po'.
  `,
  audio: {
    src: "/assets/audio/cap7.mp3", // todo
    interrompe: ""
  },
  risposte: [
    {
      frase: "Se vuoi bere l'acqua",
      next: "capGrottaAcqua"
    },
    {
      frase: "Se preferisci esaminare i resti",
      next: "capGrotta3"
    },
    {
      frase: "Se sali sulla scalinata",
      next: "capGrotta4"
    }
  ]
}