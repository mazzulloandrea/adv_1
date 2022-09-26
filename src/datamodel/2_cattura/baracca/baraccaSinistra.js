export default {
  "titolo": "Impronte stivali",
  "frase": `
    Passi lateralmente cercando di rimanere in silenzio e nascosto. 
    Ogni metro che ti avvicini alla struttura aumenta sempre più una puzza di escrementi incredibile che ti mette
    seriamente in difficoltà.

    Non sai se proseguire, fermarti o fare il giro dall'altra parte
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Prosegui", next: "prosegui" },
    { frase: "Fai il giro dall'altra parte", next: "baraccaDestra" },
  ],
}