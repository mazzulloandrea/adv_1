export default {
  titolo: "Falegnameria",
  frase: `
    La mano del soldato passa a pochi centimetri da te... 
    "Qui non c'è! Sarà scappato nella stalla!"
    con gran rumore esce dalla porta principale e ti lascia solo nell'oscurità
  `,
  audio: {
    src: "/assets/audio/cap34.mp3",
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "cap35",
      gioco: "audio",
      icon: "corpo"
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "cap35",
      gioco: "audio",
      icon: "mente"
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "cap35",
      gioco: "audio",
      icon: "spirito"
    }
  ],
}