export default {
  "titolo": "prima prova",
  "frase": `
    Corri velocemente verso il pozzo quando il terreno sotto i tuoi piedi viene a mancare;
    con uno scatto veloce ti sposti di lato schivando la caduta per pochi centimetri.
    
    Raggiungi il pozzo e non fai in tempo a guardarti attorno 
    che Darius ti piomba addosso spingendoti con un calcio verso gli alberi.

    Rotoli dietro un tronco e vedi il tuo avversario che sta caricando la balestra.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Se vuoi scappare", next: 'scappareDarius' },
    { frase: "Se vuoi arrenderti", next: "mortePerResa" },

    { frase: 'Estrai la spada e ti prepari a combattere', next: 'mischia2p', checkZaino: 'spada' },
    { frase: 'Estrai il bastone e ti prepari a combattere', next: 'mischia2p', checkZaino: 'bastone' },
    { frase: "Estrai l'ascia e ti prepari a combattere", next: 'mischia2p', checkZaino: 'ascia' },
    { frase: 'Estrai il martello e ti prepari a combattere', next: 'mischia2p', checkZaino: 'martello' },
    { frase: "Ti nascondi con il mantello", next: 'mantello2p', checkZaino: 'mantello' },
    { frase: "Ti prepari con lo scudo", next: 'scudo2p', checkZaino: 'scudo' },
    { frase: "Ti senti sicuro con la protezione dell'armatura", next: 'armatura2p', checkZaino: 'armatura' },
    { frase: "Incocchi una freccia sull'arco", next: 'distanza2p', checkZaino: 'arco' },
    { frase: "Carichi la balestra", next: 'distanza2p', checkZaino: 'balestra' },
    { frase: "Carichi la fionda", next: 'distanza2p', checkZaino: 'fionda' },
  ]
}