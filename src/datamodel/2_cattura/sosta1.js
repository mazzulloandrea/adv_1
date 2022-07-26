export default {
  titolo: "Carcadena",
  frase: `
    I soldati iniziano a prepararsi per una sosta.
    Vi fanno scendere dal carretto, vi slegano le caviglie borbottando qualcosa sul non fare cazzate.

    Mentre ti guardi in giro, per allentare i morsi della fame, si scatena il caos.
    Essertag ne approfitta per scappare a più non posso; <<Prendetelo!>>, <<Fermati canaglia!>>, tre soldati vanno all'inseguimento.
    
    Gli altri quattro vi raggruppano, vi accerchiano con le armi in mano, per controllare ogni altra possibile evasione.
  `,

  audio: {
    src: "/assets/audio/sosta1.mp3",
  },
  risposte: [
    { frase: "Ne vuoi approfittare per scappare", gioco: "text" },
    { frase: "Te ne stai buono e calmo", next: "calmo" },
  ],
  text: {
    successo: "scappi",
    fallimento: "nonScappi",
    durata: "20",
    domande: [
      "Quati soldati ti stanno circondando?",
      "Quanto soldati sono corsi via?",
      "Chi è che è scappato?",
      "Perchè la carovana si è fermata?",
      "In che luogo vi siete fermati?",
    ],
    risposte: [
      ["4", "quattro"],
      ["3", "tre"],
      ["essertag", "esserta"],
      ["sosta", "mangiare", "riposo", "riposare", "pasto"],
      ["colli", "sparsi", "colline"],
    ],
  },
};
