export default {
  "titolo": "ultima prova",
  "frase": `
    Il nero assorbe quasi totalmente la fiamma della torcia che illumina al massimo un paio di metri davanti a te;
    prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    
    Giungi ad un incrocio a quattro vie:
    a nord la via iniziale dalla quale sei entrato nel labirinto,
    a ovest, oltre l'incrocio, un passaggio di colore arancione acceso
    a sud, un corridio colorato di viola,
    alle tue spalle, est, il corridio oscuro.
    
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ovest verso l'arancione", next: 'arancioneODirezioneBianco' },
    { frase: "Torni indietro per la via nera, direzione est", next: 'neroEDirezioneBlu', },
    { frase: "Sud percorrendo la via viola", next: 'versoIncrocio', }
  ]
}