export default {
  "titolo": "titolo nell'header",
  "scritto": "",
  "audio": {
    "src": "/assets/audio/[name].[ext}]",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "se vuoi fare questa cosa clicca qui",
      "gioco": "audio" ||
        "dice" ||
        "text" ||
        "etc" ||
        "shoot" ||
        "cassaforte" ||
        "quiz" ||
        "gioco9" 
      "next": "cap0" -> "in caso di audio su gioco"
    }
  ],
  "gioco": "nome del gioco da fare",
  "dice": {
    "successo": "2",
    "fallimento": "3",
    "obiettivo": 14, // numero da raggiungere con il lancio dei dadi
    "abilita": ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 6 // quanti lanci col dado
  },
  "next": "cap30", // si usa quando dopo l'audio si passa ad un altro audio
  "text": {
    "successo": "2",
    "fallimento": "3",
    "durata": "5",
    "image": "/assets/images/bottle.jpg",
    "domande": [
      "Qual'è il tuo nome?",
      "Quanti anni ha tua sorella",
      "Come si chiama tua sorella?",
      "Cosa è?"
    ],
    "risposte": [
      [
        "pantelion",
        "phantelion"
      ],
      [
        "14"
      ],
      [
        "carcadena",
        "carcadaena"
      ],
      [
        "bottiglia"
      ]
    ]
  },
  "etc": {
    "successo": "cap2",
    "fallimento": "cap3",
    "MaxCounter": 5,
    "MaxPicchi": 3 / 4
  },
  "shoot": {
    "successo": "cap3",
    "fallimento": "cap2",
    "durata": "10",
    "params": {
      "colpi": 1,
      "jolly": 1, // non ancora implementati -  compaiono dentro il mirino
      "movimenti": 10,
      "shootCount": 3,
      "delayTime": 1000,
      "target": {
        "x1": 40,
        "x2": 80,
        "y1": 30,
        "y2": 60,
      },
      "mirino": {
        "width": 15,
        "height": 15,
      }
    }
  },
  "cassaforte": {
    "successo": "3",
    "fallimento": "2",
    "durata": "15",
    "combinazione": [
      {
        "date": null,
        "giusto": "01-01-1200"
      },
      {
        "select": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0
        ],
        "giusto": "5"
      },
      {
        "progress": null,
        "giusto": 45
      },
      {
        "switch": null,
        "giusto": false
      }
    ]
  },
  "gioco9": {
    "successo": "3",
    "fallimento": "2",
    "durata": "10",
    "combinazione": [
      "arancione",
      "azzurro",
      "verde",
      "viola"
    ],
    "type": "directions" || "colors"
  }
}