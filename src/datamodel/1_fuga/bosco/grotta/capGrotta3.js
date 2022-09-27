export default {
  "titolo": "La grotta - i resti",
  "frase": `
    Tra le ossa ci sono i brandelli di quello che era un borsello in cui trovi all'interno
    2 monete argentate raffiguranti il Duca di Blick, l'attuale governatore di Berdask.
    Non trovi altro di utile.
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": ""
  },
  "risposte": [
    {
      frase: "Prendi le monete al cadavere",
      borsello: 2,
      next: "capGrottaPipistrelli"
    },
    {
      frase: "Lasci al morto le sue proprietà e vai verso la scalinata",
      next: "capGrotta4"
    }
  ]
}