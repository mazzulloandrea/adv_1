export default {
  "titolo": "prima prova",
  "frase": `
  Il capitano ti spiega che la scelta che hai fatto implica un addestramento completo nelle arti della difesa: 
  sono 3 e sono rappresentate dallo scudo, dall'armatura e dal mantello.

  Lo scudo ripara da tutti i colpi e può essere usato anche per avvicinarti al tuo nemico.
  
  L'armatura protegge i tuoi organi vitali e 
  imparare a muoverti agilmente con questo peso ed ingombro aumenta le possibilità di vittoria
  
  Il mantello rappresenta lo stile furtivo, l'abilità nel nasconderti ed agire nell'ombra rischiando il meno possibile.

  Le lezioni inizieranno immediatamente domani mattina all'alba e proseguiranno per 3 settimane.

    Ora devi scegliere la tua difesa.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli lo scudo", next: "addestramento", zaino: "scudo" },
    { frase: "Scegli l'armatura", next: "addestramento", zaino: "armatura" },
    { frase: "Scegli il mantello", next: "addestramento", zaino: "mantello" },
  ]
}