export default {
  titolo: "ultima prova",
  frase: `
    Il serpente si muove così velocemente che nemmeno ti rendi conto che è già su di te, spalanca le fauci e ti morde iniettando il suo veleno.

    Subito raggiungi la corda e cerchi di resistere all'effetto tossico.
  `,
  audio: {
    src: "/assets/audio/serpenteAttacca.mp3",
  },
  gioco: "gioco9",
  gioco9: {
    successo: "velenoAnnullato",
    fallimento: "morteAvvelenato",
    livello: 3,
    type: "memory",
    combinazione: ["candela", "cobra", "mare", "pietra", "tomba"],
    dataset: "nature",
  },
};
