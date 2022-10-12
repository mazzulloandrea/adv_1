export default {
  "titolo": "Calmo 2",
  "frase": `
    Si riparte immediatamente.

    Un altro giorno di viaggio, tra le buche ed i sentieri acciottolati dei colli "sparsi".
    Un altro giorno legati come delle bestie, ti fai forza, non dovrebbe mancare molto...

    Dopo poco tempo, tornano di corsa 3 soldati; Essertag è caduto in una scarpata, e ha sbattuto la testa morendo sul colpo.
    Una sciocca risatina, accompagnata da alcune battute sulla morte ragazzo, rendono ancora più triste il viaggio.

    Gudrum era un suo grande amico, il suo sguardo è segnato dalle lacrime per gran parte del giorno.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  "gioco": "gioco9",
  gioco9: {
    successo: "uccisoDaiSoldati",
    fallimento: "arrivo",
    livello: 2,
    type: "memory",
    combinazione: ["teschio", "fantasma", "teschio", "spada"],
    dataset: "combat",
  }
}