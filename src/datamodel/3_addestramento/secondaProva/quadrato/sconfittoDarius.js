export default {
  titolo: "riparo",
  frase: `
    Eviti il colpo ed infliggi una pesante ferita al tuo avversario che cade in ginocchio.

    Darius digrigna qualcosa tra i denti e sputa sangue; gli hai inflitto un colpo quasi mortale. 

    Hai vinto!
    **cornice**
    Nonostante questo, il tuo nemico, a terra, farfuglia qualcosa che attira la tua attenzione:
    <<Una sfida finisce con la morte! Esattamente come è accaduto ad Essertag.
    Quel ragazzo se l'è cercata! Ahahah>>

    Spalanchi gli occhi a quelle parole... stai pensando a come farla pagare a Darius per quello che ha fatto.
  `,

  audio: {
    src: "/assets/audio/sconfittoDarius.mp3",
  },
  risposte: [
    { frase: "Vuoi uccidere Darius", next: "uccidereDarius", darius: true },
    {
      frase: "Vuoi lasciarlo li ed uscire dal quadrato",
      next: "vittoriaNonSanguinante",
    },
    {
      frase: "Vuoi lasciare sul tuo nemico un ricordo",
      next: "amputareDarius",
    },
  ],
};
