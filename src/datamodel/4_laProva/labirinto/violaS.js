export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio viola prosegue fino ad un incrocio a quattro vie di cui una è la tua.
    Avanti una rientanza con una porta metallica che chiude il passaggio,
    ad sinistra un corridodio arancione,
    a Destra una via nera.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sinistra verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Torni indietro per la via viola", next: 'versoIncrocio', },
    { frase: "Avanti, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Destra percorrendo la via nera", next: 'neroODirezioneBlu', }
  ]
}