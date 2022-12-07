export default {
  titolo: "Calmo",
  frase: `
    I soldati ti guardano e scoppiano a ridere più di prima; vieni deriso e schernito con vari nomignoli ridicoli. 
    Per più di un ora sei al centro dell'attenzione ma almeno smettono di prendersela con Alexis.
  `,

  audio: {
    src: "/assets/audio/discussioneConSoldati2.mp3",
  },
  next: "dice",
  dice: {
    successo: "calmo2",
    fallimento: "calmo2",
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
