export default {
  titolo: "Il Bosco",
  frase: `
    Ti allontani velocemente in direzione della grotta e ti accorgi che Aaron è scappato da un'altra parte.

    Dopo qualche minuto non sei più sicuro della direzione corretta, forse ti sei perso ed inizia davvero a fare freddo.
  `,
  audio: {
    src: "/assets/audio/cap60.mp3",
  },
  gioco: "gioco9",
  gioco9: {
    successo: "cap61",
    fallimento: "cap62",
    livello: 2,
    combinazione: ["erba", "foresta", "ruota"],
    type: "memory",
    dataset: "vario",
  },
};
