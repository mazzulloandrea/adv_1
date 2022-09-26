export default {
  "titolo": "ultima prova",
  "frase": `
    Il capitano alza lo sguardo e ti
     dice che nemmeno lui desidera compilare tutte quelle carte 
     ma che deve farlo, e, alzando i toni, ti intima di prendere in mano quel dannato coso e
     smetterla di fare domande
    
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