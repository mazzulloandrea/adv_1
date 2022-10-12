export default {
  "titolo": "prima prova",
  "frase": `
    Rotoli di lato schivando il calcio per pochissimi centimetri; la ragazza perde l'equilibrio e cade a terra.

    Stai per rialzarti per spingerla via quando, ti accorgi di essere finito ad un piede dal bordo; 
    nemmeno il tempo di spostarti che un avversario dai capelli rossi, più basso di te ma più muscoloso, ti piomba addosso con tutta l'intenzione di spingerti fuori.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: 'Vuoi lottare e rialzarti?', gioco: 'dice' },
    { frase: 'Vuoi provare a farlo cadere di lato?', gioco: 'gioco9' },
    { frase: "Vuoi trascinarlo fuori insieme a te?", next: 'fuoriInsieme' },
  ],
  dice: {
    successo: "rialzato",
    fallimento: "sconfitta",
    obiettivo: 8, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  },
  gioco9: {
    successo: "cadeIlRosso",
    fallimento: "sconfitta",
    durata: "15",
    type: "memory",
    combinazione: ["scudo", "teschio", "pugno", "pugno"],
    dataset: "combat",
  }
}