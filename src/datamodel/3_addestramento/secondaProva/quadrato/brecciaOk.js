export default {
  "titolo": "prima prova",
  "frase": `
    Ti fai più piccolo che puoi e lentamente riesci a far passare tutto il tuo corpo attraverso il piccolo pertugio.

    Nell'angolo al tuo fianco, appoggiati per terra, ci sono uno scudo ed un elmo.
    Davanti, oltre gli oggetti, c'è un riparo costituito da assi di legno, un ottimo luogo dove appostarsi.
    Subito alla tua destra ci sono 3 alberi che con i rami oscurano il sole oltre i quali, 
    verso il centro del quadrato, vedi un piccolo pozzo
    
    Darius sarà già entrato?
    Ti starà aspettando per un agguato?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Ti apposti nel riparo vicino', next: 'riparo', },
    { frase: 'Vai verso gli alberi', next: "alberi" },
    { frase: 'Vai al centro del quadrato verso il pozzo', next: "pozzo" },
  ],
}