export default {
  titolo: "Carcadena",
  frase: `
  Tua sorella ti dice che non ha senso provare a scappare, ne tantomeno cercare un dialogo; con queste parole ottiene anche l'approvazione di Aaron che ha ascoltato il vostro discorso.

  Carcadena chiude gli occhi e ti senti bruciare il ginocchio; emetti una piccola smorfia di dolore e ascolti nella mente le sue parole: <<L'unica cosa da fare è resistere; se restiamo uniti possiamo farcela!>>
  **cornice**
  I soldati si alternano nel riposo sul carro cosìcchè la marcia non venga mai interrotta.
  Siete oramai in viaggio da 1 giorno intero e siete giunti sulle "colline sparse", luogo popolato da briganti e bestie selvagge.
  `,

  audio: {
    src: "/assets/audio/carcadena2.mp3", // todo
  },
  next: 'dice',
  dice: {
    successo: "sosta1",
    fallimento: "sosta1",
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}