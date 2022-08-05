export default {
  "titolo": "Soldati",
  "frase": "Sei arrivato all'angolo con il campo di grano, con fusti alti 2 metri, quando senti un bruciore al ginocchio e la voce di Carcadena nella tua mente <<Ci sono i soldati, scappa!>>",
  "audio": {
    "src": "/assets/audio/cap0.m4a",
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
      "frase": "Torni indietro fino in falegnameria",
      "gioco": "gioco9"
    },
    {
      "frase": "Se vuoi andare verso i soldati",
      "gioco": "audio",
      "next": "cap4"
    }
  ],
  "text": {
    "successo": "cap2",
    "fallimento": "cap3",
    "durata": "20",
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
    "durata": "10",
    "successo": "cap10",
    "fallimento": "cap11"
  },
  "gioco9": {
    "combinazione": [
      "nord",
      "nord-est",
      "est",
      "nord-ovest",
      "est",
      "sud-ovest"
    ],
    "dataset": [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SO",
      "O",
      "NO",
      "X"
    ],
    "tipo": "bussola",
    "durata": "10",
    "successo": "cap20",
    "fallimento": "cap21"
  }
}