export default {
  "titolo": "ultima prova",
  "frase": `
    Il serpente si muove così velocemente che nemmeno ti rendi conto che è già su di te, spalanca le fauci e ti morde iniettando il suo veleno.

    Subito raggiungi la corda e cerchi di resistere all'effetto tossico.
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: 'gioco9',
  gioco9: {
    success: 'velenoAnnullato',
    fallimento: 'morteAvvelenato',
    durata: "20",
    type: "memory",
    combinazione: ["candela", "cobra", "mare", "pietra", "tomba"],
    dataset: "nature",
  },
}   