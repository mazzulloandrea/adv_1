export default {
  titolo: "Il Bosco",
  frase: `
    Corri via, ripetendoti che quel maledetto giorno è arrivato.
    Denred te ne ha aveva parlato:
    <<Verranno i soldati e prenderanno te, tua sorella e tutti gli altri giovani scansafatiche. 
    Vi addestreranno a suon di calci e pugni e se non ce la farete.. bhe vi lasceranno morire>>.
    Lui però ce l'aveva fatta ed era tornato, con tanto di armi, armatura, distintivo e cattiveria ... 
    o forse quella l'aveva sempre avuta!

    Continuando a pensare entri nel bosco buio.
  `,
  audio: {
    src: "/assets/audio/cap50.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "cap52",
      icon: "corpo",
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "cap52",
      icon: "mente",
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "cap52",
      icon: "spirito",
    },
  ],
};
