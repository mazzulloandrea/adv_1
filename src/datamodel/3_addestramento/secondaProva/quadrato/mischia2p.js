export default {
  titolo: "riparo",
  frase: `
    Con l'arma in mano, esci allo scoperto caricando verso il nemico, che fa partire verso di te un colpo di balestra.

    Usi il tuo istinto per provare a schivare il dardo e insieme colpire l'avversario
  `,
  audio: {
    src: "/assets/audio/mischia2p.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "sconfittoDarius",
    fallimento: "trafitto",
    obiettivo: 13, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 5, // quanti lanci col dado
  },
};
