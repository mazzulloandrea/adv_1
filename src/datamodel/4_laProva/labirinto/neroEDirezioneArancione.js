export default {
  "titolo": "ultima prova",
  "frase": `
    Il nero assorbe quasi totalmente la fiamma della torcia che illumina al massimo un paio di metri davanti a te;
    prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    
    Giungi ad un incrocio a quattro vie:
    a sud un picolissimo pertugio viola con una grande porta metallica che chiude il passaggio,
    a est, oltre l'incrocio, un passaggio di colore arancione acceso
    a nord, un corridio colorato di viola,
    alle tue spalle, ovest, il corridio oscuro.
    
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Torni indietro per la via nera, direzione ovest", next: '', },
    { frase: "Sud, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Nord percorrendo la via viola", next: 'versoIncrocio', }
  ]
}