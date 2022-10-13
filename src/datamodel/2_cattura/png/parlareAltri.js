export default {
  "titolo": "Carcadena",
  "frase": `
    Sul carretto con te ci sono: 
    Essertag, una testa calda, figlio dell'artigiano
    Gudrum, amico di Essertag, figlio di allevatori,
    Aaron, tuo amico più giovane di 2 anni, un po' timoroso,
    Alexis, il tuo miglior amico, figlio de falegname.
    
    Purtroppo Alexis, ammalato già da 2 giorni, è sdraiato a riposare; speri che si riprenda al più presto.
    Essertag invece sta provando a slegarsi.
    
    Con chi vorresti parlare?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  "risposte": [
    {
      "frase": "Vuoi parlare con Essertag?",
      "next": "essertag"
    },
    {
      "frase": "Preferisci dire qualcosa a Gudrum?",
      "next": "gudrum"
    },
    {
      "frase": "Vuoi dire ad Aaron?",
      "next": "aaron"
    },
    {
      "frase": "Se pensi che Alexis sia la scelta migliore",
      "next": "alexis"
    },
  ]
}