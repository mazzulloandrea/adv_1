export default {
  "titolo": "prima prova",
  "frase": `
   Dei ragazzi di Murafredde la tua scelta può cadere solo su Giak o Frozia perchè Teela ha già fatto coppia con Carcadena e 
   Redro, avendo vinto la prima prova, farà coppia con il generale Ravon. 
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: "Scegli Giak, muscoloso dai capelli rossi ?", next: "compagnoGiak" },
    { frase: "Scegli Frozia, grassoccio tuttologo ?", next: "compagnoFrozia" }
  ]
}