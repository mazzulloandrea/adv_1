export default {
  "titolo": "La grotta",
  "frase": `
    L'acqua sembra fresca e pulita e potresti berne un po' e riposare qualche minuto.
  `,
  "audio": {
    "src": "/assets/audio/cap66.mp3", // todo
    "interrompe": ""
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