export default {
  "titolo": "Calmo",
  "frase": `
  Ve ne state tutti tranquilli seguendo le indicazioni dei soldati che vi legano nuovamente le caviglie ma vi liberano i polsi.
  Viene preparata della zuppa calda e vi dicono di mangiare in fretta che tra poco si riparte; questi non sono luoghi sicuri in sui sostare.

  Tra di voi quello che al momento se la sta passando peggio è Alexis:
  si vede chiaramente che sta male e che ha bisogno di cure e di riposo; 
  in tutta risposta alcuni soldati scommettono 2 "Lune di Blick" che non supererà i 2 giorni che vi separano dall'accampamento.

  Un soldato maneggia il viso di Alexis piantodogli i polpastrelli sulle guange e ruotando il volto a destra e a sinistra; 
  il malato apre lentamente gli occhi come in una spece di trance e borbotta qualcosa; 
  
  immediatamente scoppia una risata fragorosa tra le guardie...
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Se vuoi chiedere che cavolo hanno da ridere?", gioco: "dice" },
    { frase: "Se vuoi scoprire come sta Alexis", next: "comeStaAlexis" }, // to do -> porta a scommessa se hai 2 monete
    { frase: "Se non fai nulla", next: "calmo2" },
  ],
  dice: {
    successo: 'discussioneConSoldati',
    fallimento: 'discussioneConSoldati2',
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}