export default {
  titolo: "Nel grano",
  frase: `
    Vedi tre soldati discutere sul da farsi; hanno tempo fino a domani mattina per catturare tutti i ragazzi e, attualmente, ne mancano solamente 2.
  `,
  audio: {
    src: "/assets/audio/cap14.mp3",
  },
  risposte: [
    {
      frase: "Vuoi guardare meglio per cercare tua sorella",
      next: "cap24",
    },
    {
      frase: "E' troppo pericoloso meglio allontanarsi",
      gioco: "audio",
      next: "cap13"
    }
  ]
}