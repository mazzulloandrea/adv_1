export default {
  "titolo": "Il Bosco",
  "frase": `
    Torni indietro e dopo qualche minuto ti senti una mano afferrarti nell'oscurità: è tuo fratellastra Dender.

    --- copai da cap 7
  `,
  "audio": {
    "src": "/assets/audio/cap71.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Preferisci parlare con qualcuno",
      //-> "silenzio è notte"
      "gioco": "audio",
      "next": "cap102"
    },
    {
      "frase": "Preferisci cercare di liberarti",
      // -> "cosa cerchi di fare ragazzo e poi dove vorresti andare di notte, non lo sai che la firesta è pericolosa per un giovane tutto solo e debole come te ahahah"
      "gioco": "audio",
      "next": "cap103"
    },
  ]

}