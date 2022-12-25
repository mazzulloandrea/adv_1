export default {
  titolo: "ultima prova",
  frase: `
    Ti butti nell'acqua gelida lasciando che la torcia si spenga; il freddo ti punge come mille aghi e sveglia la tua mente come poche altre volte.

    Sei quasi arrivato ma, quando mancano poche bracciate, c'è qualcosa che ti fa paralizzare dalla paura: un serpente acquatico sta nuotando nella tua direzione.

  `,
  audio: {
    src: "/assets/audio/nuotare.mp3",
  },
  risposte: [
    { frase: "Cerchi di raggiungere la corda", gioco: "dice" },
    { frase: "Torni a riva", gioco: "dice2" },
    { frase: "Provi a capire che intenzioni ha", gioco: "dice3" },
    { frase: "Resti immobile", next: "serpenteAttacca" },
  ],
  dice: {
    successo: "cordaRaggiunta",
    fallimento: "serpenteAttacca",
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
  dice2: {
    successo: "serpenteAttacca",
    fallimento: "serpenteAttacca",
    obiettivo: 19, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
  dice3: {
    successo: "serpenteInnocuo",
    fallimento: "serpenteAttacca",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
