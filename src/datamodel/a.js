export default {
  "titolo": "Introduzione",
  "frase": `
    <<chop efx ...Bastardo! Te la farò pagare! ah si se te la farò pagare <chop efx> >> 
    Ti chiami Pantelion, hai 14 anni e sei infuriato con tuo fratellastro maggiore Denred`,
  "audio": {
    "src": "/assets/audio/a.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Spacchi la legna infuriato con Denred",
      "gioco": "dice",
    },
    {
      "frase": "Cerchi di calmarti",
      "gioco": "etc",
    },
    {
      "frase": "gioco9",
      "gioco": "gioco9"
    }
  ],
  "dice": {
    "successo": "a0",
    "fallimento": "a1",
    "obiettivo": 14,
    "abilita": ["corpo", "mente", "spirito"],
    "lanci": 6
  },
  "etc": {
    "successo": "a0",
    "fallimento": "a1",
    "MaxCounter": 5,
    "MaxPicchi": 3,
    "durata": 5000
  },
  "gioco9": {
    "successo": "a0",
    "fallimento": "a1",
    "durata": "10",
    "combinazione": "denred",
    "type": "domanda",
    "domanda": "Come si chiama tuo fratello?"
  }
}