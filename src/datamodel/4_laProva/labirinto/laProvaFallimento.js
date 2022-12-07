export default {
  titolo: "ultima prova",
  frase: `
    Senti un rumore metallico e capisci che qualcosa non va: la tua prontezza di riflessi viene messa alla prova da una lama che compare dal soffitto.
  `,
  gioco: "dice",
  audio: {
    src: "/assets/audio/laProvaFallimento.mp3",
  },
  dice: {
    successo: "schivatoTrappola",
    fallimento: "beccatoTrappola",
    obiettivo: 17, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
