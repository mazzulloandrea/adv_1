export default {
  "titolo": "prima prova",
  "frase": `
    L'addestramento prosegue per 3 durissime settimane; oltre all'arte scelta venite tutti addestrati a sopportare il freddo,
    a patire la fame, a resistere al dolore e a riconoscere alcune piante e animali pericolosi
    
    Non si contano nemmeno i graffi e i lividi ma alcuni di voi hanno riportato ferite gravi: 
    Gudrum ha perso 1 dito della mano destra mentre
    Giak ha perso l'occhio sinistro.
    
    La mattina dell'ultimo giorno della terza settimana Ravon vi ha spiega che ognuno di voi dovrà affrontare uno scontro che potrebbe essere mortale;
    voi reclute potrete scegliere un avversario tra chiunque nel campo; 
    potrete scegliere di sfidare un'altra recluta, scegliere un soldato oppure Ravon stesso.

    Lo scontro avrà una durata di 2 ore e dovrete dimostrare di aver appreso gli addestramenti impartiti.

    La sfida si terrà in una zona adiacente al campo di addestramento; 
    sapete che ci saranno alberi, nascondigli, trappole e ripari e che sarà un quadrato di circa 20 metri di lato

    Alla conlcusione dovrete uscire da quel territorio e la prova si concluderà.
    
    Non è stato specificato cosa potrebbe accadere all'interno ma avete capito dai toni del generale che non ci sono regole
    e che molti non hanno superato la prova.

    Viene sorteggiato l'ordine in cui le reclute affronteranno la prova e tu sei l'ultimo;
    tutte le reclute si sceglono tra di loro e a te restano solo le due possibilità che nessuno ha scelto:
    affrontare il generale Ravon oppure uno dei soldati.

    Devi scegliere il tuo avversario.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Se scegli Ravon', gioco: 'text', },
    { frase: 'Se scegli uno dei soldati', next: "avversarioSoldati" },
  ],
  text: {
    successo: "avversarioRavonSuccesso",
    fallimento: "avversarioRavonFallimento",
    durata: "60",
    domande: [
      "Quante sfide ci saranno nella seconda prova, escluso la tua?",
      "La tua sfida, essendo l'ultima, dopo quanti incontri inizierà?",
      "Quanto durerà la seconda prova?",
      "Nel luogo della sfida ci saranno i giudici?",
      "Nel luogo della sfida ci saranno armi?",
      "Nel luogo della sfida ci saranno animali pericolosi?",
      "Nel luogo della sfida ci saranno pericoli?"
    ],
    risposte: [
      ["4", "quattro"],
      ["4", "quattro"],
      ["2", "due", "2 ore", "due ore"],
      ["no", "non so", "non lo so", "forse", "forse no", "forse si"],
      ["no", "non so", "non lo so", "forse", "forse no", "forse si"],
      ["no", "non so", "non lo so", "forse", "forse no", "forse si"],
      ["si", "trappole"]
    ]
  }
}