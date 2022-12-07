export default {
  titolo: "ultima prova",
  frase: `
    La porta metallica ha alcune scritte.
    Quello davanti a te è un enigma e sai che dovrai risolverlo se vorrai proseguire.
  `,

  audio: {
    src: "/assets/audio/portaMetallica.mp3",
  },
  risposte: [
    { frase: "Se vuoi risolvere l'enigma", next: "enigmaColori" },
    {
      frase: "Preferisci ritornare sui tuoi passi nel labirinto",
      next: "ritornoLabirinto",
    },
  ],
};
