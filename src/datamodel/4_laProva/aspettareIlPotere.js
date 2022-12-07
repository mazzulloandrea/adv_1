export default {
  titolo: "ultima prova",
  frase: `
    Mantieni per te l'esperienza con il generale e prosegui il lavoro con la mungitura.
    Dopo pochissimi minuti, senti un dolore immenso al ginocchio e spalanci gli occhi in direzione dell'ultima tenda che hai visitato.
  `,
  audio: {
    src: "/assets/audio/aspettareIlPotere.mp3",
  },
  next: "dice",
  dice: {
    successo: "ilPotere",
    fallimento: "ilPotere",
    obiettivo: 15, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
