const initialcap = '_0';
// const initialcap = 'cap24';


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
  zaino: []
}


const tutorialConfig = {
  risposte: {
    text: [
      "Clicca su di una voce per proseguire",
      "Scegli il tuo percorso"
    ],
    active: true,
  },
  etc: {
    text: [
      "Fai battere il tuo cuore",
      "Il grafico ti indicherà quante pulsazioni"
    ],
    active: true,
  },
  gioco9: {
    text: [
      "Nord, Sud, Schiva, Colpisci, ...",
      "Clicca sulle indicazioni che ti vengono mostrate"
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
}


export {
  componentList,
  initialAbilita,
  initialcap,
  tutorialConfig
}