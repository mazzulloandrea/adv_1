export default {
  titolo: "Introduzione",
  step: 1,
  frase: `
    [rumore di accetta sulla legna] 
    <<Bastardo! 
    Te la farò pagare! ah si se te la farò pagare>> 
    [rumore di accetta sulla legna].
    Ti chiami Pantelion, hai 14 anni e sei infuriato con tuo fratellastro maggiore Denred
    `,
  audio: {
    src: "/assets/audio/a.mp3",
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
    lanci: 6
  },
  gioco9: {
    successo: "a1",
    fallimento: "a1",
    type: "memory",
    combinazione: ["acqua", "fuoco"],
    dataset: "element",
    livello: 1,
  }
}