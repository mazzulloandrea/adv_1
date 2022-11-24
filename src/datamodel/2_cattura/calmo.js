export default {
  titolo: "Calmo",
  frase: `
      Ve ne state tutti tranquilli, seguendo le indicazioni dei soldati che vi legano nuovamente le caviglie ma vi liberano i polsi.
      Viene preparata della zuppa calda; vi dicono di mangiare in fretta che tra poco si riparte: <<Questi non sono luoghi sicuri in sui sostare>>.
      **cornice**
      Tra di voi quello che al momento se la sta passando peggio è Alexis.
      Si vede chiaramente che sta male e ha bisogno di cure e di riposo.
      Alcuni soldati scommettono 2 "Lune di Blick" che non supererà i 2 giorni che vi separano dall'accampamento.
      **cornice**
      Un soldato maneggia il viso di Alexis piantodogli i polpastrelli sulle guance e ruotando il volto a destra e a sinistra.
      Il malato apre lentamente gli occhi come in una spece di trance e borbotta qualcosa...
      immediatamente le guardie scoppiano in una risata fragorosa.
  `,

  audio: {
    src: "/assets/audio/calmo.mp3",
  },
  risposte: [
    { frase: "Se vuoi chiedere che cavolo hanno da ridere?", gioco: "dice" },
    { frase: "Se vuoi scoprire come sta Alexis", next: "comeStaAlexis" }, // TODO -> porta a scommessa se hai 2 monete
    { frase: "Se non fai nulla", next: "calmo2" },
  ],
  dice: {
    successo: "discussioneConSoldati",
    fallimento: "discussioneConSoldati2",
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2, // quanti lanci col dado
  },
};
