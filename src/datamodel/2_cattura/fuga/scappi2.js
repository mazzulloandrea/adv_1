export default {
  "titolo": "Scappi",
  "frase": `
    Con una giravolta ti liberi della presa della guardia, che cade a terra maledicendoti.
    Con tutta l'energia che hai in corpo corri allontanandoti più che puoi.
    Corri, corri e ancora corri senza voltarti, fintanto che il fiato te lo permette; superi piccoli dislivelli, pietre, arbusti e ti allontani dal sentiero fino a che il silenzio ti avvolge.

    Ti fermi prima che il cuore ti scoppi, ti guardi indietro e non vedi i soldati.
    Sai che non è finita, le tue tracce sono così fresche che è troppo facile seguirti.
    
    Ricominci a scappare cercando di lasciare meno segni possibili.
    **cornice**
    Ti allontani per una buona mezz'ora quando, ti accorgi di esserti perso; le colline "sparse" sono un luogo inesplorato e pericoloso, frequentato da banditi e animali selvaggi.

    Ti fermi un attimo guardandoti attorno per orientarti.

    Dopo una decina di minuti trovi delle impronte di stivali abbastanza fresche.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi seguire le impronte", next: "impronteStivali" },
    { frase: "Vai nella direzione opposta perchè non ti fidi", next: "rumoreMisterioso" },
    { frase: "Vuoi tornare indietro sui tuoi passi", next: "tornareIndietro" },
  ]
}