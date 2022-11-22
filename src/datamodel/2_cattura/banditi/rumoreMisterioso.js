export default {
  titolo: "rumore misterioso",
  frase: `
  Camminando per i "colli sparsi" ti imbatti in una zona leggermente più verdeggiante, sul lato di una collina.

  Attirato da una pianta dalle strane foglie, noti alcune piccole orme... 
  sono circa una decina e mentre le segui con lo sguardo senti uno strano suono provenire poco più avanti.
  `,

  audio: {
    src: "/assets/audio/rumoreMisterioso.mp3",
  },
  risposte: [
    { frase: "Segui le orme ed il suono", next: "trappolaBanditi" },
    { frase: "Ti allontani tornado indietro", next: "tornareIndietro" },
    { frase: "Resti in attesa", next: "animaliPericolosi" },
  ],
};
