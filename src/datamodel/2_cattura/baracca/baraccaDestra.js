export default {
  "titolo": "baraccaDestra",
  "frase": `
    Fai il giro verso la finestra; la tua preoccupazione aumenta a dismisura quando senti chiaramente dei rumori provenire dal lato opposto della baracca.

    Cerchi di ascoltare con attenzione e capisci che una figura umanoide si sta muovendo, 3 o 4 passi poi si ferma,
    solleva l'asse di legno che sbarra la porta ed entra nella baracca; 
    poi rumori indecifrabili e, mentre cerchi di comprenderli, ti avvicini alla finestra per sbirciare

  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  gioco: "dice",
  dice: {
    successo: 'eremitaInCasa',
    fallimento: 'eremitaInCasaColpoAllaTesta',
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4 // quanti lanci col dado
  }
}