export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio viola prosegue fino ad un incrocio a quattro vie di cui una è la tua:

    a nord c'è l'ingresso del labirinto dal quale sei entrato,
    a sud la strada dalla quale arrivi,
    ad est un corridodio nero,
    a ovest una via arancione.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est (nero)", next: 'neroEDirezioneBlu' },
    { frase: "Ovest (arancione)", next: 'arancioneODirezioneBianco', },
    { frase: "Sud (viola) verso l'incrocio centrale", next: 'versoIncrocio', },
  ]
}