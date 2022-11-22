export default {
  titolo: "L'arrivo dei soldati",
  frase: `
    Sei arrivato all'angolo del sentiero dove il grano del campo è alto circa 2 metri; all'improvviso senti un fortissimo bruciore al ginocchio e la voce di Carcadena risuonare nella tua mente
    <<Ci sono i soldati, presto scappa!>>`,
  audio: {
    src: "/assets/audio/cap1.mp3", // TODO metere voce di carcadena
  },
  risposte: [
    {
      frase: "Vuoi scoprire di più chiedendo telepaticamente a tua sorella",
      gioco: "text",
    },
    {
      frase: "Preferisci scappare nel vicino campo di grano",
      gioco: "dice",
    },
    {
      frase: "Torni di corsa indietro in falegnameria",
      gioco: "gioco9",
    },
    {
      frase: "Se vuoi comunque andare verso Carcadena",
      next: "cap7",
    },
  ],
  text: {
    successo: "cap2",
    fallimento: "cap3",
    durata: "15",
    domande: [
      "Dov'è che hai la voglia?",
      "Dov'è che ha la voglia Carcadena?",
      "Che forma ha la voglia?",
      "Di che colore sono i capelli di Carcadena?",
    ],
    risposte: [
      ["ginocchio"],
      ["spalla", "spalla sx"],
      ["falce", "luna", "spicchio"],
      ["biondi", "chiari"],
    ],
  },
  dice: {
    successo: "cap10",
    fallimento: "cap11",
    obiettivo: 15, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 6, // quanti lanci col dado
  },
  gioco9: {
    combinazione: ["grano", "erba", "veleno"],
    type: "memory",
    dataset: "vario",
    livello: 2,
    successo: "cap13",
    fallimento: "cap13",
  },
};
