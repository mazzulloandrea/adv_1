export default {
  titolo: "Essertag",
  frase: `
    Essertag sta provando a liberarsi i polsi dalle corde.
    I vostri sguardi si incrociano e, sussurrando, ti chiede di aiutarlo; ti indica un pugnale, lasciato incustodito dalle guardie, che lui potrebbe utilizzare per liberarsi.
  `,

  audio: {
    src: "/assets/audio/essertag.mp3",
  },
  risposte: [
    {
      frase: "Vuoi dare ad Essertag la tua accetta?",
      next: "tentativoAccetta",
      checkZaino: "accetta",
      zainoElimina: "accetta",
    },
    {
      frase: "Vuoi provare a distrarre la guardia?",
      gioco: "dice",
    },
    {
      frase: "Se preferisci lasciar stare",
      next: "sosta1",
    },
  ],
  dice: {
    successo: "aiutatoEssertag",
    fallimento: "distrarreGuardia",
    obiettivo: 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
