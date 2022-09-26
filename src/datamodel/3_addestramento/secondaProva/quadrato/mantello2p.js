export default {
  "titolo": "riparo",
  "frase": `
    Utilizzando meglio che puoi le ombre degli alberi,
     copri il tuo corpo con il mantello e cerchi di non muoverti.

    Ascolti in un silenzio assoluto i movimenti del tuo nemico che lentamente si avvicinano; 
    raccogli un sasso da terra e sei pronto a colpire il tuo nemico appena sarà a pochissimi passi da te.

    Gli piombi addosso e nella lotta la guardia riesce a lanciare un dardo con la balestra che potrebbe colpirti.

    Solo la tua prontezza di riflessi può salvarti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: "sconfittoDarius",
    fallimento: "trafitto",
    obiettivo: 13, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 5 // quanti lanci col dado
  },
}