export default {
  "titolo": "Nel grano",
  "frase": `
    Non è difficile convincerlo visto che il grano sta bruciando sempre più velocemente. 
    Uscite fuori dal campo e vi dirigete nel bosco in piena notte.
  `,
  "audio": {
    "src": "/assets/audio/cap19.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "cap51",
      "gioco": "audio",
      "icon": "corpo",
      aaron: true,
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "cap51",
      "gioco": "audio",
      "icon": "mente",
      aaron: true,
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "cap51",
      "gioco": "audio",
      "icon": "spirito",
      aaron: true,
    }
  ],
}