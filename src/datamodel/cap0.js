export default {
  "titolo": "Pantelion",
  "frase": "<<chop efx ...Bastardo! Ignobile! chop efx te la farò pagare ah si se te la farò pagare chop efx>> Ti chiami Pantelion, hai 14 anni e sei infuriato con tuo fratellastro maggiore Denred",
  "audio": {
    "src": "/assets/audio/cap0.m4a",
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Spacchi la legna pensando a Denred",
      "gioco": "shoot",
    }
  ],
  "shoot": {
    "successo": "cap01",
    "fallimento": "cap02",
    "durata": "10",
    "params": {
      "colpi": 1,
      "jolly": 1,
      "movimenti": 15,
      "shootCount": 3,
      "delayTime": 1000,
      "target": {
        "x1": 40,
        "x2": 80,
        "y1": 30,
        "y2": 60
      },
      "mirino": {
        "width": 15,
        "height": 15
      }
    }
  }
}