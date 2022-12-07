export default {
  titolo: "riparo",
  frase: `
    Raggiungi la tenda; all'interno c'è un tavolino basso con una brocca d'acqua ed alcuni bicchieri rovesciati.
    A fianco ci sono 2 grosse otri; dall'odore probabilmnete contengono provviste.
  `,
  audio: {
    src: "/assets/audio/tenda.mp3",
  },
  risposte: [
    { frase: "Apri le otri", next: "morteInTenda" },
    { frase: "Bevi dell'acqua", next: "morteInTenda" },
    { frase: "Esci dalla tenda", next: "esciTenda" },
  ],
};
