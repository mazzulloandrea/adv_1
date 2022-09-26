export default {
  "titolo": "Carcadena",
  "frase": `
    Sul carretto con te ci sono: 
    Essertag figlio muscoloso dell'artigiano, famoso per essere una testa calda sta provando a liberarsi dalle corde,
    Gudrum fratello minore della numerosa famiglia di allevatori amico di Essertag controlla che le guardie non si accorgano di Essertag,
    Aaron, 
      più giovane di 2 anni di te, 
      figlio unico dei contadini che gestiscono il pozzo, 
      abbastanza timoroso, ha subito alcune angherie dai soldati e sta accovacciato in silenzio,
    Alexis, figlio de falegname per il quale anche tu spesso lavori, è sicuramente ammalato e avrebbe bisogno di stare sdraiato a riposare.
    
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