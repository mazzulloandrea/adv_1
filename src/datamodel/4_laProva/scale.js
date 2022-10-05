export default {
  "titolo": "ultima prova",
  "frase": `
    Scendi la scala a pioli per circa una decina di gradini, saranno circa tre o quattro metri di profondità e, mentre stai per arrivare in fondo, con un tonfo la botola sopra di te si chiude.

    Prosegui nello stretto corridoio di terra e roccia per pochi passi, fino ad arrivare in una stanza più grande, dove ci sono 3 corridoio:

    uno a sinistra, uno al centro, ed uno a destra.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    { frase: "Vai a sinistra", next: 'proseguiPercorso', abilita: 'corpo' },
    { frase: "Vai a destra", next: 'proseguiPercorso', abilita: 'spirito' },
    { frase: "Vai al centro", next: 'proseguiPercorso', abilita: 'mente' },
    { frase: "Esamini per capire se ci sono indizi", gioco: 'text' }
  ],
  text: {
    successo: 'indizi'
  }
}