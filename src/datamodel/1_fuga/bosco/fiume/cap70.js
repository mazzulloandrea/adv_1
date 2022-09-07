export default {
  "titolo": "Il Bosco",
  "frase": `
    Dopo qualche minuto raggiungi il fiume, oltre il quale c'è la rete di ponti sugli alberi.
    E' molto buio e guadare il fiume potrebbe essere pericoloso.
  `,
  "audio": {
    "src": "/assets/audio/cap70.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Vuoi usare la corda ?",
      "checkZaino": "corda",
      "next": "cap80",
    },
    {
      "frase": "Stai attento e provi ad oltrepassare il fiume",
      gioco: "dice"
    },
    {
      "frase": "E' troppo pericoloso meglio tornare indietro",
      "next": "cap71"
    },
  ],
  dice: {
    "successo": "cap80",
    "fallimento": "cap72",
    "obiettivo": 11, // numero da raggiungere con il lancio dei dadi
    "abilita": ["corpo", "mente",], // quelle che non si devono usare devono essere escluse
    "lanci": 4 // quanti lanci col dado
  }
}