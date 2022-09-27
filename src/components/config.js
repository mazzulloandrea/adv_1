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

/**
 * Il flusso base prevede
 * Audio -> risposte || gioco
 * Risposte -> transizione a 3 finestre
 * Transizione -> setActualComponent(gioco)
 * Wich gioco -> carica componente e gioca
 * gioca -> onend
 * onend -> onGameEnd = (newCap) (setta capitolo nuovo), setActualComponent(audio)
 * inizia audio newCap
 * 
 */

const initialAbilita = {
  corpo: 0, mente: 0, spirito: 0, vita: 4,
  zaino: [],
  borsello: 0,
  chiavi: 0,
  zainoMaxLength: 4,
  vitaMaxLength: 4,
  borselloMaxLength: 50,
  chiaviMaxLength: 10,
  // zaino: ["corda", "coperta", "razione", "spada"],
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
      "Al terzo errore hai fallito"
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
      "Tappa sul forziere per inserire il codice"
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