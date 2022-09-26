export default {
  "titolo": "prima prova",
  "frase": `
    Il capitano ti spiega che la scelta che hai fatto implica un addestramento completo nel combattimento a distanza;
    ci sono 3 specialità che puoi apprendere:
    l'arco che ti permette di colpire nemici anche molto lontani,
    la balestra che nella distanza ravvicinata può anche bucare alcune difese,
    la fionda che permette di effettuare più colpi ma meno potenti 

    Le lezioni inizieranno immediatamente domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua arma.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli l'arco", next: "addestramento", zaino: "arco" },
    { frase: "Scegli la balestra", next: "addestramento", zaino: "balestra" },
    { frase: "Scegli la fionda", next: "addestramento", zaino: "fionda" },
  ]
}