export default {
  "titolo": "Il Bosco",
  "frase": `
    Hai finalmente trovato la grotta.
    Entri di pochi metri evitando il buio più totale.
  `,
  "audio": {
    "src": "/assets/audio/cap61.mp3",
    "interrompe": ""
  },
  risposte: [
    {
      frase: "Se hai una coperta e vuoi usarla",
      checkZaino: "coperta",
      next: "cap64"
    },
    {
      frase: "Resti sull'attenti",
      next: "cap65"
    }
  ]
}