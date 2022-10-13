export default {
  "titolo": "ultima prova",
  "frase": `
    All'interno il generale Ravon è alle prese con un qualche documento e, distrattamente, ti chiede di sederti, indicando con un veloce cenno lo sgabello dall'altro lato della scrivania.

    Nella stanza c'è un telo che avvolge una specie di cubo impedendo di vedere all'interno.
    Sopra di esso è appoggiato una sorta di candela, un cilindro di legno con intarsi circolari, sulla cui sommità spicca un piccolo rubino.

    Ravon, senza nemmeno alzare gli occhi, ti ordina di impugnare la bacchetta con la pietra e di fare tre volte il verso di una cornacchia.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Senza indugi segui le istruzioni del capitano", next: 'scettro' },
    { frase: "Chiedi come mai devi fare una cosa simile", gioco: 'dice' },
    { frase: "Ti sta forse prendendo in giro? Rifiuti categoricamente", gioco: 'text' },
  ],
  dice: {
    successo: "comeMaiSuccesso",
    fallimento: "comeMaiFallimento",
    obiettivo: 8, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4 // quanti lanci col dado

  },
  text: {
    successo: 'rinunciaSfida',
    fallimento: 'comeMaiSuccesso',
    durata: "30",
    domande: [
      "In quale città andrai a concludere l'addestramento?",
      "Il duca di ... ",
      "Qual'è il colore della pietra sulla sommità della bacchetta",
    ],
    risposte: [
      ["berdask", "berdasc"],
      ["blik", "blic"],
      ["rosso", "rubino"]
    ]
  }
}