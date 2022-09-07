export default {
  "titolo": "La grotta",
  "frase": `
    La fluorescenza dei funghi illumina la strada per quasi mezz'ora quando ti ritrovi nuovamente nell'oscurità.
    Con moltissima attenzione fai ancora pochi metri e ti ritrovi di nuovo all'aria aperta; hai attraversato la grotta finendo dall'altra parte.
    Sei molto stanco e mancano circa 5 ore all'alba per cui decidi di riposare.
    Prima di coricarti ripensi a tua sorella, ti concentri sulla voglia a forma di falce e provi ad attivare il potere: 
    senti che sei troppo lontano o forse troppo debole per comunicare qualcosa ma il bruciore che senti al ginocchio ti indica che Carcadena è viva.

    Di notte alcuni ricordi riaffiorano: 
    Denred che ritorna dall'addestramento con 2 dita in meno nella mano sinistra e quella cicatrice deformante sul labbro
    che ancora oggi gli permette di parlare male; 
    i suoi racconti della severità dei soldati, dell'addestramento ai limiti della sopportazione e della crudeltà del generale.

    Il giorno del raccolto è arrivato anche per te.
    Al tuo risveglio hai chiaro il tuo obiettivo: seguire i soldati per salvare tua sorella!
    
    hai 2 vie: (A)la stada veloce sulla via principale oppure (B)accostare la strada principale restando nascosto.

    (A) la strada verso Berdask è praticamente deserta e non è difficile individuare le tracce di sterco lasciato dai cavalli.
    Probabilmente i soldati avranno un carretto o qualcosa di simile. 
    Dopo circa un ora abbonante intravedi alcune figure ferme sulla strada; dagli indumenti sembrano commercianti e hanno un carretto alle loro spalle
    



    -risveglio male: Ti svegli a metà mattina sentendoti chiamare a gran voce da Denred. "Pantelion! Pantelion! Il vecchio è morto, dobbiamo seppelirlo" 
      -sentendo queste parole vai verso tuo fratello che ti abbraccia e stringendoti il braccio ti sussurra "non scapperai dall'addestramento".
      Quel bastardo di Denred è dalla parte dei soldati. Finisci sul carretto insieme agli altri
      -ti allontani cercandio di sparire con l'unico obiettivo di ritrovare Carcadena. 
      Cammini per ore fino a che dall'alto vedi una piccola carovana di soldati che si dirige ad un accampamento dove è visibile un cerchio di addestramento.
      Decine di reclute stanno iniziando ad imparare l'arte del combattimento.
        -ti avvicini per cercare Carcadena...
        -resti in disparte guardando da lontano ed ascoltando l'eco delle grida delle reclute che a suon di bastonate cercano di imparare a combattere.
        ....

    -risveglio bene: Ti svegli a metà mattina con lo stomaco vuoto (se hai una razione è il momento di mangiarla altrimenti vai in cerca di cibo [frutta e/o verdura, bacche]) 

    --- i soldati
    eseguono gli ordini "catturare tutti coloro sono in grado di usare una spada"
    prepararsi allo scontro con il regno dell'est
    un po' di cattiveria forma il corpo e lo spirito
    ignoranza 
    gioco d'azzardo
    scommesse sulle reclute
    pestaggi

    -png
    ...
    ... msg su telegram

    ??? quanti ragazzi sono ??
    ??? quanti soldati sono ???
    ?? dove sono??
    ?? atteggiamento dei png??
    ?? atteggiamento dei soldati ??
    - situazioni come pranzo/cenza, riposo, addestramento, bagno etc etc -


    ---Addestamento
    i soldati insegnano a sopportare il dolore con bastonate, sberle, bruciature
    i soldati insegnano ad usare bastoni lunghi, spade, scudi e archi
    i soldati insegnano ad indossare armatura
    i sodlati insegnano a difendersi da più nemici
    i soldati indicono un torneo per insegnare difficoltà psicologica
    i sodlati indicono scontri tra gruppi

    --- arrivo del generale
    il generale/comandante Raven, un moro tutto muscoli, con una brutta cicatrice sul lato destro del labbro superiore ed una bruciatura sulla mano sinistra
    si presenta autorevole con modi decisi. Gli bastano poche parole per farsi ascoltare dai soldati


    --- la prova
    il generale da l'ordine di preparare la prova
    ognuno ha 30 minuti per affrontare la prova dopodichè la torica si spegne

    - Pantelion ce la farà?
    - Carcadena fa il contrario di Pantelion
    -- non è importante se si riesce o non si riesce ma l'importante è che i 2 fratelli vengono divisi
    


  `,
  "audio": {
    "src": "/assets/audio/cap66.mp3", // todo
    "interrompe": ""
  },
  risposte: [
    {
      frase: "Se hai una coperta e vuoi usarla per riposare",
      checkZaino: "coperta",
      next: "cap64"
    },
    {
      frase: "Se rientri di qualche metro nella grotta per riposare",
      gioco: "gioco9"
    },
    {
      frase: "Se decidi di riposare su di una roccia",
      gioco: "dice"
    },
  ],
  "gioco9": {
    successo: 'capRisveglioBene', // todo
    fallimento: 'capRisveglioMale', // todo
    durata: "15",
    combinazione: ["acqua", "aria", "elettricita", "fuoco"],
    type: "element",
    dataset: "element",
  },
  "dice": {
    successo: 'capRisveglioBene', // todo
    fallimento: 'capRisveglioMale', // todo
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3 // quanti lanci col dado
  }
}