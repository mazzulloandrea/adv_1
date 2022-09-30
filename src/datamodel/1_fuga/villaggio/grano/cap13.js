export default {
  "titolo": "Scappare",
  "frase": `
    Correndo a più non posso arrivi all'ultimo crocevia prima del bosco che sta in fondo, davanti a te;
    capisci che sarà una notte abbastanza fredda.
    Sai che alla tua sinistra c'è la falegnameria e alla tua destra la stalla.
  `,
  "audio": {
    "src": "/assets/audio/cap13.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Alla falegnameria troverai attrezzi utili",
      "next": "cap30",
    },
    {
      "frase": "Alla stalla puoi trovare acqua e provviste",
      "next": "cap40"
    },
    {
      "frase": "Meglio non perdere tempo ed andare nel bosco",
      "next": "cap50"
    }
  ],
}