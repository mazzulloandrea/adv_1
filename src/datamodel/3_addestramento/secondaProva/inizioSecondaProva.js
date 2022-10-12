export default {
  "titolo": "prima prova",
  "frase": `
    Le sfide si susseguono e nessuno, in attesa del proprio turno, può sapere come sono andati gli incontri precedenti.
    Ad un certo punto si alza tua sorella ed, insieme a lei, Teela; 
    si allontanano mentre auguri a Carcadena buona fortuna attraverso il potere.

    In queste settimane poche volte sei riuscito a confrontarti con lei e con gli altri giovani del campo; 
    siete stati impegnati praticamente sempre tra gli addestramenti estenuanti e le varie mansioni quotidiane.

    Passano i minuti e sei inevitabilmente in ansia per Carcadena, poi senti bruciare il ginocchio <<Ho perso, sto bene>> 
    
    Con una certa dose di preoccupazione sai che il prossimo sarai tu.
    Darius si allontana e dopo pochi minuti vieni accompagnato all'ingresso.

    Un grosso lucchetto a combinazione è davanti a te; tutt'attorno un muro di legno alto circa 2 metri impedisce di vedere l'interno.
    
    La guardia da l'ordine: la tua seconda prova è iniziata.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Provi a decifrare la combinazione', gioco: 'cassaforte', },
    { frase: 'Cerchi di aggirare il muro di cinta', next: "aggirare" },
    { frase: 'Provi a scavalcare', gioco: "dice" },
  ],
  cassaforte: {
    "successo": "combinazioneOk",
    "fallimento": "combinazioneKo",
    "durata": "25",
    type: 'roll',
    domanda: "n# totale soldati ----- n# totale reclute",
    combinazione: '15:08' // essertag è morto
  },
  dice: {
    successo: "scavalcatoOk",
    fallimento: "scavalcatoKo",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}