export default {
  titolo: "ultima prova",
  frase: `
    Il corridoio bianco è pieno di tracce ben visibili in tutte le direzioni.

    Guardi attentamente e ti sembra di riconoscere impronte di stivale; infine arrivi ad un nuovo bivio:

    a sinistra, mattoni rossi decorano il pavimento,
    avanti un terreno blu intenso che ricorda il mare,
    ritornando sui tuoi passi il percorso bianco.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Sinistra per la via rossa", next: 'versoIncrocio' },
    { frase: "Torni indietro per la via bianca", next: 'biancoSDirezioneArancione', },
    { frase: "Avanti pavimento blu", next: 'bluNDirezioneNero', },
  ]
}