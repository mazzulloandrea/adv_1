const initialcap = '_0';

const keyToSaveInStorage = 'GV-1';

const componentList = {
  audio: 0,
  risposte: 1,
  etc: 2,
  shoot: 3,
  cassaforte: 4,
  text: 5,
  quiz: 6,
  gioco9: 7,
  dice: 8,
}

const initialAbilita = {
  step: 1,
  corpo: 0, mente: 0, spirito: 0, vita: 3,
  zaino: [], //["corda", "accetta", "razione", "chiave1"],
  borsello: 0,
  chiavi: 0,
  zainoMaxLength: 4,
  vitaMaxLength: 7,
  borselloMaxLength: 50,
  chiaviMaxLength: 3,
  helpCount: 0,
  helpCountMax: 3,
  // zaino: ["corda", "accetta", "razione"],
}


const tutorialConfig = {
  audio: {
    text: [
      "Sulla sinista potrai disabilitare l'audio",
      "Sulla destra puoi chiedere aiuto ai tuoi contatti",
    ],
    active: true,
  },
  risposte: {
    text: [
      "Clicca su di una voce per proseguire",
      "Scegli il tuo percorso"
    ],
    active: true,
  },
  gioco9: {
    text: [
      "Memorizza le immagini che vengono mostrate",
      "Hai una buona memoria ?"
    ],
    active: true,
  },
  text: {
    text: [
      "Sei stato attento?",
      "Rispondi alla domanda"
    ],
    active: true,
  },
  dice: {
    text: [
      "Usa il Corpo, la Mente e lo Spirito",
      "Lancia i dadi per superare la difficoltà "
    ],
    active: true,
  },
  cassaforte: {
    text: [
      "Leggi bene la combinazione",
      "Tappa sul lucchetto e conferma il codice"
    ],
    active: true,
  },
  chiave: {
    text: [
      "Risolvendo i giochi in modo corretto guadagni 1 chiave",
      "Quando arriverai a 3 chiavi potrai ottenere un premio"
    ],
    active: true,
  },
  chiavi: {
    text: [
      "Usa le chiavi per aprire i bauli",
      "Se sarai fortunato potrai aumentare le tue abilità e recuperare vita"
    ],
    active: true,
  },
}


export {
  componentList,
  keyToSaveInStorage,
  initialAbilita,
  initialcap,
  tutorialConfig
}