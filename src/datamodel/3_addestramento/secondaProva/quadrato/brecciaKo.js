export default {
  titolo: "prima prova",
  frase: `
    Ti fai più piccolo che puoi e, lentamente, riesci a far passare il tuo corpo attraverso il piccolo pertugio.
    Sei praticamente al di la del muro ma, appena ti rialzi, una sporgenza del legno ti graffia profondamente la schiena provocandoti una profonda ferita.
    **cornice**
    Davanti a te ci sono 3 grossi alberi, verso il centro del quadrato vedi un piccolo pozzo, a destra, invece, c'è un riparo costituito da assi di legno.
    
    Darius sarà già entrato?
    Ti starà aspettando per un agguato?
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Ti apposti nel riparo vicino', next: 'riparo', },
    { frase: 'Ti nascondi dietro gli alberi', next: "alberi" },
    { frase: 'Vai al centro del quadrato verso il pozzo', next: "pozzo" },
  ],
}