export default {
  "titolo": "prima prova",
  "frase": `
    Prosegui avanti ned indietro per tutto il lato
     senza trovare alcun appiglio o aiuto per scavalcare.

    Ora sei circa al centro del muro e puoi andare o a sinistra o a destra.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Vai a sinistra', gioco: 'latoSinistro', },
    { frase: 'Vai a destra', next: "latoDestro" },
  ],
}