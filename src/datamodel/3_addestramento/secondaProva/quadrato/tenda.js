export default {
  titolo: "riparo",
  frase: `
    Raggiungi la tenda e vedi che all'interno c'è un basso tavolino con una brocca d'acqua 
    ed alcuni bicchieri rovesciati.
    A fianco ci sono 2 grosse otri sigillate e dall'odore probabilmnete contengono provviste.

  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Apri le otri', next: 'morteInTenda' },
    { frase: "Bevi dell'acqua", next: 'morteInTenda' },
    { frase: "Esci dalla tenda", next: 'esciTenda' }
  ]
}