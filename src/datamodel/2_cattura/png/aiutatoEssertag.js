export default {
  titolo: "Essertag",
  frase: `
    I tuoi sforzi sembrano aver avuto successo.
    Essertag ti fa un cenno con il capo e sembra che sia riuscito quantomeno ad allentare il nodo... 
    sai che da un momento all'altro potrebbe accadere qualcosa
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
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