export default {
  titolo: "prima prova",
  frase: `
    Ci sono 3 specialità che puoi apprendere:
    l'arco che ti permette di colpire nemici anche molto lontani,
    la balestra che nella distanza ravvicinata può anche bucare alcune difese,
    la fionda che permette di effettuare più colpi ma meno potenti 

    Le lezioni inizieranno domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua arma.
  `,

  audio: {
    src: "/assets/audio/distanza.mp3",
  },
  risposte: [
    { frase: "Scegli l'arco", next: "addestramento", zaino: "arco" },
    { frase: "Scegli la balestra", next: "addestramento", zaino: "balestra" },
    { frase: "Scegli la fionda", next: "addestramento", zaino: "fionda" },
  ],
};
