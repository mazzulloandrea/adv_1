export default {
  titolo: "animali pericolosi",
  frase: `
    Da un cespuglio davanti a te esce fuori una piccola gallina selvaggia che, con circospezione, si muove lentamente.
  `,
  audio: {
    src: "/assets/audio/animaliPericolosi.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "pirolisco",
    fallimento: "animaleSconosciuto",
    obiettivo: 6, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente"], // quelle che non si devono usare devono essere escluse
    lanci: 2, // quanti lanci col dado
  },
};
