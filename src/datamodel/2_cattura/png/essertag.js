export default {
  "titolo": "Essertag",
  "frase": `
    Essertag ha 15 anni e sta provando a liberarsi i polsi dalle corde...

    I vostri sguardi si incrociano e sussurrando ti chiede di aiutarlo; 
    ti indica un pugnale che è stato lasciato quasi incustodito dalle guardie e che se le distrai lui potrebbe prendere per poi liberarsi.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Vuoi dare ad Essertag la tua accetta?",
      "next": "tentativoAccetta",
      "checkZaino": "accetta",
      "zainoElimina": "accetta",
    },
    {
      "frase": "Vuoi provare a distrarre la guardia?",
      "gioco": "dice"
    },
    {
      "frase": "Se preferisci lasciar stare",
      "next": "sosta1"
    },
  ],
  dice: {
    successo: "aiutatoEssertag",
    fallimento: "distrarreGuardia",
    obiettivo: 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}