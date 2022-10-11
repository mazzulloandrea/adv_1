export default {
  "titolo": "prima prova",
  "frase": `
    Su questo lato c'è solo l'ingresso con combinazione 
    e non ci sono appigli o rocce che puoi sfruttare per arrampicarti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Provi a decifrare la combinazione', gioco: 'cassaforte', },
    { frase: "Vai a destra", next: "latoDestro" },
    { frase: 'Vai a sinistra', next: "latoSinistro" },
    { frase: 'Provi a scavalcare', gioco: "dice" },
  ],
  cassaforte: {
    "successo": "combinazioneOk",
    "fallimento": "combinazioneKo",
    "durata": "25",
    type: 'roll',
    domanda: "n# totale soldati ----- n# totale reclute",
    combinazione: '15:08' // essertag è morto
  },
  "dice": {
    successo: "scavalcatoOk",
    fallimento: "scavalcatoKo",
    obiettivo: 9, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}