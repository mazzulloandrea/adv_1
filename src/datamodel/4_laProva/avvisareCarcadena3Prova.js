export default {
  titolo: "ultima prova",
  frase: `
    Chiudi gli occhi e ti concentri ma una guardia vieni da te e inizia a prenderti in giro: <<Non dormire e vedi di finire il lavoro, scansafatiche>>.

    Ti allontani cercando il giusto luogo dove non essere disturbato e, quando finalmente lo trovi, attivi il potere.
    Ti accorgi subito che qualcosa non va, senti una ondata gigantesca di energia ed il fragore che invade il tuo corpo è così forte che spalanchi gli occhi.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  next: 'dice',
  dice: {
    successo: "ilPotere",
    fallimento: "ilPotere",
    obiettivo: 15, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}