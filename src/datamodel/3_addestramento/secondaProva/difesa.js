export default {
  "titolo": "prima prova",
  "frase": `
    Puoi scegliere tra lo scudo, l'armatura e il mantello.

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
    { frase: "Preferisci l'armatura", next: "addestramento", zaino: "armatura" },
    { frase: "Scegli il mantello", next: "addestramento", zaino: "mantello" },
  ]
}