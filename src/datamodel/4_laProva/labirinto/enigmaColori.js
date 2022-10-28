export default {
  titolo: "ultima prova",
  frase: `
    Guardi attentamente le parole scritte sulla porta e capisci che l'indovinello riguarda il labirinto che hai appena attraversato.
  `,
  gioco: "text",
  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  text: {
    successo: "laProvaSuccesso",
    fallimento: "laProvaFallimento",
    durata: "35",
    domande: [
      "Quanti colori sono presenti nel labirinto?",
      "Quanti sono gli incroci del labirinto",
      "Compare più volte il nero o il rosso?",
      "Sono maggiori i passaggi verdi o i passaggi blu?",
      "Nel labirinto quante volte compare il giallo?",
      "Quanti corridoi gialli ci sono?",
      "Sono di più i passaggi marroni o quelli rosa?"
    ],
    risposte: [
      ["7", "sette"],
      ["9", "nove"],
      ["no", "uguali", "uguale", "nessuno", "stesso", "stessi", "errore"],
      ["blu"],
      ["una"],
      ["zero", "o", "0", "nessuno"],
      ["no", "uguali", "uguale", "nessuno", "stesso", "stessi", "errore", "zero", "o", "0"]
    ]
  }
}