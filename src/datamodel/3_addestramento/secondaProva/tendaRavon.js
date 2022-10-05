export default {
  "titolo": "prima prova",
  "frase": `
    Il capitano ti chiede se vuoi imparare il combattimento ravvicinato, il combattimento a distanza o se preferisci apprendere le arti della difesa.
    `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Combattimento in mischia', next: "mischia" },
    { frase: "Combattimento a distanza", next: "distanza" },
    { frase: 'Difendersi è la migliore arte', next: "difesa" },
  ]
}