export default {
  "titolo": "ultima prova",
  "frase": `
    Non capisci nulla delle incisioni sopra l'ingresso.

    Puoi andare a sinistra, a destra o al centro.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vai a sinistra", next: 'proseguiPercorso', abilita: 'corpo' },
    { frase: "Vai a destra", next: 'proseguiPercorso', abilita: 'spirito' },
    { frase: "Vai al centro", next: 'proseguiPercorso', abilita: 'mente' },
  ],
}