export default {
  titolo: "prima prova",
  frase: `
    Ti fai più piccolo che puoi e lentamente riesci a passare attraverso il piccolo pertugio.

    Oltre il riparo ci sono tre grossi alberi e, spostando lo sguardo verso il centro, vedi un piccolo pozzo.
    Alla tua destra invece c'è una tenda da campo, oltre la quale ci sono altri due grossi arbusti.

    Darius sarà già entrato?
    Ti starà aspettando per un agguato?
    Sono queste le domande nella tua mente...
  `,

  audio: {
    src: "/assets/audio/brecciaOk.mp3",
  },
  risposte: [
    { frase: "Ti apposti nel riparo vicino", next: "riparo" },
    { frase: "Vai verso gli alberi", next: "alberi" },
    { frase: "Vai al centro del quadrato verso il pozzo", next: "pozzo" },
  ],
};
