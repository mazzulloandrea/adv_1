export default {
  "titolo": "L'arrivo dei soldati",
  "frase": `
    Provi a concentrarti, ma nonostante ti sforzi per controllarlo il bruciore al ginocchio diviene isopportabile.
    Il tuo cuore e i tuoi pensieri sono troppo agitati per usare il potere.
    Scegli cosa fare`,
  "audio": {
    "src": "/assets/audio/cap3.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Preferisci scappare nel vicino campo di grano?",
      "gioco": "etc"
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
  "etc": {
    "durata": "20",
    "successo": "cap10",
    "fallimento": "cap11"
  },
  "gioco9": {
    "combinazione": [
      "su",
      "salta",
      "zigzag",
      "destra"
    ],
    "type": "memory",
    "dataset": "run",
    "durata": "15",
    "successo": "cap13",
    "fallimento": "cap13"
  }
}