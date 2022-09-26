export default {
  "titolo": "Nel grano",
  "frase": `
    Ti allontani il più possibile quando vai a sbattere contro qualcosa che ti fa cadere per terra.
    E' Aaron un tuo amico che si sta nascondendo terrorizzato dai soldati.
  `,
  "audio": {
    "src": "/assets/audio/cap26.mp3",
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
    "successo": "cap19", // lo convinci a scappare con te nel bosco
    "fallimento": "cap21", // scappi e vai nel bosco da solo
    "obiettivo": 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 4 // quanti lanci col dado
  },
}