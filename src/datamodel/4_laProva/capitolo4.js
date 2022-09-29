export default {
  "titolo": "ultima prova",
  "frase": `
    I giorni si susseguono così come gli insegnamenti;
    dopo 4 giorni venite a sapere che non tutti voi andrete a Berdask ma alcuni 
    seguiranno un percorso alternativo per circa 1 mese prima di riunirvi nella città del duca di Blick

    Il quinto giorno venite tutti informati dal generale di una ultima prova, la più dura; 
    questa terza prova verrà svolta in autonomia e avrete successo solo se porterete a termine la sfida.

    Verrete chiamati uno alla volta in momenti diversi da adesso per i prossimi giorni 
    con il divieto assoluto di parlare della sfida con gli altri; 
    è assolutamente proibito parlare con chiunque della prova sia prima sia dopo averla effettuata 
    e sia in caso di successo che di fallimento.

    La pena per i trasgressori è l'amputazione della lingua.

    Quando dice queste parole, il gerenale, chiama a gran voce Orius, e come monito per tutti i presenti  
    il soldato apre la bocca e mostra quel che resta della propria lingua.

    Paura e silenzio pervadono tutte le reclute finchè Ravon ordina a tutti di ritornare ai loro posti. 

    Le giornate si susseguono senza alcun momento libero; i soldati, guiati dalle regole feree di ravon,
    si alternano continuamente facendovi lavorare ed allenare dall'alba al tramonto.

    Passano 2 giorni e credi che qualcuno abbia già effettuato la "prova"; 
    vedi Frozia più cupo del solito e
    Alexis, che oramai si è ripreso totalmente dalla malattia, che cerca sempre di schivarti.
    
    Sei sospettoso anche di qualcun altro quando, il giorno dopo,
    ti si avvicina una guardia e ti avverte che Ravon attende la tua presenza nella sua tenda.

    Con un po' di timore raggiungi la tenda del generale
  `,

  "audio": {
    "src": "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      "frase": "Entri immediatamente",
      "next": "inizioProva3",
    },
    {
      "frase": "Provi a capire cosa ti aspetta",
      "next": "esaminiTenda",
    },
  ]
}