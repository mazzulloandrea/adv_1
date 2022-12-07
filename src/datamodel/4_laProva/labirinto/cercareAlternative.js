export default {
  titolo: "ultima prova",
  frase: `
    Ti guardi attorno cercando una strada, una indicazione, qualcosa... ma non trovi nulla...
    resta solo la corda che porta in cima al pozzo.

    Ti fai coraggio e ti prepari al contatto con l'acqua.
  `,
  audio: {
    src: "/assets/audio/cercareAlternative.mp3",
  },
  next: "dice",
  dice: {
    successo: "nuotare",
    fallimento: "nuotare",
    obiettivo: 16, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
