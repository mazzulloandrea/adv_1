export default {
  titolo: "ultima prova",
  frase: `
    Impugni lo strano oggetto e riproduci quanto più similmente il gracchiare di un corvo.
    Durante il secondo suono senti bruciare leggermente il ginocchio destro e durante il terzo il bruciore aumenta; vedi anche un piccolissimo scintillio di luce provenire dalla pietra sulla sommita del bastone, che però subito scompare, così come il dolore alla gamba.

    In tutto questo, Ravon, nemmeno ha mai alzato lo sguardo, preso a compilare chissà quali documenti.
  **cornice**
    Dopo pochi secondi il generale si alza in piedi, prende la bacchetta dalla tua mano e, appoggiandola dove si trovava precedentemente, ti indica la panca.

    <<Spostala!>> ti ordina, e senza farti pregare la scosti.
    Al di sotto c'è una piccola botola; il capitano ti dice che dovrai scendere la sotto, recuperare una chiave antica e tornare indietro.

    Porgendoti una torcia ti informa che la sua durata è di circa 30 minuti.

    Capisci subito che si tratta della terza prova.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Cosa devo aspettarmi li sotto?", next: 'rispostaCuriosa' },
    { frase: "Non è meglio anche una seconda torcia?", gioco: 'dice', zaino: 'torcia' },
    { frase: "Gli altri hanno superato la prova?", next: 'nonSiDice' },
    { frase: "Afferri la torcia e inizi a scendere la scala", next: 'scale', zaino: "torcia" }
  ],
  dice: {
    successo: 'secondaTorciaOk',
    fallimento: 'secondaTorciaKo',
    obiettivo: 11, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4 // quanti lanci col dado
  }
}