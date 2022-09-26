export default {
  "titolo": "prima prova",
  "frase": `
    Mentre ti muovi, il terreno cede improsvvisamente facendoti cadere in una buca profondi quasi 2 metri.
    Oltre allo spavento c'è anche la delusione perchè sopra di te troneggia Darius che puntandoti la balestra 
    ti ordina di arrenderti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Ti arrendi', next: 'fineSecondaProva', },
    { frase: 'Mai arrendersi', next: "fineSecondaProvaMorte" },
  ],
}