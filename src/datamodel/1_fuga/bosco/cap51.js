export default {
  titolo: "Il Bosco",
  frase: `
    Il bosco di notte non è un luogo sicuro ma in due vi fate coraggio; oltretutto la paura di essere presi dai soldati e di affrontare l'addestamento vi da la motivazione necessaria ad andare avanti.
    Concordate che la prima cosa da fare è trovare riparo per la notte e ci sono tre luoghi possibili: la capanna abbandonata, la grotta oppure il fiume.
    Aaraon vorrebbe andare alla capanna.
  `,
  audio: {
    src: "/assets/audio/cap51.mp3",
  },
  risposte: [
    {
      frase: "Sei d'accordo con Aaron",
      next: "cap53",
    },
    {
      frase: "Preferisci andare da solo alla grotta",
      next: "cap61",
    },
    {
      frase: "Pensi che il fiume siano la scelta migliore",
      next: "cap70",
    },
  ],
};
