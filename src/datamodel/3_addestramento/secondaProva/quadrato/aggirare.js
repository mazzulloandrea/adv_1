export default {
  "titolo": "prima prova",
  "frase": `
    Il muro di cinta prosegue a sinistra per pochi metri fino all'angolo,
    invece a destra la parete di legno va avanti per una ventina di metri prima di terminare.
    
    Dove ti dirigi?
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Vai a sinistra', next: 'latoSinistro', },
    { frase: 'Vai a destra', next: "latoBasso" },
  ],
}