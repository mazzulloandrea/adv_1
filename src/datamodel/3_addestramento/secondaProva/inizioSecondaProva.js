export default {
  "titolo": "prima prova",
  "frase": `
    Le sfide si susseguono e nessuno in attesa del proprio turno può sapere come sono andate gli incontri precedenti.
    Ad un certo punto si alza tua sorella ed insieme a lei Teela; 
    si allontanano mentre auguri a Carcadena buona fortuna attraverso il potere.

    In queste settimane poche volte sei riuscito a confrontarti con lei e con gli altri giovani del campo; 
    siete stati impegnati praticamente sempre tra gli addestramenti estenuanti per metà giornata, 
    i compiti di pulizia fino a sera e 
    le ultime ore dedicate alle prove fisiche, mentali e spirituali per completare l'addestramento.

    Passano i minuti e sei inevitabilmente in ansia per tua sorella, 
    poi senti bruciare il ginocchio e nella mente le parole di tua sorella; 
    ti dice che ha perso la sfida ma di non preoccuparti che sta bene.

    Con una certa dose di preoccupazione sai che il prossimo sarai tu;
    ti alzi in piedi e vieni accompagnato all'ingresso.

    Una porta con un grosso lucchetto a combinazione è davanti a te, 
    tutt'attorno un muro di legno alto circa 2 metri impedisce di vedere l'interno.
    
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
    domanda: "n# totale soldati - n# totale reclute",
    combinazione: '15:09'
  },
  "dice": {
    successo: "scavalcatoOk",
    fallimento: "scavalcatoKo",
    obiettivo: 9, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}