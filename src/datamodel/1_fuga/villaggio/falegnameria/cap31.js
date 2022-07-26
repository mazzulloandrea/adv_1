export default {
  titolo: "Falegnameria",
  frase: `
    Rumori improvvisi all'esterno ti fanno sobbalzare; vedi le fiaccoli di due soldati fermi all'incrocio che probabilmente stanno decidendo cosa fare.
  `,
  audio: {
    src: "/assets/audio/cap31.mp3",
  },
  risposte: [
    {
      frase: "Ti dirigi verso la stalla",
      next: "cap32"
    },
    {
      frase: "Ti nascondi in falegnameria",
      next: "cap33"
    },
    {
      frase: "Scappi verso il bosco",
      next: "cap50"
    },
  ],
}