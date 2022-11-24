export default {
  titolo: "Essertag",
  frase: `
    Provi a muoverti con le mani legate per riuscire a sfilarti l'accetta e passarla a Essertag.

    Nei movimenti, però, una guardia se ne accorge, ti sfila l'accetta di dosso ed avvisa le altre guardie del vostro tentativo.

    Avete gi occhi puntati addosso tutto il tempo per cui è impossibile provare alcuna fuga.
  `,

  audio: {
    src: "/assets/audio/tentativoAccetta.mp3",
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
