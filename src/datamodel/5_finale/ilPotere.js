export default {
  titolo: "ultima prova",
  frase: `
    Vedi una intensa luce rossa provenire dalla tenda del generale; l'intensità della luce ti impedisce di trattenere lo sguardo, inoltre, un fortissimo bruciore al ginocchio ti fa accasciare al suolo.
    
    Il dolore aumenta così tanto che ti contorci, hai spasmi e soffri come non mai.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
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