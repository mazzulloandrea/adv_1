export default {
  "titolo": "ultima prova",
  "frase": `
    Prosegui nel corridoio; dopo quasi un minuto ti ritrovi in una piccola stanza con una grossa rosa dei venti disegnata sul terreno. 
    Il Nord è alle tue spalle.

    Dalla stanzina partono 3 corridoi:
    a destra, direzione ovest, un corridio con pavimento arancione,
    a sinistra, direzione est,  un corridoio con pavimento nero
    al centro, direzione sud, un corridio viola
    
    potrebbe essere un labirinto devi stare attento.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Scegli ovest arancione", next: 'arancioneODirezioneBianco' },
    { frase: "Scegli est nero", next: 'neroEDirezioneBlu', },
    { frase: "Scegli sud viola", next: 'violaS', }
  ]
}