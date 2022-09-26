export default {
  "titolo": "riparo",
  "frase": `
    La protezione ti salverà, ne sei sicuro.
    
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
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
}