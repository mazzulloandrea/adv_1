export default {
  "titolo": "prima prova",
  "frase": `
    Quando scegli il generale, tutti i soldati si mettono a ridere e Ravon si complimenta con te per il coraggio;
    è impossibile che tu lo affronti e quindi devi necessariamente scegliere uno dei soldati.

    Tra le guardie si fa avanti un soldato che hai già visto in precedenza, si chiama Darius: <<É me che dovrai battere>>.
    Il generale comunica che le sfide possono avere inizio.
  `,
  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "inizioSecondaProva",
      "icon": "corpo",
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "inizioSecondaProva",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "inizioSecondaProva",
      "icon": "spirito"
    }
  ]
}