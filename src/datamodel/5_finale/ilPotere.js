export default {
  "titolo": "ultima prova",
  "frase": `
    Vedi la tenda del generale leggermente aperta ed una intensa luce rossa, 
    come un enorme focolare, provenire dall'interno; 
    l'intensità della luce ti impedisce di trattenere lo sguardo inoltre
    un fortissimo bruciore al ginocchio ti fa accasciare al suolo impedendoti di muoverti.
    
    Il dolore aumenta così tanto che ti contorci, hai spasmi in tutto il corpo e soffri come non mai.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: 'svieni',
    fallimento: 'svieni',
    obiettivo: 22, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}