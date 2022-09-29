export default {
  "titolo": "ultima prova",
  "frase": `
    Ti butti nell'acqua gelida lasciando che la torcia si spenga; 
    il freddo punge la tua pelle come mille aghi e sveglia la tua mente come poche altre volte.

    Sei quasi arrivato ma quando sei a poche bracciate c'è qualcosa che ti fa paralizzare dalla paura:
    un serpente acquatico sta nuotando nella tua direzione.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Cerchi di raggiungere la corda", gioco: 'dice' },
    { frase: "Torni a riva", gioco: 'dice2' },
    { frase: "Provi a capire che intenzioni ha", gioco: "dice3" },
    { frase: "Resti immobile", next: 'serpenteAttacca' },
  ],
  dice: {
    successo: 'cordaRaggiunta',
    fallimento: 'serpenteAttacca',
    obiettivo: 17, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4 // quanti lanci col dado
  },
  dice2: {
    successo: 'serpenteAttacca',
    fallimento: 'serpenteAttacca',
    obiettivo: 20, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4 // quanti lanci col dado
  },
  dice3: {
    successo: 'serpenteInnocuo',
    fallimento: 'serpenteAttacca',
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}   