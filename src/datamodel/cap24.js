export default {
  "titolo": "Nel grano",
  "frase": `
    Ti avvicini di ancora un po' per guardarti meglio attorno;
    in lontananza vedi un carretto con legati all'interno alcuni ragazzi.
    Chiudi gli occhi e cerchi ci concentrati per percepire la presenza di tua sorella 
    ma all'improviso una mano ti afferra per il collo. 
    I soldati ti hanno preso.
  `,
  "audio": {
    "src": "/assets/audio/cap24.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Provi a divincolarti",
      "gioco": "dice",
    }
  ],
  "dice": {
    "successo": "cap25",
    "fallimento": "cap27",
    "obiettivo": 17, // numero da raggiungere con il lancio dei dadi
    "abilita": ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 6 // quanti lanci col dado
  },
}