export default {
  titolo: "Trappola banditi morte",
  frase: `
    Fai qualche passo, seguendo le orme per terra, quando ti accorgi che sei finito in una trappola; a fianco dell'albero, vedi chiaramente una corda che finisce sotto terra e quindi immagini una specie rete sotterranea o qualcosa di simile.

    Solo la tua prontezza di riflessi può salvarti.
  `,

  audio: {
    src: "/assets/audio/trappolaBanditi2.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "scappiETorniIndietro",
    fallimento: "trappolaBanditiMorte2",
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
