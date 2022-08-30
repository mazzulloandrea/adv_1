export default {
  "titolo": "La grotta",
  "frase": `
    Il buio è così completo che è tutto nero.
    A tastoni avanzi seguendo il rumore di alcune gocce d'acqua cadenti fino a che un leggerissimo bagliore illumina una piccola stanza.
    Alcuni bellissimi funghi violacei emanano una leggerissima fluorescenza che ti permette di vedere qualcosa: 
    un rigagnolo d'acqua che si perde tra le rocce, ossa e resti di qualche cadavere umanoide, una scalinata naturale di roccia che sale nell'oscurità.
  `,
  "audio": {
    "src": "/assets/audio/cap66.mp3", // todo
    "interrompe": ""
  },
  risposte: [
    {
      frase: "Esamini il rigagnolo d'acqua",
      next: "capGrotta2"
    },
    {
      frase: "Esamini i resti",
      next: "capGrotta3" // todo
    },
    {
      frase: "Sali sulla scalinata",
      next: "capGrotta4" // todo
    }
  ]
}