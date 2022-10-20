export default {
  "titolo": "ultima prova",
  "frase": `
    Il nero assorbe, quasi totalmente, la fiamma della torcia; prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    **cornice**
    Giungi ad un incrocio a quattro vie:
    a destra, una rientanza con una porta metallica che chiude il passaggio,
    avanti, oltre l'incrocio, un passaggio di colore arancione acceso,
    a sinistra, un corridio colorato di viola,
    alle tue spalle, il corridio oscuro.
    
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Avanti verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Torni indietro per la via nera", next: 'neroODirezioneBlu', },
    { frase: "Destra, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Sinistra percorrendo la via viola", next: 'versoIncrocio', }
  ]
}