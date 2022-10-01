export default {
  "titolo": "ultima prova",
  "frase": `
    Impugni lo strano oggetto e riproduci quanto più similmente il gracchiare di una cornacchia.
    Durante il secondo suono senti bruciare leggermente il ginocchio destro e
    durante il terzo il bruciore aumenta; vedi anche un piccolissimo scintillio di luce
    provenire dalla pietra sulla sommita del bastone che però subito scompare così come il dolore al ginocchio.

    In tutto questo Ravon, nemmeno ha mai alzato lo sguardo, preso a compilare chissa quali documenti.

    Dopo pochi secondi il generale si alza in piedi e ti prende la bacchetta dalla mano appoggiandola dove 
    si trovava precedentemente e, indicandoti il fondo della tenda, ti fa segno di seguirlo.

    In un cono d'ombra in fondo alla sua stanza c'è una piccola botola;
    il capitano ti guarda e ti dice che dovrai scendere la sotto, recuperare una chiave antica e tornare indietro.

    Il generale ti indica una torcia e ti avvisa che la sua durata è di circa 30 minuti.

    Capisci subito che si tratta della terza prova.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
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