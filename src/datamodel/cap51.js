export default {
  "titolo": "Il Bosco",
  "frase": `
    Il bosco di notte non è un luogo sicuro ma in 2 vi fate coraggio, oltretutto la paura di essere presi dai soldati
    ed affrontare l'addestamento vi da il coraggio necessario ad andare avanti.
    Concordate che la prima cosa da fare è trovare riparo per la notte e ci sono 3 luoghi pssibili: 
    la capanna abbandonata, la grotta oppure sugli alberi del fiume.

    Aaraon vorrebbe andare alla capanna.
  `,
  "audio": {
    "src": "/assets/audio/cap51.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Sei d'accordo con Aaron",
      "next": "cap53",
    },
    {
      "frase": "Vuoi convincerlo che la grotta è meglio",
      "next": "cap54",
    },
    {
      "frase": "Vuoi convincerlo che gli alberi del fiume siano la scelta migliore",
      "next": "cap55",
    }
  ],
}