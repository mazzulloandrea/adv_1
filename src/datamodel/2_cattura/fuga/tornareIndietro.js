export default {
  "titolo": "Torni sui tuoi passi",
  "frase": `
    Ritorni sui tuoi passi, pensando che forse scappare non è stata la scelta giusta;
    forse era più sicuro stare vicino a tua sorella e gli altri ragazzi.

    Mentre rifletti sulla scelta fatta, ti accorgi di alcuni rumori, come un grido attutito.
    Ti fai avanti lentamente e, mentre ti sporgi da ua roccia per vedere la causa del rumore, una mano ti afferra per il collo; una guardia ti ha catturato.
    Altri 2 soldati si avvicinano e ritornate così verso il carretto raggiungendo il resto del gruppo.
    Le guardie alle domande sul fuggitivo spiegano, ridendo e con battute stupide, che Essertag è morto cadendo in una scarpata.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "gioco9",
  "gioco9": {
    successo: "uccisoDaiSoldati",
    fallimento: "arrivo",
    type: "memory",
    combinazione: ["albero", "barile", "cobra", "mare", "sentiero"],
    dataset: "nature",
    durata: "15",
  }
}