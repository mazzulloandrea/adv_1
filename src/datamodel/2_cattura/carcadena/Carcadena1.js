export default {
  "titolo": "Carcadena",
  "frase": `
    Incroci gli occhi chiari di tua sorella che con i suoi tipici modi calmi e pacati ti dice che Denred vi ha venduto ai soldati.
    Senza far trasparire un minimo di sentimento, con voce piatta, Carcadena ti ricorda le parole di vostro fratello:
    Denred raccontava la sofferenza, la fatica e le punizioni vissute durante l'addestramento.
    E' in quel periodo che ha perso 2 dita della mano sinistra;
    poi il freddo, la fame... diceva che lo avevano temprato come si fa per una spada.
    Quelle storie vi mettevano paura e lui sembrava sguazzare di piacere nel vedervi terrorizzati con quella sua voce
    modificata da uan cicatrice sulla guancia che gli aveva allargato e modificato l'espressione per sempre...
    poi siete cresciuti ed avete iniziato a lavorare dimenticando che il giorno del raccolto sarebbe arrivato anche per voi...

    e poi avete scoperto di avere un legame, un forte aggancio tramite una voglia a forma di falce che brucia quando usate quello che voi chiamate "potere".
    
    Avete deciso che è un vostro segreto e di non dire a nessuno di questo vostro dono che vi
    permette di comunicare con il pensiero. 

    Inizialmente erano solo versi confusi ma adesso, dopo 4 mesi, riuscite a dirvi qualcosa di più, inoltre
    avete scoperto che più siete lontani e meno riuscite ad usare il potere

  `,

  "audio": {
    "src": "/assets/audio/carcadena.mp3", // todo
    "interrompe": "",
  },
  "risposte": [
    {
      "frase": "Carcadena cosa dovremo fare?",
      "gioco": "audio",
      "next": "carcadena2"
    },
    {
      "frase": "Vuoi parlare con gli altri",
      "gioco": "audio",
      "next": "parlareAltri"
    },
  ]
}