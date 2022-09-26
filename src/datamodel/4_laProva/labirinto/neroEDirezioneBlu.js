export default {
  "titolo": "ultima prova",
  "frase": `
    Il nero assorbe quasi totalmente la fiamma della torcia che illumina al massimo un paio di metri davanti a te;
    prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    La via gira bruscamente ad angolo verso sud con un corridoio blu intenso.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sud percorso blu intenso", next: 'bluSDirezioneBianco' },
    { frase: "Torni indietro per la via nera, direzione ovest", next: 'neroODirezioneArancione', },
  ]
}