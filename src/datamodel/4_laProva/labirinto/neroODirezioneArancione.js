export default {
  titolo: "ultima prova",
  frase: `
    Il nero assorbe quasi totalmente la fiamma della torcia; prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    **cornice**
    Giungi ad un incrocio a quattro vie: a destra la via iniziale dalla quale sei entrato nel labirinto, avanti, oltre l'incrocio, un passaggio di colore arancione acceso, a sinistra, un corridio colorato di viola, alle tue spalle, il corridio scuro.
    
  `,

  audio: {
    src: "/assets/audio/neroODirezioneArancione.mp3",
  },
  risposte: [
    { frase: "Avanti verso l'arancione", next: "arancioneODirezioneBianco" },
    { frase: "Torni indietro per la via nera", next: "neroEDirezioneBlu" },
    { frase: "Sinistra percorrendo la via viola", next: "versoIncrocio" },
  ],
};
