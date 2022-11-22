export default {
  titolo: "Trappola banditi",
  frase: `
    Fai ancora qualche passo, spostando l'orecchio verso il suono, ma ti accorgi di una cosa che attira la tua attenzione.
    A terra, mezza coperta dal terriccio, c'è una moneta tutta rovinata.
  `,

  audio: {
    src: "/assets/audio/trappolaBanditi.mp3",
  },
  risposte: [
    { frase: "Raccogli la moneta", next: "trappolaBanditiMorte" },
    { frase: "Prosegui seguendo le impronte", next: "trappolaBanditi2" },
  ],
};
