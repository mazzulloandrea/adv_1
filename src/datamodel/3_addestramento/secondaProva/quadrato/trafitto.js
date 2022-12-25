export default {
  titolo: "riparo",
  frase: `
    Il dardo ti colpisce il collo ma riesci ugualmente a trafiggere il tuo avversario, che cade a Terra.
    Siete entrambi feriti ma solo uno di voi vincerà la sfida.
    Con tutte le forze che hai, provi a rialzarti mentre Darius sembra non riuscirci.
  `,

  audio: {
    src: "/assets/audio/trafitto.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "vittoriaSanguinante",
    fallimento: "uccisoDaDarius",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
