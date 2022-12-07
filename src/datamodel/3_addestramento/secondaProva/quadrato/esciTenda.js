import nemico from "./nemico.js";

const resp = nemico.risposte.concat(
  { frase: "Se vuoi scappare", next: "scappareDarius" },
  { frase: "Se vuoi arrenderti", next: "mortePerResa" }
);

export default {
  titolo: "",
  frase: `
    Esci dalla tenda.
    Alle tue spalle c'è il nemico che, senza esitare un momento, ti punta la balestra contro. 
    Il dardo ti sfiora per pochissimi centimetri.

    Scappi d'istinto, riparandoti dietro gli alberi, mentre Darius, imprecando per il colpo mancato, sta caricando nuovamente la balestra.
  `,

  audio: {
    src: "/assets/audio/esciTenda.mp3",
  },
  risposte: resp,
};
