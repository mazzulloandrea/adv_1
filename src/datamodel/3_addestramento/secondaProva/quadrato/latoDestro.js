export default {
  titolo: "prima prova",
  frase: `
    Su questo lato del muro c'è un secondo ingresso che sembra essere aperto.
    Uno spiraglio di pochi centimetri ti permette di vedere all'interno: una tenda apparentemente abbandonata con dietro alti alberi.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Entri dalla porta', gioco: 'ingresso2', },
    { frase: "Continui a destra dell'ingresso", next: "latoDestro" },
    { frase: "Continui a sinistra dell'ingresso", next: 'latoBasso' }
  ],
}