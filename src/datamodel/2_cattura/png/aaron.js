export default {
  "titolo": "Aaron",
  "frase": `
    Aaron alza gli occhi lentamente verso di te; timoroso dice ad una guarda che deve fermarsi per pisciare e
    quella risponde con voce grossa di farsela addosso e gli tira un manrovescio accompagnato da una risata.
    Un'altra guardia tira fuori il coltello e fa segno di tagliarli le dita se non se ne sta zitto e buono.

    In tutta risposta Aaron trema di paura e si chiude a riccio facendosi più piccolo che può; 
    dopo pochi attimi una puzza di piscio inizia a sollevarsi da Aaron ed un altro malrovescio lo colpisce in testa.
    Insulti, sbeffeggiamenti e nomignoli rendono Aaron il bersaglio delle guardie.
    
  `,

  "audio": {
    "src": "/assets/audio/carcadena.mp3", // todo
    "interrompe": "",
  },
  "risposte": [
    {
      frase: 'Osservi in silenzio la scena',
      next: 'sosta1'
    },
    {
      frase: 'Cerchi di consolare Aaron',
      gioco: 'text'
    }
  ],
  text: {
    successo: "aaronCoraggio",
    fallimento: "aaronPaura",
    durata: "15",
    domande: [
      "Che lavoro fanno i genitori di Aaron?",
      "Quanti anni ha Aaron?",
      "Come è il carattere di Aaron?",
      "Quanti fratelli ha Aaron?"
    ],
    risposte: [
      [
        "contadini",
        "contadino",
        "pozzo"
      ],
      [
        "12"
      ],
      [
        "timoroso",
        "pauroso",
        "fifone"
      ],
      [
        "0", "nessuno", "no", "zero"
      ]
    ]
  },
}