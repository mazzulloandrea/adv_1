export default {
  titolo: "prima prova",
  frase: `
    Tutti e quindici i soldati disegnano un cerchio sul terreno, ampio circa 5 metri, con voi nove reclute all'interno; nel mentre le parole di Ravon sono chiare: 
    <<Al suono del tamburo inizierà uno scontro tutti contro tutti senza regole.
    Chi esce dal cerchio è eliminato.
    Chi si arrende è eliminato.>>

    Nessuno si apettava una cosa simile e mentre ti guardi attorno per capire come comportarti, senti l'alcool del vino che inizia a farti girare la testa.
  `,

  audio: {
    src: "/assets/audio/primaProva.mp3",
  },
  gioco: "dice",
  dice: {
    successo: "sobrio",
    fallimento: "ubriaco",
    obiettivo: 11, // numero da raggiungere con il lancio dei dadi
    abilita: ["mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
