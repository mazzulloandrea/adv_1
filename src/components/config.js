const initialcap = '_0';

const keyToSaveInStorage = 'GV-1';

const componentList = {
  "audio": 0,
  "risposte": 1,
  "etc": 2,
  "shoot": 3,
  "cassaforte": 4,
  "text": 5,
  "quiz": 6,
  "gioco9": 7,
  "dice": 8,
}

const initialAbilita = {
  step: 1,
  corpo: 0, mente: 0, spirito: 0, vita: 5,
  // corpo: 2, mente: 4, spirito: 2, vita: 4,
  zaino: [],
  borsello: 0,
  chiavi: 0,
  zainoMaxLength: 4,
  vitaMaxLength: 5,
  borselloMaxLength: 50,
  chiaviMaxLength: 3,
  // zaino: ["corda", "accetta", "razione"],
  // chiavi: 2,
  // borsello: 4
}


const tutorialConfig = {
  risposte: {
    text: [
      "Clicca su di una voce per proseguire",
      "Scegli il tuo percorso"
    ],
    active: true,
  },
  gioco9: {
    text: [
      "Segui le indicazioni che vengono mostrate",
      "Attento a non sbagliare ..."
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
      "Leggi bene la combinazione corretta",
      "Tappa sul lucchetto per inserire il codice"
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
      "Ogni 3 chiavi potrai cercare il tesoro",
      "Se sarai fortunato potrai aumentare le tue abilità e recuperare vita"
    ],
    active: true,
  }
}


export {
  componentList,
  keyToSaveInStorage,
  initialAbilita,
  initialcap,
  tutorialConfig
}