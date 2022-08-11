export default {
  "titolo": "Il Bosco",
  "frase": `
    Il bosco di notte non è un luogo sicuro ma ti fai coraggio, 
    oltretutto la paura di essere preso dai soldati
    e di affrontare l'addestamento ti da la motivazione necessaria ad andare avanti.
    La prima cosa da fare è trovare riparo per la notte e ci sono 3 luoghi possibili: 
    la capanna abbandonata, la grotta oppure sugli alberi del fiume.
  `,
  "audio": {
    "src": "/assets/audio/cap52.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Vai alla capanna abbandonata?",
      "next": "cap58",
    },
    {
      "frase": "Pensi che la grotta sia meglio",
      "next": "cap61",
    },
    {
      "frase": "Se vuoi andare sugli alberi al fiume",
      "next": "cap70",
    }
  ],
}