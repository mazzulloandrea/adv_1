export default {
  "titolo": "Cattura",
  "frase": `
    Gli animali anzichè calmarsi si agitano ed iniziano a fare troppo rumore.
    Immediatamente attirano la'ttenzione dei soldati e mentre provi a scappare verso il bosco ti si para davanti 
    tuo fratellastro Denred che ti afferra per il vestito "Preso"
    Il bastardo sta aiutando le guardie

    I soldati ti legano portandoti su di un carretto dove ci sono già tua sorella ed altri 
    4 ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena "Pantelion perchè non mi hai ascoltato?".
    Nella notte, tra le lamentele ed i pianti delle madri, 
    il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale"
    e che tra 1 anno, finito l'addestramente, ritorneremo a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,

  "audio": {
    "src": "/assets/audio/cap42.mp3",
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Preferisci parlare con Carcadena?",
      "gioco": "audio",
      "next": "carcadena1"
    },
    {
      "frase": "Preferisci parlare con qualcun altro delle reclute",
      "gioco": "audio",
      "next": "parlareAltri"
    },
  ]
}