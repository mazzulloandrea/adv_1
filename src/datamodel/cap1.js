export default {
  "titolo": "L'arrivo dei soldati",
  "frase": `
    Sei arrivato all'angolo con il campo di grano, alto circa 2 metri, 
    quando senti un fortissimo bruciore al ginocchio 
    e la voce di Carcadena nella tua mente <<Ci sono i soldati, presto scappa!>>`,
  "audio": {
    "src": "/assets/audio/cap1.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Vuoi scoprire di più chiedendo telepaticamente a tua sorella",
      "gioco": "text"
    },
    {
      "frase": "Preferisci scappare nel vicino campo di grano",
      "gioco": "etc"
    },
    {
      "frase": "Torni di corsa indietro in falegnameria",
      "gioco": "gioco9"
    },
    {
      "frase": "Se vuoi comunque andare verso la fattoria",
      "gioco": "audio",
      "next": "cap7"
    }
  ],
  "text": {
    "successo": "cap2",
    "fallimento": "cap3",
    "durata": "15",
    "domande": [
      "Dov'è che hai la voglia?",
      "Dov'è che ha la voglia Carcadena?",
      "Che forma ha la voglia?",
      "Di che colore sono i capelli di Carcadena?"
    ],
    "risposte": [
      [
        "ginocchio"
      ],
      [
        "spalla"
      ],
      [
        "falce",
        "luna",
        "spicchio"
      ],
      [
        "biondi",
        "chiari"
      ]
    ]
  },
  "etc": {
    "successo": "cap10",
    "fallimento": "cap11",
    "MaxCounter": 5,
    "MaxPicchi": 3,
    "durata": 5000
  },
  "gioco9": {
    "combinazione": [
      "arancione",
      "verde",
      "azzurro",
      "viola"
    ],
    "type": "colors",
    "durata": 10,
    "successo": "cap13",
    "fallimento": "cap13"
  }
}