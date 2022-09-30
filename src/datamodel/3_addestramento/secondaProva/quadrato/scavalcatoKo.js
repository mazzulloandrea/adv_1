export default {
  "titolo": "prima prova",
  "frase": `
    Ti arrampichi sulla parete ma al momento di tuffarti al di la, scivoli indietro
    ritornando davanti all'ingresso.
    
    Se vuoi iniziare la sfida devi entrare nel quadrato.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Provi a decifrare la combinazione', gioco: 'cassaforte', },
    { frase: 'Cerchi di aggirare il muro di cinta', next: "aggirare" },
    { frase: 'Provi a scavalcare', gioco: "dice" },
  ],
  cassaforte: {
    "successo": "combinazioneOk",
    "fallimento": "combinazioneKo",
    "durata": "25",
    type: 'roll',
    domanda: "n# totale soldati - - - n# totale reclute",
    combinazione: '15:09'
  },
  "dice": {
    successo: "scavalcatoOk",
    fallimento: "scavalcatoKo",
    obiettivo: 9, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}