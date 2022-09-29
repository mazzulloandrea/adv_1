export default {
  "titolo": "ultima prova",
  "frase": `
    Senti un rumore metallico ed il portone metallico si apre lentamente.
    Ce l'hai fatta!!
    
    Davanti a corridoio abbastanza lungo che prosegue in una grotta sotterranea con una pozza d'acqua sempre più profonda.
    Al centro della grotta c'è un grosso raggio di luce che si riflette sull'acqua: sei totto al pozzo.

    Cercando di camminare sul perimetro della stanza cerchi di capire qual'è la strategia migliore per raggiungere la corda calata al centro di quell'occhio luminoso.
    
    Non sai di preciso quanto sarà profondo il lago sotterraneo ma sicuramente dovrai nuotare.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Nuoti fino alla corda", next: 'nuotare' },
    { frase: "Esamini intorno cercando alternative", next: 'cercareAlternative' }
  ]
}   