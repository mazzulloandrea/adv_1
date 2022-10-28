export default {
  titolo: "Nel grano",
  frase: `
    Ti avvicini piano, cercando di non far rumore. 
    Arrivi quasi a ridosso dei soldati, puoi intravedere le fiaccole ed intuire cosa dicono.
    E' rischioso ma puoi provare ad avvicinarti ancora un po' per vedere e sentire meglio...
  `,
  audio: {
    src: "/assets/audio/cap11.mp3",
  },
  risposte: [
    {
      frase: "Vuoi avvicinarti in silenzio",
      gioco: "dice",
    },
    {
      frase: "E' troppo pericoloso meglio allontanarsi",
      gioco: "audio",
      next: "cap13"
    }
  ],
  dice: {
    successo: "cap14",
    fallimento: "cap24",
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 5 // quanti lanci col dado
  },
}