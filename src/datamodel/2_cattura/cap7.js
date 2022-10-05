export default {
  "titolo": "Cattura",
  "frase": `
    Ti dirigi verso tua sorella e, svoltato l'angolo, ti ritrovi davanti Denred con 2 soldati "Eccolo è lui".
    Tuo fratellastro sta aiutando i soldati e questa è l'ennesima dimostrazione di quanto sia crudele.
    "Al vecchio ci penso io, organizzerò un bel funerale ahahhaha ahhaha"
    
    I soldati ti legano portandoti su di un carretto, dove ci sono già tua sorella ed altri 4 ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena "Pantelion perchè non mi hai ascoltato?".
    Nella notte, tra le lamentele ed i pianti delle madri, 
    il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale"
    e che tra 1 anno, finito l'addestramente, ritorneremo a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3",
  },
  "risposte": [
    {
      "frase": "Preferisci parlare con Carcadena?",
      "gioco": "audio",
      "next": "sorella1"
    },
    {
      "frase": "Preferisci parlare con qualcun altro delle reclute",
      "gioco": "audio",
      "next": "parlareAltri"
    },
  ]
}