export default {
  "titolo": "prima prova",
  "frase": `
    Tutti insieme inneggiano il nome del vincitore gridando più volte a squarciagola Redro, Redro, Redro.
    
    Il capitano dice a Redro che, avendo vinto la prima prova, verrà addestrato, per la seconda prova, direttamente da lui.

    Al tuo sguardo interrogativo aggiunge alcuni dettagli, parlando a gran voce verso tutti:
    <<Per le tre settimane seguenti verrete addestrati al combattimento e lo farete in coppia; alla fine delle tre settimane si terrà una prova>>
    **cornice**
    A questo punto il capitano raduna tutte le reclute: oltre ai tuoi compagni ci sono i quattro ragazzi di Murafredde.
    Redro, sedici anni, capelli neri, dice di conoscere bene la lotta.
    Teela, ragazza di tredici anni, dice di essere agile cacciatrice e di saper usare l'arco.
    Giak, ragazzo di quindici anni, capelli rossi, basso e muscoloso, aiutante fabbro.
    Frozia di quattordici anni, un po' sovrappeso e timido, aiutante bibliotecario.
    
    Redro a questo punto si allontana con il capitano Ravon.

    Tu Pantelion chi scegli come compagno?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli qualcuno dei tuoi compagni di Erbafolta ?", next: "secondaProvaErbafolta" },
    { frase: "Scegli qualcuno di Murafredde ?", next: "secondaProvaMurafredde" }
  ]
}