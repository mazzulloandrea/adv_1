export default {
  titolo: "ultima prova",
  frase: `
    Il nero assorbe quasi totalmente la fiamma; prosegui lentamente con il cuore che batte pesantemente.
    I nervi sono tesissimi e sei pronto a scattare come un gatto alle prime avvisaglie di pericolo.
    La via gira bruscamente ad angolo verso destra con un corridoio blu intenso.
  `,

  audio: {
    src: "/assets/audio/neroEDirezioneBlu.mp3",
  },
  risposte: [
    { frase: "Destra sul percorso blu intenso", next: "bluSDirezioneBianco" },
    {
      frase: "Torni indietro per la via nera",
      next: "neroODirezioneArancione",
    },
  ],
};
