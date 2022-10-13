export default {
  "titolo": "Carcadena",
  "frase": `
    Incroci gli occhi chiari di tua sorella che, con i suoi tipici modi calmi e pacati, ti dice che Denred vi ha venduto ai soldati.
    Senza far trasparire un minimo di sentimento, con la solita voce piatta, Carcadena ti ricorda le parole di vostro fratello:
    <<Denred ci raccontava la sofferenza, la fatica e le punizioni vissute durante l'addestramento.
    E' in quel periodo che ha perso 2 dita della mano sinistra; poi il freddo, la fame... diceva che lo avevano temprato come si fa per una spada>>
    
    Quelle storie vi mettevano paura e lui sembrava sguazzare di piacere nel vedervi terrorizzati con quella sua voce strana, modificata da una ferita sul collo.
    
    Poi siete cresciuti ed avete iniziato a lavorare, dimenticando che il giorno del raccolto sarebbe arrivato anche per voi...

    crescendo avete scoperto di avere un legame, un forte aggancio tramite una voglia a forma di falce, che brucia quando usate quello che voi chiamate "potere".
    
    Avete deciso che è un vostro segreto e di non dire a nessuno di questo dono che vi permette di comunicare con il pensiero. 

    Inizialmente erano solo versi confusi ma adesso, dopo 4 mesi, riuscite a dirvi qualcosa di più
     avete scoperto che più siete lontani e meno riuscite ad utilizzarlo.

  `,

  "audio": {
    "src": "/assets/audio/carcadena.mp3", // todo modificare audio con quello scritto
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Carcadena cosa dovremo fare?",
      "gioco": "audio",
      "next": "sorella2"
    },
    {
      "frase": "Vuoi parlare con gli altri",
      "gioco": "audio",
      "next": "parlareAltri"
    },
  ]
}