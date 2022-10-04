export default {
  "titolo": "La grotta",
  "frase": `
    Hai finalmente trovato la grotta.
    Hai sentito parlare di funghi fluorscenti e di pipistrelli feroci, non ti sei mai addentrato oltre che pochi metri, fin dove la luce illumina l'interno.
  `,
  "audio": {
    "src": "/assets/audio/cap61.mp3", // todo
    "interrompe": ""
  },
  risposte: [
    {
      frase: "Ti addentri nell'oscurità",
      next: "capGrotta1"
    },
    {
      frase: "Se hai una coperta e vuoi usarla per riposare",
      checkZaino: "coperta",
      next: "cap64"
    },
    {
      frase: "Resti sull'attenti all'ingresso",
      next: "cap65"
    }
  ]
}