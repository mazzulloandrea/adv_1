export default {
  "titolo": "ultima prova",
  "frase": `
    Vedi la tenda del generale leggermente aperta ed una intensa luce rossa, 
    come un enorme focolare, provenire dall'interno; 
    l'intensità della luce ti impedisce di trattenere lo sguardo inoltre
    una onda d'urto si propaga dalla tenda investendoti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: 'svieni',
    fallimento: 'svieni',
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}