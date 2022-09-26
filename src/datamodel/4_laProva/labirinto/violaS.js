export default {
  "titolo": "ultima prova",
  "frase": `
    Il corridoio viola prosegue fino ad un incrocio a quattro vie di cui una è la tua:

    a nord la strada dalla quale arrivi,
    a sud un piccolo corridoio con immediatamente una porta metallica,
    ad est un corridodio arancione,
    a ovest una via nera.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Torni indietro per la via viola, nord", next: 'versoIncrocio', },
    { frase: "Sud, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Ovest percorrendo la via nera", next: 'neroODirezioneBlu', }
  ]
}