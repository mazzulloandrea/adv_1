export default {
  titolo: "prima prova",
  frase: `
    La testa ti gira così tanto che quasi non riesci a stare in piedi.
    É iniziata una lotta furiosa e ti accorgi che lo spazio a disposizione dentro il cerchio non è poi molto.

    Cerchi di rimanere lucido e, come te, anche altri stanno combattendo contro gli effetti dell'alcool.
    **cornice**
    Un ragazzo che non conosci, invece, sta spingendo fuori dal cerchio alcuni avversari, quando si avventa su di te dandoti un fortissimo colpo sulla schiema che ti fa cadere a terra.
    Sei in ginocchio e il tuo avversario ti salta addosso dandoti un secondo colpo.
    
    Vedi il nemico che fa parte delle altre reclute che già erano qui al campo.
    É una ragazzina molto più giovane, più esile di te, con uno sguardo deciso e ha tutta l'intenzione di batterti.

    Sta caricando un calcio e sei pronto a rispondere.
  `,

  audio: {
    src: "/assets/audio/ubriaco.mp3",
  },
  risposte: [
    { frase: "Vuoi parare il colpo per poi farla cadere", gioco: "dice" },
    { frase: "Preferisci schivare di lato per poi attaccare", gioco: "gioco9" },
  ],
  dice: {
    successo: "parato",
    fallimento: "colpito",
    obiettivo: 10, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
  gioco9: {
    successo: "schivato",
    fallimento: "colpito",
    durata: "25",
    combinazione: "schivare",
    type: "domanda",
    domanda: "Sinonimo di 'evadere il colpo'",
  },
};
