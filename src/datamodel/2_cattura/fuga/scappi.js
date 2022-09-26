export default {
  "titolo": "Scappi",
  "frase": `
    Ne approfitti della distrazione di una guardia per scattare di lato.
    Fai pochi metri quando senti una mano appoggiarsi prepotentemente sulla tua spalla e afferrarti il vestito.
    Se sei abbastanza agile ed intelligente puoi liberarti dalla presa.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  gioco: "dice",
  dice: {
    successo: "scappi2",
    fallimento: "nonScappi",
    obiettivo: 11, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}