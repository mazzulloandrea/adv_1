export default {
  titolo: "ultima prova",
  frase: `
    Sopra ogni ingresso ci sono dei disegni abbastanza criptici ma secondo te indicano qualcosa di preciso:

    a sinistra c'è disegnato un toro,
    al centro c'è disegnato un ingranaggio,
    a destra c'è disegnato un curatore
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vai a sinistra, toro", next: 'proseguiPercorso', abilita: 'corpo' },
    { frase: "Vai a destra, curatore", next: 'proseguiPercorso', abilita: 'spirito' },
    { frase: "Vai al centro, ingranaggio", next: 'proseguiPercorso', abilita: 'mente' },
  ],
}