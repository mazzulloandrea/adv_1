export default {
  "titolo": "Terrarossa",
  "frase": `
    Dopo un paio d'ore di fuori pista, arrivate in uno spiazzo di terra battuta rossastra; 
    ad aspettarvi ci sono una decina di soldati e altri 4 giovani come voi.

    Tutto il perimetro è formato da pali di legno e fil di ferro e, una volta entrati, capisci che sarà impossibile scappare da questo luogo, definito come "campo d'addestramento".

    Una volta dentro, venite slegati e tutte le guardie si mettono attorno a voi, radunandovi al centro.

    Un soldato suona un corno e da una tenda esce un militare più anziano con un mantello scuro; deve essere il comandante.
    
    Cala il silenzio ai suoi passi, poi si arresta davanti a tutti voi presentandosi come "Generale Ravon":
    <<Ho il compito di insegnarvi tutto: 
    riconoscere gli animali pericolosi e affrontarli,
    impugnare un'arma, uno scudo, 
    cavalcare,
    sopportare la fame, il dolore, il caldo, il freddo,
    fare tutto quello che serve per servire al meglio il Duca di Blick, sovrano di Berdask>>

    Come prima cosa vi viene servito un tozzo di pane ed una boccale colmo di vino rosso liquoroso che tutti avidamente finite in pochi secondi.

    Poi un secondo boccale di vino e vi viene intimato di berlo senza lasciarne una goccia.

    Senza farvi troppe domande finite il boccone, dopodichè il comandante, inaspettatamente, da inizio alla prima prova.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: 'text',
  text: {
    successo: "primaProva",
    fallimento: "primaProva",
    durata: "15",
    domande: [
      "Come si chiama il duca?",
      "Qual'è la carica di Blick?",
      "Di che città è sovrano il duca?",
      "Cos'è che hai bevuto?",
      "L'addestramento prevede l'utilizzo della fucina?",
      "Che cos'è che hai mangiato?"
    ],
    risposte: [
      ["blic", "blik", "blick"],
      ["duca"],
      ["berdask", "berdasc", "berdasck"],
      ["vino"],
      ["no", "non so", "forse", "bho", "bo"],
      ["pane", "tozzo"]
    ]
  },
  next: "primaProva"
}