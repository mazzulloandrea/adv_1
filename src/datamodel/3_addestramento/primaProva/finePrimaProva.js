export default {
  titolo: "prima prova",
  frase: `
    Tutti insieme inneggiano il nome del vincitore gridando più volte a squarciagola Redro.
    
    Il capitano gli dice che verrà addestrato, per la seconda prova, direttamente da lui.

    Al tuo sguardo interrogativo aggiunge alcuni dettagli, parlando a gran voce verso tutti:
    <<Per tre settimane seguenti verrete addestrati al combattimento e lo farete in coppia; alla fine delle tre settimane si terrà una prova>>
    **cornice**
    A questo punto Ravon raduna tutte le reclute; oltre ai tuoi compagni ci sono i quattro ragazzi di Murafredde.
    Redro, sedici anni, capelli neri, abile lottatore.
    Teela, ragazza di tredici anni, cacciatrice ed esperta con l'arco.
    Giak, quindici anni, capelli rossi, basso e muscoloso, aiutante fabbro.
    Ed infine Frozia che ha la tua età, un geniale bibliotecario sovrappeso e timido.
    **cornice**
    Redro a questo punto si allontana con il capitano Ravon.

    Tu Pantelion chi scegli come compagno?
  `,

  audio: {
    src: "/assets/audio/finePrimaProva.mp3",
  },
  risposte: [
    {
      frase: "Scegli qualcuno dei tuoi compagni di Erbafolta ?",
      next: "secondaProvaErbafolta",
    },
    {
      frase: "Scegli qualcuno di Murafredde ?",
      next: "secondaProvaMurafredde",
    },
  ],
};
