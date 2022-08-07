export default {
  "titolo": "Nel grano",
  "frase": `
    Non è difficile convincerlo ad andarvene visto che il campo sta bruciando sempre più velocemente. 
    Dopo poco uscite fuori dal campo di grano dirigendovi nel bosco in piena notte.
  `,
  "audio": {
    // "src": "/assets/audio/cap19.mp3",
    "src": "/assets/audio/cap0.m4a",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "cap51",
      "gioco": "audio",
      "icon": "corpo"
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "cap51",
      "gioco": "audio",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "cap51",
      "gioco": "audio",
      "icon": "spirito"
    }
  ],
}