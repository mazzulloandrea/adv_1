export default {
  titolo: "prima prova",
  frase: `
    Ti arrampichi sulla parete scivolosa e, con un salto, la scavalchi, catapultandoti all'interno del quadrato, vicino ad un angolo.
    
    Davanti a te c'è un riparo, costituito da alcuni assi di legno, con la presenza di una piccola breccia.
    Oltre il riparo ci sono tre grossi alberi e, spostando lo sguardo verso il centro, vedi un piccolo pozzo.
    Alla tua destra, invece, c'è una tenda da campo, oltre la quale due grossi arbusti oscurano il sole.
    **cornice**
    Darius sarà già entrato?
    Ti starà aspettando per un agguato?
  `,

  audio: {
    src: "/assets/audio/scavalcatoOk.mp3",
  },
  risposte: [
    { frase: "Ti apposti nel riparo vicino", next: "riparo" },
    { frase: "Superi il riparo verso gli alberi", next: "alberi" },
    { frase: "Vai al centro del quadrato verso il pozzo", next: "pozzo" },
    { frase: "Vai a destra nella tenda", next: "tenda" },
  ],
};
