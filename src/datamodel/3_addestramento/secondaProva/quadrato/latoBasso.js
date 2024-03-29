export default {
  titolo: "seconda prova",
  frase: `
    Su questo lato c'è solamente l'ingresso con la combinazione e non ci sono appigli o rocce che puoi sfruttare per arrampicarti.
  `,

  audio: {
    src: "/assets/audio/latoBasso.mp3",
  },
  risposte: [
    { frase: "Provi a decifrare la combinazione", gioco: "cassaforte" },
    { frase: "Vai a destra", next: "latoDestro" },
    { frase: "Vai a sinistra", next: "latoSinistro" },
    { frase: "Provi a scavalcare", gioco: "dice" },
  ],
  cassaforte: {
    successo: "combinazioneOk",
    fallimento: "combinazioneKo",
    durata: "25",
    type: "roll",
    domanda: "n# totale soldati ----- n# totale reclute",
    combinazione: "15:09", // essertag è morto
  },
  dice: {
    successo: "scavalcatoOk",
    fallimento: "scavalcatoKo",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
