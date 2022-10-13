export default {
  "titolo": "prima prova",
  "frase": `
    Il capitano ti spiega che la scelta che hai fatto implica un addestramento completo nelle arti della difesa;
    sono 3 e sono lo scudo, l'armatura e il mantello.

    Lo scudo ripara da tutti i colpi e può essere usato anche per avvicinarti al tuo nemico.
    
    L'armatura protegge i tuoi organi vitali.
    
    Il mantello incrementa lo stile furtivo, l'abilità nel nasconderti ed agire nell'ombra rischiando il meno possibile.

    Le lezioni inizieranno domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua difesa.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Afferri lo scudo", next: "addestramento", zaino: "scudo" },
    { frase: "Preferisci l'armatura", next: "addestramento", zaino: "armor1" },
    { frase: "Scegli il mantello", next: "addestramento", zaino: "mantello" },
  ]
}