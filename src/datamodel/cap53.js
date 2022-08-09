export default {
  "titolo": "Il Bosco",
  "frase": `
    Mancano pochi minutiper arrivarfe alla capanna ma un rumore vi mette in allarme

    -- rumore di boar -----
  `,
  "audio": {
    "src": "/assets/audio/cap53.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Vuoi combattere con l'accetta?",
      "checkZaino": "accetta",
      "next": "cap56",
    },
    {
      "frase": "Scappare verso la grotta",
      "next": "cap60"
    },
    {
      "frase": "Scappare verso gli alberi",
      "next": "cap70"
    },
    {
      "frase": "Combatti a mani nude",
      "next": "cap90"
    }
  ],
}