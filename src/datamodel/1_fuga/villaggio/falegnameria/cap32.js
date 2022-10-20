export default {
  step: 2,
  "titolo": "Falegnameria",
  "frase": `
    Esci di nascosto e facendo il giro largo ti dirigi verso la stalla.
    Svoltato l'angolo vai sbattere contro qualcosa.
    "Eccolo è qui" quel bastardo di tuo fratello sta aiutando i soldati .
    

    I soldati ti legano portandoti su di un carretto dove ci sono già tua sorella ed altri quattro ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena "Pantelion perchè non mi hai ascoltato?".
    Nella notte, tra le lamentele ed i pianti delle madri, il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale" e che, tra un anno, finito l'addestramento, ritornerete a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.

  `,
  "audio": {
    "src": "/assets/audio/cap32.mp3",
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