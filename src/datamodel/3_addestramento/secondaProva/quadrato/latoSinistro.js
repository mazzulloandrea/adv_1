export default {
  "titolo": "prima prova",
  "frase": `
    Dopo pochi metri svolti l'angolo e prosegui cercando di capire se ci sono appigli o rocce 
    che puoi sfruttare per arrampicarti ma nulla di nulla; 
    vedi i rami alti degli alberi all'interno che fanno ombra e oscurano il sole e giungi infine all'altro angolo.
    Qui però c'è una piccola breccia che potrebbe permetterti di passare all'interno; 
    attraverso l'apertura vedi l'angolo interno delle mura dove, appoggiati per terra, ci sono uno scudo ed un elmo.
    
    Entrare atraverso questo passaggio non sarà facile per le piccole dimensioni ma potresti farcela 
    ragionando sui giusti movimenti
  
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Entri dalla piccola breccia', gioco: 'dice', },
    { frase: 'Continui a sinistra della breccia', next: "latoAlto" },
    { frase: 'Continui a destra della breccia', next: "latoBasso" },
  ],
  dice: {
    successo: 'brecciaOk',
    fallimento: 'brecciaKo',
    obiettivo: 8, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}