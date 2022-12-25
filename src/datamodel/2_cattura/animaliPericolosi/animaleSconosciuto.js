export default {
  titolo: "animali pericolosi",
  frase: `
    C'è qualcosa, che non ricordi bene, che ti mette in forte allarme.
  `,
  audio: {
    src: "/assets/audio/animaleSconosciuto.mp3",
  },
  risposte: [
    {
      frase: "Dai una razione alla gallina in modo da andartene",
      next: "tornareIndietro",
      checkZaino: "razione",
      zainoElimina: "razione",
    },
    { frase: "Resti immobile sperando che ti ignori", gioco: "dice" },
    {
      frase: "Estrai la tua accetta e sei pronto ad affrontare lo scontro",
      gioco: "dice2",
      checkZaino: "accetta",
    },
    { frase: "Scappi", gioco: "gioco9" },
  ],
  dice: {
    successo: "piroliscoIgnora",
    fallimento: "piroliscoMorte",
    obiettivo: 15, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
  dice2: {
    successo: "piroliscoSconfitta",
    fallimento: "piroliscoMorte2",
    obiettivo: 16,
    abilita: ["corpo", "mente", "spirito"],
    lanci: 4,
  },
  gioco9: {
    successo: "tornareIndietro",
    fallimento: "piroliscoMorte3",
    livello: 3,
    type: "memory",
    combinazione: ["elettricita", "fuoco", "sole", "terra", "fuoco"],
    dataset: "element",
  },
};
