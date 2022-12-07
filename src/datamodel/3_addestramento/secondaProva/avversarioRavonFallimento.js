export default {
  titolo: "prima prova",
  frase: `
    Quando scegli il generale, tutti i soldati si mettono a ridere prendendoti in giro.
    Tra di loro si fa avanti una guardia che hai già visto in precedenza, si chiama Darius: <<É me che dovrai battere>>.
    Il generale comunica che le sfide possono avere inizio.
  `,

  audio: {
    src: "/assets/audio/avversarioRavonFallimento.mp3",
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
