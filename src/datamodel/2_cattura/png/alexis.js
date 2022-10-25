export default {
  titolo: "Carcadena",
  frase: `
    Alexis di certo non sta bene, si vede subito; ha la febbre alta e respira con difficoltà.

    Anche tua sorella si è accorta della condizione del vostro amico. 
    Insieme a te gli si avvicina, poggia le sue mani sulla fronte del malato e chiude gli occhi concentrandosi, come altre volte l'hai vista fare.
    **cornice**
    Pochi istanti dopo li riapre ed incrocia il tuo sguardo interrogativo.
    Stai per chiederle spiegazioni, quando vedi Alexis aprire gli occhi; incredibilmente ha un aspetto più rilassato e inspira profondamente, come se la malattia fosse scomparsa.

    La trasformazione però dura solo pochissimi istanti, infatti Alexis batte le palpebre e ritorna immediatamente ad accasciarsi su di un fianco...

    Carcadena ti guarda, ti fa intendere che è una cosa nuova legata al potere, ma ancora non sa bene come funzioni.

    Ti chiedi se anche tu potrai avere in futuro questa capacità...
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