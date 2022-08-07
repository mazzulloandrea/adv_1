export default {
  "titolo": "Nel grano",
  "frase": `
    Miracolosamente riesci a scappare tra le imprecazioni dei soldati
    che adesso minacciano di dare fuoco al campo di grano.
    `,
  "audio": {
    // "src": "/assets/audio/cap25.mp3",
    "src": "/assets/audio/cap0.m4a",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "cap26",
      "gioco": "audio",
      "icon": "corpo"
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "cap26",
      "gioco": "audio",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "cap26",
      "gioco": "audio",
      "icon": "spirito"
    }
  ],
}
/*
    Ti allontani il più possibile quando vai a sbattere contro qualcosa che ti fa cadere per terra.
    E' _______ un tuo amico che si sta nascondendo terrorizzato dai soldati.
  `,
  "audio": {
    "src": "/assets/audio/cap25.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Se vuoi convincerlo a scappare con te",
      "gioco": "dice",
    },
    {
      "frase": "Se lo ignori e corri via",
      "gioco": "audio",
      "next": "cap13"
    }
  ],
  "dice": {
    "successo": "",
    "fallimento": "",
    "obiettivo": 5, // numero da raggiungere con il lancio dei dadi
    "abilita": ["spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 4 // quanti lanci col dado
  },
}
*/