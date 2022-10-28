import nemico from './nemico.js';

const resp = nemico.risposte.concat(
  { frase: 'Attendi per capire le sue intenzioni', next: 'attesa' },
)

export default {
  titolo: "riparo",
  frase: `
    Ti apposti nel vicino riparo; cerchi la posizione migliore per poter tenere sotto controlla la zona senza essere visto.

    Dopo qualche minuto, vedi passare Darius all'altezza del pozzo, ha in mano una balestra e si sta muovendo molto lentamente verso la tenda.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: resp,
}