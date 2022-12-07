export default {
  titolo: "",
  frase: `
    Mostri la resa ma Darius non sembra essere soddisfatto della tua scelta; in tutta risposta ti punta la balestra contro.

    Sai che sta per sparare ed in un gesto disperato cerchi di saltare fuori dalla buca.
  `,
  audio: {
    src: "/assets/audio/fineSecondaProva.mp3",
  },
  gioco: "gioco9",
  gioco9: {
    successo: "scappareTrappola",
    fallimento: "fineSecondaProvaMorte",
    livello: 3,
    type: "memory",
    combinazione: ["teschio", "arco", "pirata", "fantasma", "teschio"],
    dataset: "combat",
  },
};
