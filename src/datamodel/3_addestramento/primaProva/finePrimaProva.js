export default {
  "titolo": "prima prova",
  "frase": `
    Tutti insieme inneggiano il nome del vincotore gridando più volte a squarciagola Redro, Redro, Redro.
    
    I soldati svegliano i pochi storditi con secchiate d'acqua ed il capitano dice 
    che avendo vinto la prima prova Redro verrà addestrato per la seconda prova direttamente da lui.

    Al tuo sguardo interrogativo aggiunge alcuni dettagli parlando a gran voce verso tutti:
    per le tre settimane seguenti verrete addestrati ad usare uno stile di combattimento e lo farete in coppia;
    alla fine delle tre settimane si terrà una seconda prova.

    A questo punto il capitano raduna tutte le reclute e dice ad ognuno di dire il proprio nome e di presentarsi:

    oltre ai tuoi compagni che già conosci ci sono i quattro ragazzi di Murafredde:
    Redro 16 anni, capelli neri, coltivatore figlio di una guardia, dice di conoscere bene la lotta
    Teela, ragazza di tredici anni, dice di essere agile cacciatrice e di saper usare l'arco
    Giak ragazzi di quindici capelli rossi, basso e muscoloso, aiutante fabbro
    Frozia di quattordici anni un po' sovrappeso e timido, aiutante bibliotecario
    
    Redro a questo punto si allontana con il capitano Ravon

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