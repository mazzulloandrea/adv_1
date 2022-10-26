export default {
  step: 3,
  titolo: "Terrarossa",
  frase: `
    Dopo un paio d'ore di fuori pista, arrivate in uno spiazzo di terra battuta. 
    Ad aspettarvi ci sono una decina di soldati e altri quattro ragazzi della vostra età.

    Tutto il perimetro è formato da pali di legno e fil di ferro.
    Capisci che sarà impossibile scappare da questo luogo, definito come "campo d'addestramento".
    **cornice**
    Una volta dentro, venite slegati e tutte le guardie si mettono attorno a voi, radunandovi al centro.

    Un soldato suona un corno e, da una tenda, esce un militare più anziano con un mantello scuro; deve essere il comandante.
    
    Cala il silenzio ai suoi passi, poi si arresta davanti a tutti voi, presentandosi come "Generale Ravon":
    <<Ho il compito di insegnarvi tutto!
    Cavalcare, sopportare il dolore, il caldo, il freddo.
    Riconoscere un pericolo, saper usare un'arma, ...affrontare un avversario...
    fare tutto quello che serve per servire al meglio il Duca di Blick, sovrano di Berdask>>
    **cornice**
    Come prima cosa, vi viene servito un poco di pane ed una boccale colmo di vino rosso.
    Sia voi che i soldati, mangiate quel piccolo tozzo molto avidamente.
    Anche il vino termina in pochi secondi ed, immediatamente, ve ne viene versato un secondo bicchiere, intimandovi di berlo molto rapidamente.

    Senza farvi troppe domande finite il bicchierone, dopodichè il comandante, inaspettatamente, da inizio alla "prima prova".
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
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
      ["vino", "rosso", "vino rosso", "vinorosso"],
      ["no", "non so", "forse", "bho", "bo"],
      ["pane", "tozzo"]
    ]
  },
}