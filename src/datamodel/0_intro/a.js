export default {
  titolo: "Introduzione",
  step: 1,
  frase: `
    [rumore di accetta sulla legna] 
    Ad Erbafolta l'autunno sta per finire ed é grazie a te Pantelion, e a tua sorella gemella Carcadena, se ancora non vi hanno espropriato la casa.
    Della legna dovrebbe occuparsene Denred ma sicuramente sarà ad ubriacarsi all'osteria del Corvo Zoppo.
    
    Adesso che il vecchio è ammalato, come si fa a lasciare tutto nelle mani di 2 ragazzi di quattordici anni?
    L'atteggiamento irresponsabile di vostro fratellatro proprio non ti va giù...
    `,
  audio: {
    src: "/assets/audio/a.mp3", // TODO mettere audio
  },
  risposte: [
    {
      frase: "Spacchi la legna infuriato con Denred",
      gioco: "gioco9",
    },
    {
      frase: "Cerchi di calmarti",
      gioco: "dice",
    },
  ],
  dice: {
    successo: "a1",
    fallimento: "a1",
    obiettivo: 14,
    abilita: ["corpo", "mente", "spirito"],
    lanci: 6,
  },
  gioco9: {
    successo: "a1",
    fallimento: "a1",
    type: "memory",
    combinazione: ["acqua", "fuoco"],
    dataset: "element",
    livello: 1,
  },
};
