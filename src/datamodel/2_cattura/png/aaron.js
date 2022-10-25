export default {
  titolo: "Aaron",
  frase: `
    Guardi il tuo amico.
    Aaron alza gli occhi lentamente verso di te, poi si rivolge timoroso ad una guardia: deve fermarsi per pisciare. 
    <<Fattela addosso moccioso>> e un'altra guardia tira fuori il coltello, facendo segno di tagliarli le dita se non se ne sta zitto e buono.

    Aaron trema di paura e, dopo pochi attimi, una puzza di urina inizia a sollevarsi; il ragazzo si prende un altro malrovescio in faccia.
    Insulti, sbeffeggiamenti e nomignoli rendono Aaron il bersaglio delle guardie.
  `,

  audio: {
    src: "/assets/audio/carcadena.mp3", // todo
    interrompe: "",
  },
  risposte: [
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
      "Quanti anni ha Aaron?",
      "Come è il carattere di Aaron?",
    ],
    risposte: [
      [
        "12"
      ],
      [
        "timoroso",
        "pauroso",
        "fifone",
        "timore", "paura", "fifa"
      ]
    ]
  },
}