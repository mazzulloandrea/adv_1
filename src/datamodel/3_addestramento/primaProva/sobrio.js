export default {
  titolo: "prima prova",
  frase: `
    La testa gira ma, a tratti, riesci a controllarti quel che basta per accorgerti che un ragazzo sta spingendo fuori dal cerchio alcuni avversari.
    
    Qualcuno si avventa su di te dandoti un fortissimo colpo sulla schiema che ti fa andare a terra; mentre sei in ginocchio, il tuo avversario ti salta addosso dandoti un secondo colpo.
    Ti volti e vedi la ragazza che ti ha colpito; fa parte delle altre reclute, e ha tutta l'intenzione di batterti.

    Sta caricando un calcio e sei pronto a rispondere.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
    interrompe: "",
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