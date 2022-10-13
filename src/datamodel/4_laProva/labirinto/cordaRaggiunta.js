export default {
  "titolo": "ultima prova",
  "frase": `
    Ti aggrappi e con molta fatica raggiungi la cima del pozzo.
    
    Sulla sommità, appoggiata sul bordo di pietra, c'è una brillante chiave di rame.
    La afferri e tutto bagnato ti dirigi verso la tenda del generale; quando ti vede entrare, Ravon si complimenta con te.
    Ti raccomanda di non parlarne con nessuno e, dopo averti preso la chiave di rame, Ravon prende un sacchetto di pelle; da esso estrae alcuni granelli di una qualche polverina che ti lancia addosso, istantaneamente ritorni asciutto.

    Mentre cerchi di capire come sia possibile, il generale ti incita a ritornare ai tuoi compiti quotidiani e di fare silenzio con gli altri.

    Ancora incredulo di quanto sia accaduto, lasci la tenda del generale e ritorni alle tue attività.

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: 'Con fierezza ritorni ai tuoi compiti', next: 'rinunciaSfida', vittoria3: true }
  ]

}   