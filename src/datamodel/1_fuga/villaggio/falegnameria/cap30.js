export default {
  titolo: "Falegnameria",
  frase: `
    Ti avvicini all'ingresso in silenzio ... non sembra esserci nessuno.
    L'interno è buio e, lentamente, eviti tutti gli ostacoli fino ad arrivare al banco da lavoro; appoggiati sopra ci sono una corda, un'accetta e una coperta.
  `,
  audio: {
    src: "/assets/audio/cap30.mp3",
  },
  risposte: [
    {
      frase: "Prendi l'accetta",
      zaino: "accetta",
      next: "cap31"
    },
    {
      frase: "Prendi la corda",
      zaino: "corda",
      next: "cap31"
    },
    {
      frase: "Prendi la coperta",
      zaino: "coperta",
      next: "cap31"
    },
    {
      frase: "Non prendi nulla",
      next: "cap31"
    }
  ],
}