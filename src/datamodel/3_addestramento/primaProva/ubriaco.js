export default {
  "titolo": "prima prova",
  "frase": `
    La testa ti gira così tanto che quasi non riesci a stare in piedi; 
    adesso è iniziata la lotta ti accorgi che lo spazio a disposizione dentro il cerchio non è poi molto.

    Cerchi di rimanere lucido e ti accorgi che, come te, anche altri stanno combattendo contro gli effetti dell'alcool.

    Un ragazzo che non conosci, invece, sta spingendo fuori dal cerchio alcuni avversari;
    qualcuno si avventa su di te dandoti un fortissimo colpo sulla schiema che ti fa andare a terra.
    Sei in ginocchio e il tuo avversario ti salta addosso dandoti un secondo colpo che per tua fortuna non è abbastanza preciso ne forte.
    
    Vedi il tuo avversario e capisci che fa parte delle altre reclute che già erano qui al campo; è una ragazzina molto giovane più esile di te ma con uno sguardo deciso; ha tutta l'intenzione di batterti.

    Sta caricando un calcio e sei pronto a rispondere
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: 'Vuoi parare il colpo per poi farla cadere', gioco: 'dice' },
    { frase: 'Preferisci schivare di lato per poi attaccare', gioco: 'gioco9' }
  ],
  dice: {
    successo: "parato",
    fallimento: "colpito",
    obiettivo: 11, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
  gioco9: {
    successo: "schivato",
    fallimento: "colpito",
    durata: "25",
    combinazione: "schivare",
    type: "domanda",
    domanda: "Sinonimo di 'evadere il colpo'"
  }
}