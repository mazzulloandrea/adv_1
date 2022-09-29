export default {
  "titolo": "Nel grano",
  "frase": `
    Ti nascondi tra le alte spighe, facendo attenzione che non fare troppo rumore.
    I bastoni sono alti circa due metri e sono un perfetto nascondiglio se riesci a non muoverli.
  `,
  "audio": {
    "src": "/assets/audio/cap10.mp3", // todo -> cambiare audio con le nuove scritte
    "interrompe": ""
  },
  "risposte": [
    {
      "frase": "Se vuoi andare verso i soldati per scoprire di più",
      "next": "cap11"
    },
    {
      "frase": "Preferisci restare fermo in silenzio",
      "next": "cap12"
    },
    {
      "frase": "Preferisci allontanarti",
      "next": "cap13"
    },

  ]
}