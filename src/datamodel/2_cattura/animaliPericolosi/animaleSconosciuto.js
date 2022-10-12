export default {
  "titolo": "animali pericolosi",
  "frase": `
    C'è qualcosa, che non ricordi bene, che ti mette in allarme.
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Dai una razione alla gallina in modo da andartene', next: 'tornareIndietro', checkZaino: 'razione', zainoElimina: 'razione' },
    { frase: 'Resti immobile sperando che ti ignori', gioco: 'dice' },
    { frase: "Estrai la tua accetta e sei pronto ad affrontare lo scontro", gioco: "dice2", checkZaino: 'accetta' },
    { frase: 'Scappi', gioco: 'gioco9' },
  ],
  dice: {
    successo: 'piroliscoIgnora',
    fallimento: 'piroliscoMorte',
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
  dice2: {
    successo: 'piroliscoSconfitta',
    fallimento: 'piroliscoMorte2',
    obiettivo: 17,
    abilita: ["corpo", "mente", "spirito"],
    lanci: 3
  },
  gioco9: {
    successo: 'tornareIndietro',
    fallimento: 'piroliscoMorte3',
    livello: 3,
    type: "memory",
    combinazione: ["elettricita", "fuoco", "sole", "terra", "fuoco"],
    dataset: "element",
  }
}