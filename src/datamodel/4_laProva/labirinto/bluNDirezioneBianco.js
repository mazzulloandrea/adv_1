export default {
  titolo: "ultima prova",
  frase: `
    Il blu scuro sembra assorbire la luce della torcia, infine arrivi ad un incrocio a tre vie: verso destra una via rossa, avanti una strada bianca, indietro la strada blu.

    Che strada prenderai?
  `,

  audio: {
    src: "/assets/audio/bluNDirezioneBianco.mp3",
  },
  risposte: [
    { frase: "Destra verso il rosso", next: "versoIncrocio" },
    { frase: "Indietro nel corridoio blu", next: "bluSDirezioneNero" },
    {
      frase: "Avanti verso il terreno bianco",
      next: "biancoNDirezioneArancione",
    },
  ],
};
