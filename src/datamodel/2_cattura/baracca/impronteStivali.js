export default {
  "titolo": "Impronte stivali",
  "frase": `
    Segui le tracce ed arrivi nei pressi di una baracca apparentemente abbandonata ma non decrepita;
    delle rocce permettono di avvicinarsi con furtività senza passare per l'unica finestra visibile sull'altro lato.
    La struttura è un semplice parallelepipedo alto circa un metro e mezzo e profondo 3 metri 
    con una porta di legno con un grosso asse come fermo.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi avvicinarti lateralmente nascondendoti tra le rocce", gioco: "dice" },
    { frase: "Vuoi avvicinarti sull'altro lato per sbirciare dalla finestra", gioco: "text" },
    { frase: "Vuoi avvicinarti dalla porta principale ", gioco: "gioco9" },
    { frase: "torni sui tuoi passi", next: "tornareIndietro" }
  ],
  dice: {
    successo: "baraccaSinistra",
    fallimento: "baraccaSinistra",
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
  text: {
    successo: "baraccaDestra",
    fallimento: "baraccaDestra",
    durata: "15",
    domande: [
      "Le tracce erano di ?",
      "Come ti chiami ?",
    ],
    risposte: [
      [
        "persona", "stivali", "stivale", "umano", "umani", "umanoidi"
      ],
      [
        "Pantelion", "Phantelion", "Pantelio", "Phantelio"
      ],
    ]
  },
  "gioco9": {
    successo: "baraccaCentro",
    fallimento: "baraccaCentro",
    durata: "15",
    type: "memory",
    combinazione: ["aria", "fuoco", "sole", "luna"],
    dataset: "element",
  },

}