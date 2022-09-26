export default {
  "titolo": "vittoria seconda prova",
  "frase": `
    Esci fuori dal quadrato e vieni circondato da alcune guardie che si congratulano con te;
    ti concentri e mandi un messaggio a Carcadena dicendo che ce l'hai fatta.

    Si scopre la morte di Darius e viene commentata come qualcosa che inevitabile, prima o poi, 
    sarebbe capitata; quel bastardo avrebbe trovato qualcuno che gliel'avrebbe fatta pagare.

    Vieni a scoprire che Darius, tra i tanti orrori commessi, 
    aveva anche tagliato le 2 dita dalla mano sinistra di Denred;
    ora finalmente è stato sconfitto.
    `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      "frase": "Corpo",
      "abilita": "corpo",
      "next": "capitolo4",
      "icon": "corpo",
    },
    {
      "frase": "Mente",
      "abilita": "mente",
      "next": "capitolo4",
      "icon": "mente"
    },
    {
      "frase": "Spirito",
      "abilita": "spirito",
      "next": "capitolo4",
      "icon": "spirito"
    }
  ]
}