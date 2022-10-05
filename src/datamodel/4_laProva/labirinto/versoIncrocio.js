export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio prosegue fino ad un incrocio molto grande con quattro vie;
    al centro dell'incrocio una colonna, colorata di un giallo così intenso, che sembra quasi illuminare l'incrocio.
    
    A nord e sud percosi viola mentre est e ovest vie rosse.

    Che via prendi?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est (rosso)", next: 'rossoE' },
    { frase: "Ovest (rosso)", next: 'rossoO', },
    { frase: "Nord (viola)", next: 'violaN', },
    { frase: "Sud (viola)", next: 'violaS', },
  ]
}