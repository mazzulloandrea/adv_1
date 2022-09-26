export default {
  "titolo": "---",
  "frase": `
    Ti tappi il naso e prosegui di pochissimi metri quando all'improvviso senti un rumore che ti fa trasalire:
    dietro la roccia a pochi centimetri da te una creatura umanoide sta facendo i suoi bisogni e ha appena finito
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Resti immobile", next: "eremita" },
    { frase: "Corri via", next: "scappiVia" },
    { frase: "Sei pronto a combattere", next: "eremita" },
  ],
}