export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio prosegue fino ad un bivio molto grande con quattro diramazioni.
    Al centro dell'incrocio una colonna, colorata di un giallo così intenso, che sembra quasi illuminare l'area.
    Una piccola rosa dei venti indica nuovamente le direzioni: nord e sud percosi viola mentre est e ovest vie rosse.

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