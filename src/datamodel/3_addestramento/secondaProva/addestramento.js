export default {
  "titolo": "prima prova",
  "frase": `
    L'addestramento prosegue per 3 durissime settimane; 
    venite tutti allenati anche a sopportare il freddo, a patire la fame, a resistere al dolore e a riconoscere alcuni animali pericolosi.
    
    Non si contano nemmeno i graffi e i lividi, e alcuni di voi hanno riportato ferite ben più gravi: 
    Gudrum ha perso 1 dito della mano destra mentre Giak ha perso l'occhio sinistro.
    
    La mattina dell'ultimo giorno della terza settimana, Ravon vi spiega che ognuno di voi dovrà affrontare uno scontro che potrebbe essere mortale.
    Potrete scegliere un avversario tra chiunque nel campo;
    potrete scegliere di sfidare un'altra recluta, scegliere un soldato oppure Ravon stesso.

    Lo scontro avrà una durata di 1 ora massimo e avverrà in una quadrato di circa 20 metri di lato, in una zona adiacente al campo di addestramento; ci saranno alberi, nascondigli, trappole e ripari.
    
    Non è stato specificato cosa potrebbe accadere all'interno ma avete capito, dai toni del generale, che non ci sono regole.

    Viene sorteggiato l'ordine in cui affronterete la prova e tu sei l'ultimo;
    tutte le reclute si sceglono tra di loro e a te restano solo due possibilità:
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
    durata: "25",
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
      ["si", "trappole", "certo", "ovvio"]
    ]
  }
}