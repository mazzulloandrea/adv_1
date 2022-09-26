
export default {
  "titolo": "Il Bosco",
  "frase": `
    Finalmente la bestia si allontana e quando hai modo di riprenderti ti accorgi che Aaron è scappato per la paura.
    Raggiungi da solo la capanna abbandonata consapevole che sarà questo il luogo dove passerai questa notte.

    Ti sistemi alla meglio e cerchi di resistere al freddo finchè puoi 
    ma alla fine la stanchezza vince e ti addormenti.

    Vieni svegliato da un grosso scossone: tuo fratellastro Denred insieme ad un soldato ti hanno trovato.

    ---- audio del cap7----
  `, // todo
  "audio": {
    "src": "/assets/audio/cap57.mp3",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Preferisci parlare con Carcadena?",
      "gioco": "audio",
      "next": "Carcadena1"
    },
    {
      "frase": "Preferisci parlare con qualcun altro delle reclute",
      "gioco": "audio",
      "next": "parlareAltri"
    },
  ]
}