export default {
  "titolo": "Il Bosco",
  "frase": `
    Hai un freddo pazzesco e tra mille difficoltà ti addormenti.
    Ti risvegli al mattino da uno scossone: tuo fratellastro Denred insieme ad un soldato ti hanno trovato.

    --copia dal cap7--
  `,
  "audio": {
    "src": "/assets/audio/cap64.mp3",
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