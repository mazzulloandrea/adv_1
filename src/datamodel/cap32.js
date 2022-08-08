export default {
  "titolo": "Falegnameria",
  "frase": `
    Esci di nascosto e facendo il giro largo ti dirigi verso la stalla.
    Svoltato l'angolo vai sbattere contro qualcosa.
    "Eccolo è qui" quel bastardo di tuo fratello sta aiutando i soldati .
    ...
  `,
  "audio": {
    "src": "/assets/audio/cap32.mp3", // copia dal capitolo 7
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
    }
  ]
}