export default {
  "titolo": "riparo",
  "frase": `
    Eviti il colpo ed infliggi una pesante ferita al tuo avversario che cade in ginocchio.

    Darius digrigna qualcosa tra i denti e sputa sangue; 
    non gli hai inflitto un colpo mortale ma sicuramente debilitante. 

    Hai vinto finalmente ma il tuo nemico farfuglia qualcosa che attira la tua attenzione; 
    dice che una sfida finisce con la morte di uno dei due contendenti esattamente 
    come la sfida che Essertag ha voluto intraprendere con lui.

    Spalanchi gli occhi a quelle parole e non sai bene come farla pagare a Darius per quello che ha fatto.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi uccidere Darius", next: "uccidereDarius" },
    { frase: "Vuoi lasciarlo li ed uscire dal quadrato", next: "vittoriaNonSanguinante" },
    { frase: "Vuoi lasciare sul tuo nemico un ricordo", next: "amputareDarius" }
  ]
}