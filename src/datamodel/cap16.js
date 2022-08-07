export default {
  "titolo": "Nel grano",
  "frase": `
    Senti prima girdare e poi il rumore metallico dei soldati camminare sulla stada sterrata a pochi metri da te.
    I soldati gridano il tuo nome e quello di _____; vi dicono di uscire altrimenti subirete le peggiori punizioni.
    I battiti del tuo cuore aumentano improvvisamente quando senti che vogliono dare fuoco al campo di grano.
  `,
  "audio": {
    // "src": "/assets/audio/cap16.mp3",
    "src": "/assets/audio/cap0.m4a",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Ti allontani verso il bosco",
      "gioco": "audio",
      "next": "cap26"
    },
    {
      "frase": "Resti immobile aspettando che i soldati si allontanano",
      "gioco": "audio",
      "next": "cap20"
    }
  ]
}