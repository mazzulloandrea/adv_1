const initialcap = "_0";
// const initialcap = "svieni";

const keyToSaveInStorage = "GV-1";

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
};

const initialAbilita = {
  step: 1,
  corpo: 0,
  mente: 0,
  spirito: 0,
  vita: 4,
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
};

const tutorialConfig = {
  audio: {
    text: [
      "Tappa per continuare. Apparirà il testo...",
      "Potrai disabilitare l'audio e chiedere aiuto ai tuoi contatti",
    ],
    active: true,
  },
  risposte: {
    text: ["Appariranno diversi percorsi", "Scegli il tuo per proseguire"],
    active: true,
  },
  gioco9: {
    text: [
      "Memorizza le immagini che vengono mostrate",
      "Trova quella corretta",
    ],
    active: true,
  },
  text: {
    text: ["Sei stato attento?", "Rispondi alla domanda e premi conferma"],
    active: true,
  },
  dice: {
    text: [
      "Usa il Corpo, la Mente e lo Spirito",
      "Tocca i dadi per lanciarli e superare la difficoltà ",
    ],
    active: true,
  },
  cassaforte: {
    text: [
      "Leggi bene la combinazione",
      "Tappa sul lucchetto e conferma il codice",
    ],
    active: true,
  },
  chiave: {
    text: [
      "Risolvendo i giochi in modo corretto guadagnerai 1 chiave",
      "Quando arriverai a 3 chiavi potrai ottenere un premio",
    ],
    active: true,
  },
  chiavi: {
    text: [
      "Usa le chiavi per aprire i bauli",
      "Se sarai fortunato potrai aumentare le tue abilità e recuperare vita",
    ],
    active: true,
  },
};

export {
  componentList,
  keyToSaveInStorage,
  initialAbilita,
  initialcap,
  tutorialConfig,
};
