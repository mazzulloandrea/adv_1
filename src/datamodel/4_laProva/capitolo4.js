export default {
  step: 5,
  "titolo": "ultima prova",
  "frase": `
    I giorni si susseguono così come gli insegnamenti.
    Dopo alcuni giorni, venite a sapere che non tutti voi andrete a Berdask; alcuni seguiranno un percorso alternativo.
    Vi separerete per circa un mese prima di riunirvi nella città del duca di Blick.
    **cornice**
    Il giorno seguente venite tutti informati dal generale di una ultima prova, la più dura.

    <<Verrete chiamati uno alla volta, nei prossimi giorni, con il divieto assoluto di parlare della sfida con gli altri.
    É proibito parlare con chiunque della prova sia prima sia dopo averla effettuata.
    
    La pena per i trasgressori è l'amputazione della lingua>>.

    Quando dice queste parole, il generale, chiama a gran voce Orius, e, come monito per tutti i presenti, il soldato apre la bocca mostrando quel che resta della propria lingua.

    Paura e silenzio pervadono tutti quanti finchè Ravon ordina di ritornare ai propri posti. 
    **cornice**
    Le giornate si susseguono senza alcun momento libero; i soldati, guidati dalle regole ferree di Ravon, si alternano continuamente facendovi lavorare ed allenare dall'alba al tramonto.

    Passano due giorni e credi che qualcuno abbia già effettuato la "prova"; vedi Frozia più cupo del solito e Alexis, che oramai si è ripreso totalmente dalla malattia, che cerca sempre di schivarti.
    
    Sei sospettoso anche di qualcun altro quando, il giorno dopo, ti si avvicina una guardia; ti avverte che Ravon attende la tua presenza nella sua tenda.

    Con un po' di timore raggiungi la tenda del generale.
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



