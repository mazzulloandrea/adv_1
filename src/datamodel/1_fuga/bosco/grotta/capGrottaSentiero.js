export default {
  "titolo": "La grotta",
  "frase": `
    Cammini per quasi mezz'ora sfruttando la fluorescenza dei funghi, quando ti ritrovi nuovamente nell'oscurità.
    Con moltissima attenzione fai ancora pochi metri e sei di nuovo all'aria aperta; hai attraversato la grotta finendo dall'altra parte.
    Sei molto stanco e mancano circa 5 ore all'alba, per cui decidi di riposare.
    **cornice**
    Prima di coricarti ripensi a tua sorella, ti concentri sulla voglia a forma di falce e provi ad attivare il potere.
    Percepisci che sei troppo lontano, o forse troppo debole, per comunicare qualcosa, ma il bruciore che senti al ginocchio ti indica che Carcadena non è poi così lontana.
    **cornice**
    Di notte alcuni ricordi riaffiorano: Denred che ritorna dall'addestramento, la sua mano sinistra priva di due dita, quella cicatrice deformante sul collo e la conseguente voce modificata, la severità dei soldati e l'addestramento ai limiti della sopportazione.

    Il giorno del raccolto è arrivato anche per te.

    Al tuo risveglio hai chiaro il tuo obiettivo: seguire i soldati e raggiungere tua sorella.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: "Se hai una coperta e vuoi usarla per riposare",
      checkZaino: "coperta",
      next: "cap64",
      zainoElimina: "coperta"
    },
    {
      frase: "Se rientri di qualche metro nella grotta per riposare",
      gioco: "gioco9"
    },
    {
      frase: "Se decidi di riposare su di una roccia",
      gioco: "dice"
    },
  ],
  gioco9: {
    successo: 'capRisveglioBene',
    fallimento: 'capRisveglioMale',
    livello: 2,
    type: "memory",
    dataset: "nature",
    combinazione: ["barile", "candela", "pietra", "tomba"],
  },
  "dice": {
    successo: 'capRisveglioBene',
    fallimento: 'capRisveglioMale',
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}