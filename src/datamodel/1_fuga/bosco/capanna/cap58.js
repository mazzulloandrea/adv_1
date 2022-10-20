export default {
  step: 2,
  "titolo": "Il Bosco",
  "frase": `
    Raggiungi la capanna abbandonata consapevole che sarà questo il luogo dove passerai questa notte.

    Ti sistemi alla meglio e cerchi di resistere al freddo finchè puoi ma, alla fine, la stanchezza vince e ti addormenti.

    Vieni svegliato da un grosso scossone: tuo fratellastro Denred insieme ad un soldato ti hanno trovato; lui li sta aiutando e questa è l'ennesima dimostrazione di quanto sia crudele.

    Ti prendono e ti portano nel villaggio dove, su di un carretto, ci sono già tua sorella ed altri quattro ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena "Pantelion perchè non mi hai ascoltato?".
    Nella notte, tra le lamentele ed i pianti delle madri, 
    il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale"
    e che tra un anno, finito l'addestramento, ritornerete a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,
  "audio": {
    "src": "/assets/audio/cap57.mp3", // todo cambiare audio
    "interrompe": ""
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