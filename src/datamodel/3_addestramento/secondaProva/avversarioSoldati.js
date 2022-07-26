export default {
  titolo: "prima prova",
  frase: `
    Tra tutte le guardie, si fa avanti un soldato che hai già visto in precedenza, si chiama Darius: <<É me che dovrai battere>>.
    Il generale comunica che le sfide possono avere inizio.
  `,

  audio: {
    src: "/assets/audio/avversarioSoldati.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "inizioSecondaProva",
      icon: "corpo",
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "inizioSecondaProva",
      icon: "mente",
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "inizioSecondaProva",
      icon: "spirito",
    },
  ],
};
