export default {
  "titolo": "Nel grano",
  "frase": `
    Correndo a più non posso arrivi all'ultimo crocevia prima del bosco;
    consapevole che sarà una notte abbastanza fredda vedi
    alla tua sinistra la falegnameria 
    alla tua destra la stalla e
    davanti in fondo il bosco
  `,
  "audio": {
    "src": "/assets/audio/cap13.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Alla falegnameria troverai qualcosa la notte",
      "gioco": "30",
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