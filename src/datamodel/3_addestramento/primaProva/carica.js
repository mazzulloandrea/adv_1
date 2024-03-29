export default {
  titolo: "prima prova",
  frase: `
    Carichi con la forza di un toro e spingi lontano il tuo avversario; il nemico finisce a pochi centimetri dalla linea di confine.
    Ti guarda con un'aria di sfida, tale da incutere paura anche ai più coraggiosi, ma tu resisti allo sguardo sapendo che i successivi secondi decideranno il vincitore.

    Basta solo un ultimo sforzo per buttarlo fuori.
  `,

  audio: {
    src: "/assets/audio/carica.mp3",
  },
  risposte: [
    { frase: "Meglio usare la forza", gioco: "dice" },
    { frase: "Meglio usare l'intelligenza", gioco: "dice2" },
    { frase: "Meglio usare la tenacia", gioco: "dice3" },
  ],
  dice: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
  dice2: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 7, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
  dice3: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 6, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
