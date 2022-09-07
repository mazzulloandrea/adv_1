export default {
  "titolo": "Il Bosco",
  "frase": `
    Durante l'attraversmento scivoli e cadendo prendi un colpo così forte che gridi dal dolore.
    Inoltre sei tutto fradicio ed infreddolito.

    Esci quantoprima dall'acqua ed una mano ti afferra per il vestito. 
    E' Dender accompagnato da un soldato. Quel bastardo li sta aiutando
    --- cap 7----
  `,
  "audio": {
    "src": "/assets/audio/cap72.mp3",
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