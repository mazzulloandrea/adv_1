export default {
  titolo: "riparo",
  frase: `
    L'armatura ti proteggerà, ne sei sicuro.
    
    Ascolti in silenzio i movimenti del tuo nemico, che lentamente si avvicina.
    Raccogli un sasso da terra e sei pronto a colpire Darius appena sarà a pochissimi passi da te.
     
    Gli piombi addosso e, nella lotta, il nemico spara un dardo dritto verso il tuo volto. 

    Solo la tua prontezza di riflessi può salvarti.
  `,

  audio: {
    src: "/assets/audio/armatura2p.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "sconfittoDarius",
    fallimento: "trafitto",
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
