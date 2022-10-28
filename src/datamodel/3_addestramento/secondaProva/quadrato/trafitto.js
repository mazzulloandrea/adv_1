export default {
  titolo: "riparo",
  frase: `
    Il dardo ti colpisce il collo ma riesci a colpire ugualmente il tuo avversario, che cade a Terra.
    Siete entrambi feriti ma solo uno di voi vincerà la sfida.
    Con tutte le forze che hai provi a rialzarti mentre Darius sembra non riuscirci.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: "vittoriaSanguinante",
    fallimento: "uccisoDaDarius",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  },
}