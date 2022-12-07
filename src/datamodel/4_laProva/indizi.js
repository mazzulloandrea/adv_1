export default {
  titolo: "ultima prova",
  frase: `
    Sopra ogni ingresso ci sono dei disegni abbastanza criptici ma secondo te indicano qualcosa di preciso.

    A sinistra c'è disegnato un toro, al centro un disegno di un ingranaggio, a destra c'è disegnato un curatore
  `,

  audio: {
    src: "/assets/audio/indizi.mp3",
  },
  risposte: [
    {
      frase: "Vai a sinistra, toro",
      next: "proseguiPercorso",
      abilita: "corpo",
    },
    {
      frase: "Vai a destra, curatore",
      next: "proseguiPercorso",
      abilita: "spirito",
    },
    {
      frase: "Vai al centro, ingranaggio",
      next: "proseguiPercorso",
      abilita: "mente",
    },
  ],
};
