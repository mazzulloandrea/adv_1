export default {
  titolo: "prima prova",
  frase: `
    Il lucchetto non si apre, non c'è nulla da fare.
    
    Se vuoi iniziare la sfida devi per forza entrare nel quadrato.
  `,

  audio: {
    src: "/assets/audio/combinazioneKo.mp3",
  },
  risposte: [
    { frase: "Provi a decifrare la combinazione", gioco: "cassaforte" },
    { frase: "Cerchi di aggirare il muro di cinta", next: "aggirare" },
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
