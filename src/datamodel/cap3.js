export default {
  "titolo": "L'arrivo dei soldati",
  "frase": "Il ginocchio aumenta il dolore e non riesci a concenrtati abbastanza. Scegli cosa fare",
  "audio": {
    "src": "/assets/audio/cap0.m4a",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Preferisci scappare nel vicino campo di grano?",
      "gioco": "etc"
    },
    {
      "frase": "Se invece torni indietro fino in falegnameria",
      "gioco": "gioco9"
    },
    {
      "frase": "Se vuoi andare verso i soldati",
      "gioco": null
    }
  ],
  "etc": {
    "durata": "20",
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