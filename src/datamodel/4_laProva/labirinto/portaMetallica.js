export default {
  "titolo": "ultima prova",
  "frase": `
    La porta metallica ha alcune scritte:
    quello davanti a te è un enigma e sai che dovrai risolverlo se vorrai proseguire.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "se vuoi risolvere l'enigma", next: 'enigmaColori' },
    { frase: "Preferisci ritornare sui tuoi passi nel labirinto", next: 'ritornoLabirinto', },
  ]
}