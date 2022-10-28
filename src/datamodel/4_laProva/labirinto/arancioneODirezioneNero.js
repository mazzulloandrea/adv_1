export default {
  titolo: "ultima prova",
  frase: `
    L'arancione acceso sembra quasi ravvivare la fiamma.
    
    Giungi ad un incrocio a quattro vie:
    a sinistra una rientanza con una porta metallica che chiude il passaggio,
    avanti, oltre l'incrocio, un passaggio di colore nero,
    a destra, un corridio colorato di viola,
    alle tue spalle, il passaggio arancione.
    
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Indietro verso l'arancione", next: 'arancioneEDirezioneBianco' },
    { frase: "Avanti per la via nera", next: 'neroODirezioneBlu', },
    { frase: "Sinistra, verso la porta metallica", next: 'portaMetallica', },
    { frase: "Destra percorrendo la via viola", next: 'versoIncrocio', }
  ]
}