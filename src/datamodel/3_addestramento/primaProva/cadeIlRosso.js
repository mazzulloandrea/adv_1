export default {
  titolo: "prima prova",
  frase: `
    Con un'abile mossa, riesci a far perdere l'equilibrio al tuo avversario che cade per terra e finisce parzialmente fuori dal perimetro.
    Si rialza e continua a combattere; mentre le guardie gridano che è stato eliminato, fa in tempo a tirarti un cazzotto che ti manda ko.

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