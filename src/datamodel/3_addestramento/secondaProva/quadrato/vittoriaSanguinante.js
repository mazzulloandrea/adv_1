export default {
  titolo: "vittoria seconda prova",
  frase: `
    Ti trascini fuori dal quadrato e vieni soccorso da alcune guardie che ti prestano le prime cure.
    Dopo poco si scopre che Darius è morto; la notizia viene commentata come qualcosa che inevitabilmente, prima o poi, sarebbe accaduto; quel bastardo avrebbe trovato qualcuno che gliel'avrebbe fatta pagare.

    Vieni a scoprire che Darius, tra i tanti orrori commessi, aveva anche tagliato le due dita a Denred; ora finalmente è stato sconfitto.
  `,
  audio: {
    src: "/assets/audio/vittoriaSanguinante.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "capitolo4",
      icon: "corpo",
      vittoria2: true,
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "capitolo4",
      icon: "mente",
      vittoria2: true,
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "capitolo4",
      icon: "spirito",
      vittoria2: true,
    },
  ],
};
