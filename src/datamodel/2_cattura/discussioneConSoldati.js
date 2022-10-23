export default {
  "titolo": "Calmo",
  "frase": `
    I soldati ti guardano attoniti cercando di capire se stai scherzando o parli seriamente; borbottano un misto di insulti e complimenti per la tua sfrontatezza. 
    Hai sicuramente guadagnato punti sul rispetto nei tuoi confronti.
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  "risposte": [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "calmo2",
      "icon": "corpo",
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "calmo2",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "calmo2",
      "icon": "spirito"
    }
  ],
}