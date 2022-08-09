export default {
  "titolo": "Nel grano",
  "frase": `
    Cerchi di restare immobile e in silenzio per ascoltare tutti i rumori e capire meglio la situazione.
    Passano alcuni secondi che diventano minuti... la notte oramai si è impadronita del cielo...
    Ma quanto sarà passato?
  `,
  "audio": {
    "src": "/assets/audio/cap12.mp3",
    "interrompe": ""
  },
  "gioco": "dice",
  "dice": {
    "successo": "cap16",
    "fallimento": "cap17",
    "obiettivo": 8, // numero da raggiungere con il lancio dei dadi
    "abilita": ["mente", "spirito"], // quelle che non si devono usare devono essere escluse
    "lanci": 4 // quanti lanci col dado
  },
}