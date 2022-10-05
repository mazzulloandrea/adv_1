export default {
  "titolo": "ultima prova",
  "frase": `
    Il capitano alza lo sguardo <<Nemmeno io desidero compilare tutte queste carte ma devo farlo; ora prendi in mano quel dannato coso e smettila di fare domande!>>.
    
     Poi abbassa lo sguardo e continua a compilare le sue carte.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Rinunci alla sfida", next: 'rinunciaSfida', },
    { frase: "Afferri la bacchetta", next: 'scettro' },
  ],
}