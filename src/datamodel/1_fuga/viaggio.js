export default {
  step: 2,
  titolo: "",
  frase: `
    Viaggi cercando tracce del passaggio dei soldati; vai avanti per qualche ora senza trovare nulla.
    Poi ti avvicini ad una grossa strada che porta verso i "colli sparsi" in direzione Berdask, qui trovi tracce fresche di escrementi di cavalli ed i segni delle ruote di quello che potrebbe essere un carretto.

    Cercando di rimanere nascosto, segui le tracce e dopo un'altra ora vedi in lontananza il gruppetto che stavi cercando.
    Provi ad avvicinarti per osservarli meglio e senti bruciare il ginocchio destro; Carcadena ti sta parlando mentalmente <<Ho bisogno della tua vicinanza>>.

    Convinto di fare la cosa giusta, ti avvicini al gruppetto ed immediatamente vieni preso dalle guardie che ti legano e ti mettono sul carro insieme agli altri.

    Carcadena ti sorride e appoggiando le mani sul tuo petto ti trasmette un calore incredibile.

  `,
  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "sosta1",
      icon: "corpo",
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "sosta1",
      icon: "mente",
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "sosta1",
      icon: "spirito"
    }
  ]
}