export default {
  "titolo": "ultima prova",
  "frase": `
    Il nero assorbe quasi totalmente la fiamma della torcia; prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    La via gira bruscamente ad angolo a destra con un corridoio blu intenso.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Destra percorso blu intenso", next: 'bluNDirezioneBianco' },
    { frase: "Torni indietro per la via nera", next: 'neroEDirezioneArancione', },
  ]
}