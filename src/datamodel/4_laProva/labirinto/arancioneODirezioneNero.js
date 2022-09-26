export default {
  "titolo": "ultima prova",
  "frase": `
    L'arancione acceso sembra quasi ravvivare la fiamma.
    
    Giungi ad un incrocio a quattro vie:
    a sud un picolissimo pertugio viola con una grande porta metallica che chiude il passaggio,
    a ovest, oltre l'incrocio, un passaggio di colore nero
    a nord, un corridio colorato di viola,
    alle tue spalle, est, il passaggio arancione.
    
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Est verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Ovest per la via nera, direzione ovest", next: 'neroODirezioneBlu', },
    { frase: "Sud, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Nord percorrendo la via viola", next: 'versoIncrocio', }
  ]
}