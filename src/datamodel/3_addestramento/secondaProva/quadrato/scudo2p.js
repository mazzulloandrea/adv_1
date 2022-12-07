export default {
  titolo: "riparo",
  frase: `
    Lo scudo ti proteggerà, ne sei sicuro.
    
    Ascolti in silenzio i movimenti del tuo nemico che lentamente si avvicina; raccogli un sasso da terra e sei pronto a colpirlo appena sarà a pochissimi passi da te.

    Gli piombi addosso e nella lotta la guardia riesce a lanciare un dardo diretto verso la tua testa.

    Solo i tuoi riflessi possono salvarti.
  `,

  audio: {
    src: "/assets/audio/scudo2p.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "sconfittoDarius",
    fallimento: "trafitto",
    obiettivo: 11, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
