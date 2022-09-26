export default {
  "titolo": "prima prova",
  "frase": `
    Il capitano ti spiega che la scelta che hai fatto implica un addestramento completo nel combattimento ravvicinato.
    Le armi a disposizione sono 4 ed ognuna ha le sue peculiarità:
    la spada per infliggere tagli agli avversari,
    il bastone lungo per colpire fino a due metri,
    l'ascia che permette colpi meno preicsi della spada ma più profondi
    ed infine il martello che se usato correttamente può rompere le altre armi.

    Le lezioni inizieranno immediatamente domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua arma.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Scegli la spada', next: "addestramento", zaino: "spada" },
    { frase: "Scegli il bastone", next: "addestramento", zaino: "bastone" },
    { frase: "Scegli l'ascia", next: "addestramento", zaino: "ascia" },
    { frase: "Scegli il martello", next: "addestramento", zaino: "martello" }
  ]
}