export default {
  "titolo": "ultima prova",
  "frase": `
    Senti un rumore metallico ed il portone di ferro si apre lentamente.
    Ce l'hai fatta!!
    
    Presegui per il corridodio fino ad arrivare in una caverna; il terreno lascia spazio all'acqua sempre più profonda.
    Al centro della grotta c'è un grosso raggio di luce che si riflette sull'acqua: ti trovi in una antro sotto il pozzo.
    **cornice**
    Cammini sul perimetro cercando di capire qual'è la strategia migliore per raggiungere la corda calata, al centro di quell'occhio luminoso.
    
    Non sai di preciso quanto sarà profondo il lago sotterraneo ma quasi sicuramente dovrai nuotare.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Nuoti fino alla corda", next: 'nuotare' },
    { frase: "Esamini intorno cercando alternative", next: 'cercareAlternative' }
  ]
}   