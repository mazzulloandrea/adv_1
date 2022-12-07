export default {
  titolo: "ultima prova",
  frase: `
    Scendi la scala a pioli per circa una ventina di gradini, saranno tre o quattro metri di profondità e, mentre stai per arrivare in fondo, con un tonfo la botola sopra di te si chiude.

    Prosegui nello stretto corridoio di terra e roccia per pochi passi, fino ad arrivare in una stanza più grande, dove ci sono tre strade: una a sinistra, una al centro, ed una a destra.
  `,

  audio: {
    src: "/assets/audio/scale.mp3",
  },
  risposte: [
    { frase: "Vai a sinistra", next: "proseguiPercorso", abilita: "corpo" },
    { frase: "Vai a destra", next: "proseguiPercorso", abilita: "spirito" },
    { frase: "Vai al centro", next: "proseguiPercorso", abilita: "mente" },
    { frase: "Esamini per capire se ci sono indizi", gioco: "text" },
  ],
  text: {
    successo: "indizi",
    fallimento: "indiziNo",
    durata: "15",
    domande: [
      "Come si chiama il Generale?",
      "Di quante guardie conosci il nome?",
      "Come si chiama la guardia con la lingua amputata?",
      "Come si chiama la guardia che hai affrontato nella seconda prova?",
    ],
    risposte: [["ravon"], ["2", "due"], ["orius"], ["darius"]],
  },
};
