export default {
  titolo: "Nel grano",
  frase: `
    Il tempo passa ed il senso di ansia e paura salgono; inizi a camminare a zonzo
    quando ti accorgi improvvisamente che il campo è in fiamme.
    Devi immediatamente scappare dal muro di fuoco davanti a te prima di morire bruciato
  `,
  audio: {
    src: "/assets/audio/cap17.mp3",
  },
  risposte: [
    {
      frase: "Vai a destra",
      gioco: "audio",
      next: "cap26"
    },
    {
      frase: "Vai a sinistra",
      gioco: "audio",
      next: "cap20"
    },
    {
      frase: "Torni indietro",
      gioco: "audio",
      next: "cap13"
    },
  ]
}