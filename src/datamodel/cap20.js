export default {
  "titolo": "Nel grano",
  "frase": `
    Le fiamme divampano velocemente; devi scappare prima di rimanere intrappolato.
    Uscendo dal campo ti ritrovi a pochi passi un soldato che grida la tua presenza; subito viene circodanto da 
    un altro soldato e da tuo fratello Denred.
    Quel bastardo li sta aiutando.
      
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
    "src": "/assets/audio/cap20.mp3",
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Preferisci parlare con qualcuno",
      //-> "silenzio è notte"
      "gioco": "audio",
      "next": "cap102"
    },
    {
      "frase": "Preferisci cercare di liberarti",
      // -> "cosa cerchi di fare ragazzo e poi dove vorresti andare di notte, non lo sai che la firesta è pericolosa per un giovane tutto solo e debole come te ahahah"
      "gioco": "audio",
      "next": "cap103"
    },
  ]
}