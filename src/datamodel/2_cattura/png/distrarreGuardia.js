export default {
  titolo: "Essertag",
  frase: `
    Provi a distrarre la guardia ma i tuoi metodi non sono abbastanza convincenti.

    Quando insisti per la terza volta le guardie si insospettiscono e scoprono il vostro piano.

    Avete gi occhi puntati addosso per tutto il tempo; è impossibile provare alcuna fuga.
  `,

  audio: {
    src: "/assets/audio/distrarreGuardia.mp3",
  },
  next: "dice",
  dice: {
    successo: "sosta1",
    fallimento: "sosta1",
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
