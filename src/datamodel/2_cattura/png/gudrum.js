export default {
  "titolo": "Gudrum",
  "frase": `
    Gudrum si guarda attorno e manda cenni al suo amico più grande.
    Poi posa lo sguardo su di te e ti chiede di aiutarlo; 
    il piano consiste nel distrarre le guardie in modo che Essertag possa liberarsi.

    Gudrum inzia ad alzare volontariamente la voce nei tuoi confronti, vuole creare un po' di casino.
  `,

  "audio": {
    "src": "/assets/audio/carcadena.mp3", // todo
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Alzi anche tu la voce fingendo di litigare?",
      gioco: 'dice'
    },
    {
      "frase": "Lasci perdere",
      "next": "sosta1"
    },
  ],
  dice: {
    successo: "aiutatoEssertag",
    fallimento: "distrarreGuardia",
    obiettivo: 5, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  }
}