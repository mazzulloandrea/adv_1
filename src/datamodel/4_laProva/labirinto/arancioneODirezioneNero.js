export default {
  titolo: "ultima prova",
  frase: `
    L'arancione acceso sembra quasi ravvivare la fiamma.
    Giungi ainfine d un incrocio a quattro vie: a sinistra una rientanza con una porta metallica che chiude il passaggio, avanti, oltre l'incrocio, un passaggio di colore nero, a destra, un corridio colorato di viola, alle tue spalle, invece, il passaggio arancione.
  `,

  audio: {
    src: "/assets/audio/arancioneODirezioneNero.mp3",
  },
  risposte: [
    { frase: "Indietro verso l'arancione", next: "arancioneEDirezioneBianco" },
    { frase: "Avanti per la via nera", next: "neroODirezioneBlu" },
    { frase: "Sinistra, verso la porta metallica", next: "portaMetallica" },
    { frase: "Destra percorrendo la via viola", next: "versoIncrocio" },
  ],
};
