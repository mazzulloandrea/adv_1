export default {
  titolo: "prima prova",
  frase: `
    Prosegui avanti e indietro, per tutto il lato, senza trovare alcun appiglio o aiuto per scavalcare.

    Da che parte prosegui?
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Vai a sinistra', gioco: 'latoSinistro', },
    { frase: 'Vai a destra', next: "latoDestro" },
  ],
}