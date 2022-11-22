export default {
  titolo: "Nel grano",
  frase: `
    Cercando di scappare, per allontanarti il più possibile, improvvisamente vai a sbattere contro qualcosa e cadi a terra; è Aaron il tuo amico, che si sta nascondendo, terrorizzato dai soldati.
  `,
  audio: {
    src: "/assets/audio/cap26.mp3",
  },
  risposte: [
    {
      frase: "Se vuoi convincerlo a scappare con te",
      gioco: "dice",
    },
    {
      frase: "Se lo ignori e corri via",
      gioco: "audio",
      next: "cap13",
    },
  ],
  dice: {
    successo: "cap19", // lo convinci a scappare con te nel bosco
    fallimento: "cap21", // scappi e vai nel bosco da solo
    obiettivo: 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
