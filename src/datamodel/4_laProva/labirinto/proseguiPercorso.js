export default {
  titolo: "ultima prova",
  frase: `
    Prosegui nel corridoio. 
    Dopo quasi un minuto ti ritrovi in una piccola stanza con una grossa rosa dei venti disegnata sul terreno. 
    Il Nord è alle tue spalle.

    Dalla stanzina partono 3 corridoi. 
    A destra, direzione ovest, un corridio con pavimento arancione.
    A sinistra, direzione est,  un corridoio con pavimento nero.
    Al centro, direzione sud, un corridio viola.
    
    Potrebbe essere un labirinto devi stare molto attento.
  `,

  audio: {
    src: "/assets/audio/proseguiPercorso.mp3",
  },
  risposte: [
    { frase: "Scegli ovest arancione", next: "arancioneODirezioneBianco" },
    { frase: "Scegli est nero", next: "neroEDirezioneBlu" },
    { frase: "Scegli sud viola", next: "violaS" },
  ],
};
