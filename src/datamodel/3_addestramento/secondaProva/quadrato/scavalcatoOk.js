export default {
  "titolo": "prima prova",
  "frase": `
    Ti arrampichi sulla parete scivolosa; con un salto la scavalchi catapultandoti all'interno del quadrato, vicino ad un angolo, con una zona di appostamento a pochi passi da te.
    Il riparo è costituito da alcune assi di legno con la presenza di una piccola breccia: 
    potrebbe essere un ottimo luogo per appostarsi ed aspettare il nemico. 
    Oltre il riparo ci sono 3 grossi alberi e, spostando lo sguardo verso il centro del territorio, vedi un piccolo pozzo, alla destra del quale un altro riparo simile al precedente.
    Alla tua destra invece c'è una tenda da campo oltre la quale 2 grossi alberi oscurano il sole; 
    più avanti c'è il muro perimetrale.

    Darius sarà già entrato?
    Ti starà aspettando per un agguato?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Ti apposti nel riparo vicino', next: 'riparo', },
    { frase: 'Superi il riparo verso gli alberi', next: "alberi" },
    { frase: 'Vai al centro del quadrato verso il pozzo', next: "pozzo" },
    { frase: 'Vai a destra nella tenda', next: "tenda" },
  ],
}