export default {
  "titolo": "Aaron",
  "frase": `
    Con le giuste parole rassicuri Aaron che ora appare più tranquillo.

    Sai bene in cuor tuo che deve reagire emotivamente al comportamento dei soldati che più lo vedranno debole maggiormente
    infieriranno.

    Con un sorriso ed un cenno del capo sembra aver capito qual'è lo spirito per affrontare il resto del viaggio.
    
  `,
  "audio": {
    "src": "/assets/audio/carcadena.mp3", // todo
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "sosta1",
      "icon": "corpo"
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "sosta1",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "vita",
      "next": "sosta1",
      "icon": "spirito"
    }
  ],
}