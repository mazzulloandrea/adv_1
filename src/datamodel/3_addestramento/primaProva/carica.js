export default {
  titolo: "prima prova",
  frase: `
    Carichi con la forza di un toro e spingi lontano il tuo avversario; il nemico finisce a pochi centimetri dalla linea di confine.
    Ti guarda con un'aria di sfida, tale da incutere paura anche ai più coraggiosi, ma tu resisti allo sguardo sapendo che i successivi secondi decreteranno il vincitore.

    Basta solo un ultimo sforzo per buttarlo fuori.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
    interrompe: "",
  },
  risposte: [
    { frase: 'Meglio usare la forza', gioco: 'dice' },
    { frase: "Meglio usare l'intelligenza", gioco: 'dice2' },
    { frase: "Meglio usare la tenacia", gioco: 'dice3' },
  ],
  dice: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 9, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  },
  dice2: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 8, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  },
  dice3: {
    successo: "vittoria",
    fallimento: "sconfitta5",
    obiettivo: 8, // numero da raggiungere con il lancio dei dadi
    abilita: ["spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 2 // quanti lanci col dado
  },
}