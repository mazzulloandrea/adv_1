export default {
  "titolo": "Introduzione",
  "frase": `
    Soddisfatto del tuo lavoro, accatasti gli ultimi ciocchi; 
    poi ti fermi, ti rilassi, chiudi gli occhi e ti concentri su tua sorella gemella: 
    i suoi capelli biondi, la sua schiena ed infine la voglia a forma di falce che Carcadena ha sulla sua spalla sinistra. 
    Sai che puoi comunicarle solo poche parole
  `,
  "audio": {
    "src": "/assets/audio/a0.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Dove sei sorella?",
      "gioco": "text"
    },
    {
      "frase": "Come sta il vecchio?",
      "gioco": "gioco9"
    }
  ],
  "text": {
    "successo": "a2",
    "fallimento": "a3",
    "durata": "20",
    "domande": [
      "Come ti chiami?",
      "Come si chiama tua sorella?",
      "Come si chiama tuo fratello?",
      "Quanti anni ha tua sorella?",
      "Quanti anni hai tu?"
    ],
    "risposte": [
      [
        "pantelion",
        "phantelion"
      ],
      [
        "carcadena",
        "carcadaena"
      ],
      [
        "denred"
      ],
      [
        "14"
      ],
      [
        "14"
      ]
    ]
  },
  "gioco9": {
    "successo": "a2",
    "fallimento": "a3",
    "durata": "10",
    "combinazione": "denred",
    "type": "domanda",
    domanda: "Come si chiama tuo fratello?"
  }
}