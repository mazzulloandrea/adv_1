export default {
  titolo: "prima prova",
  frase: `
    Mentre ti muovi, il terreno cede improvvisamente facendoti cadere in una buca profonda quasi 2 metri.
    Oltre al dolore c'è anche la paura perchè sopra di te troneggia Darius; puntandoti la balestra ti ordina <<Arrenditi!>>.
  `,

  audio: {
    src: "/assets/audio/trappola.mp3",
  },
  risposte: [
    { frase: "Ti arrendi", next: "fineSecondaProva" },
    { frase: "Mai arrendersi", next: "fineSecondaProvaMorte" },
  ],
};
