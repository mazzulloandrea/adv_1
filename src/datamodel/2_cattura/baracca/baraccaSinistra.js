export default {
  titolo: "Impronte stivali",
  frase: `
    Passi lateralmente cercando di rimanere in silenzio e nascosto. 
    Ogni metro che ti avvicini alla struttura, aumenta sempre più la puzza di escrementi.

    Non sai se proseguire o fare il giro dall'altra parte
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Prosegui", next: "prosegui" },
    { frase: "Fai il giro dall'altra parte", next: "baraccaDestra" },
  ],
}