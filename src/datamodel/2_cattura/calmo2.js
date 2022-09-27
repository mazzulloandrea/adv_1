export default {
  "titolo": "Calmo 2",
  "frase": `
    Si riparte immediatamente.

    Un altro giorno di viaggio tra le buche ed i sentieri acciottolati dei colli "sparsi"
    Un altro giorno legati come delle bestie, ti fai forza non dovrebbe mancare molto...

    Dopo poco tempo tornano di corsa 3 soldati, dicono che Essertag 
    è caduto in una scarpata e che ha sbattuto la testa morendo sul colpo.

    Gudrum era un suo grande amico ed il suo sguardo è segnato dalle lacrime.

    Una risatina accompagnata da alcune battute sulla debolezza del ragazzo e 
    dal destino che ha voluto che finisse così.

    I soldati sembrano proprio essere senza cuore...
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  "gioco": "gioco9",
  "gioco9": {
    successo: "uccisoDaiSoldati",
    fallimento: "arrivo",
    durata: "15",
    type: "memory",
    combinazione: ["teschio", "fantasma", "teschio", "spada"],
    dataset: "combat",
  }
}