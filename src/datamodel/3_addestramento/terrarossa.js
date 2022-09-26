export default {
  "titolo": "Terrarossa",
  "frase": `
    Dopo un paio d'ore di fuori pista arrivate in uno spiazzo di terra battuta rossastra e 
    ad aspettarvi ci sono una decina di soldati e altri 4 o 5 giovani come voi.

    Tutto il perimetro è definito con pali di legno e fil di ferro ed 
    una volta entrati capisci che sarà impossibile scappare da questo campo.

    Una volta dentro venite slegati e tutte le guardie si mettono attorno a voi radunandovi al centro.

    Un soldato suona un corno e da una tenda esce un soldato più anziano con un mantello scuro; deve essere il comandante.
    
    Cala il silenzio ai suoi passi, poi si arresta davanti a tutti voi presentandosi come "Generale Ravon":
    ha il compito di insegnarvi tutto, da come riconoscere i frutti e le piante commestibili della zona, 
    quali sono gli animali pericolosi e come affrontarli,
    come impugnare un'arma militare, uno scudo e come cavalcare ma soprattutto vi insegnerà ad essere degli uomini veri quindi 
    come sopportare la fame, il dolore, il caldo ed il freddo e 
    tutto quello che ci vuole per servire al meglio il Duca di Blick, sovrano di Berdask.

    Come prima cosa vi viene servito un tozzo di pane ed una boccale colmo di vino rosso liquoroso 
    che tutti avidamente finite in pochi secondi.

    Poi un secondo boccale di vino e vi viene intimato di berlo senza lasciarne una goccia.

    Senza farvi troppe domande bevete dopodichè il comandante inaspettatamente da inizio alla prima prova.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Inizio prima prova', next: "primaProva", abilita: 'vita' }
  ]
}