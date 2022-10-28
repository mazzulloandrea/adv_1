export default {
  titolo: "prima prova",
  frase: `
    Con una energia che non ti aspettavi tieni testa ai muscoli del tuo avversario;
    riesci anche a rialzarti a far esplodere così tanta forza che lo spingi in parte fuori dal perimetro.
    con uno scatto si libera e mentre le guardie gridano che è stato eliminato 
    fa in tempo a tirarti un cazzotto che ti manda ko.

    Una secchiata d'acqua ti risveglia fuori dal perimetro, hai perso.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: 'Corpo',
      next: "finePrimaProva",
      icon: "corpo",
      abilita: "corpo"
    },
    {
      frase: 'Mente',
      next: "finePrimaProva",
      icon: "mente",
      abilita: "mente"
    },
    {
      frase: 'Spirito',
      next: "finePrimaProva",
      icon: "spirito",
      abilita: "spirito"
    },
  ],
}