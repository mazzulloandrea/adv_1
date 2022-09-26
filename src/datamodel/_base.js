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
        "gioco9",
      "next": "cap0", // "in caso di audio su gioco"
      "abilita": "corpo", // incrementa l'abilita corpo oppure mente, spirito o vita di +1
      "zaino": "accetta", // inserisce nello zaino l'oggetto accetta
      "checkZaino": "accetta", // mostra la risposta sse accetta è nello zaino
      "zainoElimina": "corda", // elimina dallo zaino l'oggetto
      borsello: 2, // incrementa il borsello di 2 unità
      borsello: -4, // decrementa il borsello di 4 unità

    }
  ],
  "next": "cap30", // si usa quando dopo l'audio si passa ad un altro audio
  "gioco": "dice", // "nome del gioco da fare",
  "dice": {
    successo: "2",
    fallimento: "3",
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 6 // quanti lanci col dado
  },
  "text": {
    successo: "2",
    fallimento: "3",
    durata: "15",
    domande: [
      "Qual'è il tuo nome?",
      "Quanti anni ha tua sorella",
      "Come si chiama tua sorella?",
      "Cosa è?"
    ],
    risposte: [
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
  // funziona solo con un dataset di massimo 9 elementi (parole di 9 caratteri)
  // const combatSet = { spada, scudo, teschio, elmo, arco, pirata, fantasma, ascia, mago };
  // const runSet = { corri, salta, stop, zigzag, indietro, sinistra, destra, su, giu };
  // const elementSet = { acqua, aria, elettricita, fuoco, ghiaccio, natura, sole, luna };

  "gioco9": {  // type = memory, dataset = run
    successo: "3",
    fallimento: "2",
    durata: "15",
    type: "memory",

    combinazione: ["corri", "salta", "stop", "zigzag", "indietro", "sinistra", "destra", "su", "giu"],
    dataset: "run",

    combinazione: ["spada", "scudo", "teschio", "elmo", "arco", "pirata", "fantasma", "ascia", "mago", "pugno"],
    dataset: "combat",

    combinazione: ["acqua", "aria", "elettricita", "fuoco", "ghiaccio", "luna", "natura", "sole", "terra"],
    dataset: "element",
  },
  "gioco9": {  // type = domanda
    successo: "3",
    fallimento: "2",
    durata: "10",
    combinazione: "panthelion",
    type: "domanda",
    domanda: "Come ti chiami?"
  },
  "gioco9": {  // type = numbers
    successo: "3",
    fallimento: "2",
    durata: "10",
    combinazione: "24", // 15 + 9
    type: "numbers",
    domanda: ["Numero di soldati + numero di reclute"],
  },
  cassaforte: {
    "successo": "3",
    "fallimento": "2",
    "durata": "150",
    type: 'roll',
    domanda: "n# totale soldati - n# totale reclute",
    combinazione: '15:09'
  },

  // NU
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
    domanda: 'n# soldati - n# reclute',
    type: 'roll',
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
}
