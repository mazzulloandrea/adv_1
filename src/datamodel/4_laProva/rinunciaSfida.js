export default {
  titolo: "ultima prova",
  frase: `
    Esci dalla tenda e ti rechi da tua sorella. 
    La trovi indaffarata con le 3 capre, dalle quali mungete a turno il latte, e le fai capire che devi parlarle.

    Sta per appoggiare gli strumenti ed appartarsi con te, quando arriva un soldato che la chiama; Ravon la vuole in tenda.

    Il tuo sguardo preoccupato comunica qualcosa a tua sorella che, probabilmente, non ha pienamente inteso.
    Rifletti velocemente: avvisarla usando il potere oppure fare finta di nulla?
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vuoi avvisare Carcadena", next: 'avvisareCarcadena3Prova', },
    { frase: "Meglio rispettare le regole del generale e stare zitti", next: 'aspettareIlPotere' },
  ],
}