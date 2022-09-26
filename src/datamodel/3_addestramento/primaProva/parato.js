export default {
  "titolo": "prima prova",
  "frase": `
    Pari il colpo e subito afferri la gamba facendo cadere la ragazza;
    le salti addosso e la spingi con tutte le tue forze fuori dal cerchio.

    Siete rimasti in 3 nel cerchio: tu, Gudrum ed un ragazzo dai capelli neri con un visibile graffio sanguinante sulla fronte.

    Vi intima di arrendervi o sarà peggio per voi; 

    Gudrum in tutta risposta corri come impazzito gridando contro l'avversario che sfida il tuo amico invitandolo ad attaccare.

    I soldati incitando allo scontro battendo le armi e facendo echeggiare un fragoroso rumore metallico misco a grida.

    Gudrum viene scaRavontato a terra con una specie di mossa di lotta, gridando dal dolore "mi arrendo" sembra essersi rotto un braccio.

    Lo sfidante ti guarda e ti indica: ora rimanete solamente in 2 nel cerchio a lottare per la vittoria.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
    "interrompe": "",
  },
  risposte: [
    { frase: 'Vuoi caricare come Gudrum?', gioco: 'dice' },
    { frase: 'Preferisci aspettare che si avvicini?', gioco: 'gioco9' },
    { frase: "Preferisci parlargli per distrarlo e poi attaccarlo di sorpresa?", gioco: 'text' },
    { frase: 'Decidi di arrenderti ?', next: 'resa' }
  ],
  dice: {
    successo: "carica",
    fallimento: "sconfitta2",
    obiettivo: 22, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  },
  gioco9: {
    successo: "attesa",
    fallimento: "sconfitta3",
    durata: "15",
    type: "memory",
    combinazione: ["acqua", "aria", "elettricita", "fuoco", "ghiaccio"],
    dataset: "element",
  },
  text: {
    successo: "terra",
    fallimento: "sconfitta4",
    durata: "15",
    domande: [
      "Quante reclute sono state sconfitte?",
      "Di colori sono i capelli dell'avversario",
      "Quanti sono in totale i soldati",
      "Come si chiama il generale?"
    ],
    risposte: [
      ["7", "sette"],
      ["neri", "scuri", "nero", "scuro"],
      ["15", "quindici"],
      ["ravon"],
    ]
  }
}