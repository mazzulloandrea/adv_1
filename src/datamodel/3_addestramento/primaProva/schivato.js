export default {
  titolo: "prima prova",
  frase: `
    Rotoli di lato schivando il calcio per pochissimi centimetri; la ragazza perde l'equilibrio e cade a terra.

    Stai per rialzarti per spingerla via quando ti accorgi di essere finito a un solo piede dal bordo; nemmeno il tempo di spostarti che un avversario dai capelli rossi, più basso di te ma più muscoloso, ti piomba addosso con tutta l'intenzione di spingerti fuori.
  `,
  audio: {
    src: "/assets/audio/schivato.mp3",
  },
  risposte: [
    { frase: "Ti rialzarti per lottare", gioco: "dice" },
    { frase: "Con una leva vuoi farlo cadere di lato", gioco: "gioco9" },
    { frase: "Lo trascini fuori insieme a te", next: "fuoriInsieme" },
  ],
  dice: {
    successo: "rialzato",
    fallimento: "sconfitta",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
  gioco9: {
    successo: "cadeIlRosso",
    fallimento: "sconfitta",
    livello: 2,
    type: "memory",
    combinazione: ["scudo", "teschio", "pugno", "pugno"],
    dataset: "combat",
  },
};
