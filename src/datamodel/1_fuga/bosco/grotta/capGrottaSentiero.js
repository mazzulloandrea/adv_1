export default {
  "titolo": "La grotta",
  "frase": `
    La fluorescenza dei funghi illumina la strada per quasi mezz'ora quando ti ritrovi nuovamente nell'oscurità.
    Con moltissima attenzione fai ancora pochi metri e ti ritrovi di nuovo all'aria aperta; hai attraversato la grotta finendo dall'altra parte.
    Sei molto stanco e mancano circa 5 ore all'alba per cui decidi di riposare.
    Prima di coricarti ripensi a tua sorella, ti concentri sulla voglia a forma di falce e provi ad attivare il potere: 
    senti che sei troppo lontano o forse troppo debole per comunicare qualcosa ma il bruciore che senti al ginocchio ti indica che Carcadena è viva.

    Di notte alcuni ricordi riaffiorano: 
    Denred che ritorna dall'addestramento con 2 dita in meno nella mano sinistra e quella cicatrice deformante sul labbro
    che ancora oggi gli permette di parlare male; 
    i suoi racconti della severità dei soldati, dell'addestramento ai limiti della sopportazione e della crudeltà del generale.

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
      next: "cap64"
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
  "gioco9": {
    successo: 'capRisveglioBene',
    fallimento: 'capRisveglioMale',
    durata: "20",
    combinazione: ["acqua", "aria", "elettricita", "fuoco"],
    type: "memory",
    dataset: "element",
  },
  "dice": {
    successo: 'capRisveglioBene',
    fallimento: 'capRisveglioMale',
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}