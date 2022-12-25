export default {
  titolo: "ultima prova",
  frase: `
    Vedi una intensa luce rossa provenire dalla tenda del generale; l'intensità della luce ti impedisce di trattenere lo sguardo, inoltre, un immenso bruciore al ginocchio ti fa accasciare al suolo.
    
    Il dolore aumenta così tanto che ti contorci, hai spasmi e soffri come non mai.
  `,

  audio: {
    src: "/assets/audio/ilPotere.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "svieni",
    fallimento: "svieni",
    obiettivo: 20, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
