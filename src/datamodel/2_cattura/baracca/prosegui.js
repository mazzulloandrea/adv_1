export default {
  titolo: "---",
  frase: `
    Ti tappi il naso e prosegui di pochissimi metri, quando all'improvviso senti un rumore che ti fa trasalire; dietro la roccia a pochi centimetri da te, una creatura ha appena finito di fare i suoi bisogni.
  `,

  audio: {
    src: "/assets/audio/prosegui.mp3",
  },
  risposte: [
    { frase: "Resti immobile", next: "eremita" },
    { frase: "Corri via", next: "scappiVia" },
    { frase: "Sei pronto a combattere", next: "eremita" },
  ],
};
