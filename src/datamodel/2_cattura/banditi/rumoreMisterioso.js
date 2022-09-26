export default {
  "titolo": "rumore misterioso",
  "frase": `
    Camminando per le colline sparse ti imbatti in una zona leggermente più verdeggiante, sul lato di una collina; 
    piccoli arbusti e qualche pianta colorano di verde il rosso terriccio coperto di pietre.

    Attirato da una pietra affilata ti accorgi di alcune piccole impronte... 
    sono una decina e mentre le segui con lo sguardo senti uno strano suono provenire da poco più avanti
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Segui le orme ed il suono", next: "trappolaBanditi" },
    { frase: "Ti allontani tornado indietro", next: "tornareIndietro" },
    { frase: "Resti in attesa", next: "animaliPericolosi" },
  ]
}