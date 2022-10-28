export default {
  titolo: "prima prova",
  frase: `
    Le armi a disposizione sono quattro ed ognuna ha le sue peculiarità:
    la spada per infliggere tagli agli avversari, 
    il bastone lungo per colpire fino a due metri, 
    l'ascia che permette colpi poco precisi ma profondi,
    il martello che può rompere le armi avversarie.

    Le lezioni inizieranno domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua arma.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Impugni la spada', next: "addestramento", zaino: "spada" },
    { frase: "Afferri il bastone", next: "addestramento", zaino: "bastone" },
    { frase: "L'ascia è la scelta migliore", next: "addestramento", zaino: "ascia" },
    { frase: "Il martello è l'arma perfetta", next: "addestramento", zaino: "martello" }
  ]
}