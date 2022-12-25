export default {
  titolo: "La grotta - i pipistrelli",
  frase: `
    Mentre ti muovi, urti un osso e, immediatamente, si scatena la furia di pipistrelli impazziti.
    Sono attimi di panico in cui ti accasci al suolo, cercando di proteggerti come puoi, mentre quegli esseri alati si muovono a folle velocità e confusione.
    Appena tutto tace ti rialzi, e, guardandoti attorno, noti un corridoio che prima non avevi visto; dell'aria fresca arriva da quella parte, per cui, senza tergiversare, ti incammini per la nuova strada.
  `,
  audio: {
    src: "/assets/audio/capGrottaPipistrelli.mp3",
  },
  next: "dice",
  dice: {
    successo: "capGrottaSentiero",
    fallimento: "capGrottaSentiero",
    obiettivo: 13, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 4, // quanti lanci col dado
  },
};
