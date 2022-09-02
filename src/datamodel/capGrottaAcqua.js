export default {
  "titolo": "La grotta",
  "frase": `
    L'acqua fresca e pura migliora le tue capacità.
  `,
  "audio": {
    "src": "/assets/audio/cap66.mp3", // todo
    "interrompe": ""
  },
  risposte: [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "capGrottaSentiero",
      "gioco": "audio",
      "icon": "corpo"
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "capGrottaSentiero",
      "gioco": "audio",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "capGrottaSentiero",
      "gioco": "audio",
      "icon": "spirito"
    }
  ]
}