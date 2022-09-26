export default {
  "titolo": "ultima prova",
  "frase": `
    Esci dalla tenda e ti rechi da tua sorella; la trovi indaffarata con le 3 capre 
    dalle quali mungete a turno il latte.
    Cerchi di farle capire che le vuoi parlare e mentre sta per appoggiare gli strumenti ed 
    appartarsi con te arriva un soldato che la chiama, Ravon la vuole in tenda.

    Il tuo sguardo preoccupato comunica qualcosa a tua sorella che probabilmente non ha inteso pienamente,
    rifletti sul da farsi: avvisarla usando il potere oppure fare finta di nulla?
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi avvisare Carcadena", next: 'avvisareCarcadena3Prova', },
    { frase: "Meglio rispettare le regole del generale e stare zitti", next: 'aspettareIlPotere' },
  ],
}