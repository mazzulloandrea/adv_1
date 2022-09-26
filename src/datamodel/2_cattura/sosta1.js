export default {
  "titolo": "Carcadena",
  "frase": `

    I soldati iniziano a prepararsi per una sosta.
    Vi fanno scendere dal carretto e vi slegano le caviglie borbottando qualcosa sul non fare cazzate.

    Mentre ti guardi in giro per allentare i morsi della fame si scatena il caos: 
    Essertag ne approfitta per scappare a più non posso ed al grido di "altolà" e "fermati bastardi" 3 soldati vanno all'inseguimento 
    mentre gli altri vi raggruppano preoccupati con le armi in mano.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Ne vuoi approfittare per scappare", next: "text" },
    { frase: "Te ne stai buono e calmo", next: "calmo" },
  ],
  text: {
    "successo": "scappi",
    "fallimento": "nonScappi",
    "durata": "20",
    "domande": [
      "Quati soldati ti stanno circondando?",
      "Quanto soldati sono corsi via?",
      "Chi è che è scappato?",
      "Perchè la carovana si è fermata?",
      "In che luogo vi siete fermati?"
    ],
    "risposte": [
      [
        "4"
      ],
      [
        "3"
      ],
      [
        "essertag",
        "esserta",
      ],
      [
        "sosta", "mangiare", "riposo"
      ],
      [
        "colli", "sparsi", "colline"
      ]
    ]
  }
}