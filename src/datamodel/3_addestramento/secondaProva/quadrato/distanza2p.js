export default {
  titolo: "riparo",
  frase: `
    Con il colpo incoccato, cerchi il momento giusto per colpire il tuo avversario; sai che avrai una sola possibilità e dovrai essere più preciso che puoi.
    **cornice**
    Ti affacci lentamente, puntando l'arma in direzione di Darius; appena lo vedi lanci il tuo colpo e anche lui fa la stessa cosa.

    Solamente l'istinto ti farà evitare il dardo del tuo avversario
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: "sconfittoDarius",
    fallimento: "trafitto",
    obiettivo: 13, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente"], // quelle che non si devono usare devono essere escluse
    lanci: 5 // quanti lanci col dado
  },
}