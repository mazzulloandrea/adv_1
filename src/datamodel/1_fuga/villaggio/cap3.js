export default {
  "titolo": "L'arrivo dei soldati",
  "frase": `
    Provi a concentrarti, ma nonostante ti sforzi per controllarlo il bruciore al ginocchio diviene insopportabile.
    Il tuo cuore e i tuoi pensieri sono troppo agitati per usare il potere.
    Scegli cosa fare`,
  "audio": {
    "src": "/assets/audio/cap3.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Preferisci scappare nel vicino campo di grano?",
      "gioco": "dice"
    },
    {
      "frase": "Se invece torni indietro fino in falegnameria",
      "gioco": "gioco9"
    },
    {
      "frase": "Se vuoi andare verso i soldati",
      "gioco": "audio",
      "next": "cap4"

    }
  ],
  "dice": {
    "successo": "cap10",
    "fallimento": "cap11",
    "obiettivo": 15, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 6 // quanti lanci col dado
  },
  "gioco9": {
    "combinazione": ["grano", "baffi", "erba", "nave"],
    "type": "memory",
    dataset: "vario",
    "durata": "15",
    "successo": "cap13",
    "fallimento": "cap13"
  }
}