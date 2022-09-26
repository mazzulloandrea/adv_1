export default {
  "titolo": "Torni sui tuoi passi",
  "frase": `
    Ritorni sui tuoi passi pensando che forse scappare non è stata la scelta giusta;
    forse era più sicuro stare vicino a tua sorella e gli altri ragazzi.

    Mentre ripensi alla scelta fatta ti accorgi di alcuni rumori, come un grido attutito.
    Ti fai avanti lentamente e mentre ti sporgi da ua roccia per vedere la causa del rumore una mano ti afferra per il collo;
    una guardia ti ha catturato e mentre ti lega vedi che altre 2 guardie si avvicinano.
    Mentre ritornano verso il gruppo le due guardie dicono che Essertag è morto cadendo in una scarpata.
    Una risatina accompagnata da alcune battute sulla debolezza del ragazzo e dal destino che ha voluto che finisse così.

  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "gioco9",
  "gioco9": {
    successo: "uccisoDaiSoldati",
    fallimento: "arrivo",
    type: "memory",
    combinazione: ["spada", "teschio", "fantasma", "techio"],
    dataset: "combat",
  }
}