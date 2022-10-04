export default {
  "titolo": "ultima prova",
  "frase": `
    Prosegui nel corridoio fino a che senti un forte rumore di roccia alle tue spalle, 
    come se delle rocce si muovessero;
    ritornando indietro ti accorgi che la via è chiusa e sei costretto a proseguire.
    
    Continuando l'unico percorso disponibile ti ritrovi in un grosso stanzone; 
    illuminando con la torcia fai il giro della stanza scoprendo che ci sono in totale 3 corridoi che arrivano 
    nella stanza ed un corridoio centrale piastrellato per proseguire.

    Capisci che i tre corridoio sono il prolungamento del bivio iniziale mentre 
    il corridoio centrale è la via per proseguire; il pavimento di quest'ultimo è riroperto da grossi lastroni di pietra.

    Facendo molta attenzione avanzi lentamente;
    dopo quasi un minuto ti ritrovi in una piccola stanza con una grossa rosa dei venti disegnata sul terreno:
    il Nord è alle tue spalle mentre il sud avanti a te, l'est a sinistra e ovest a destra.

    Dalla stanzina partono 3 corridoi:

    a destra, direzione ovest, un corridio con pavimento arancione,
    a sinistra, direzione est,  un corridoio con pavimento nero
    al centro, direzione sud, un corridio viola

    potrebbe essere un labirinto devi stare attento.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli ovest arancione", next: 'arancioneODirezioneBianco' },
    { frase: "Scegli est nero", next: 'neroEDirezioneBlu', },
    { frase: "Scegli sud viola", next: 'violaS', }
  ]
}