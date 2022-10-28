export default {
  titolo: "La stalla",
  frase: `
    Gli animali stanno riposando ed il tuo ingresso, per quanto silenzioso, potrebbe disturbarli.
    In fondo alla stalla c'è una razione d'acqua e del cibo che puoi provare a prendere.
    Oltre c'è l'uscita verso il bosco.
  `,
  audio: {
    src: "/assets/audio/cap40.mp3",
  },
  risposte: [
    {
      frase: "Cerchi di prendere la provvista",
      gioco: "dice",
    },
    {
      frase: "Ti dirigi subito verso il bosco",
      next: "cap50"
    }
  ],
  dice: {
    successo: "cap41",
    fallimento: "cap42",
    obiettivo: 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
}