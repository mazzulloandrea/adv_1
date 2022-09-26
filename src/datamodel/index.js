// 0_intro
// 1_fuga
// 2_cattura
// 3_addestramento
// 4_laProva
// 5_finale


// 0_intro
import _0 from './0_intro/0.js';
import a from './0_intro/a.js';
import a0 from './0_intro/a0.js';
import a1 from './0_intro/a1.js';
import a2 from './0_intro/a2.js';
import a3 from './0_intro/a3.js';

// 1_fuga
// 1_fuga/villaggio
import cap1 from './1_fuga/villaggio/cap1.js';
import cap2 from './1_fuga/villaggio/cap2.js';
import cap3 from './1_fuga/villaggio/cap3.js';
import cap4 from './1_fuga/villaggio/cap4.js';
import cap5 from './1_fuga/villaggio/cap5.js';
import cap6 from './1_fuga/villaggio/cap6.js';

// 1_fuga/villaggio/campo di Grano
import cap10 from './1_fuga/villaggio/grano/cap10.js';
import cap11 from './1_fuga/villaggio/grano/cap11.js';
import cap12 from './1_fuga/villaggio/grano/cap12.js';
import cap13 from './1_fuga/villaggio/grano/cap13.js';
import cap14 from './1_fuga/villaggio/grano/cap14.js';
import cap16 from './1_fuga/villaggio/grano/cap16.js';
import cap17 from './1_fuga/villaggio/grano/cap17.js';
import cap19 from './1_fuga/villaggio/grano/cap19.js';
import cap20 from './1_fuga/villaggio/grano/cap20.js';
import cap21 from './1_fuga/villaggio/grano/cap21.js';
import cap24 from './1_fuga/villaggio/grano/cap24.js';
import cap25 from './1_fuga/villaggio/grano/cap25.js';
import cap26 from './1_fuga/villaggio/grano/cap26.js';
import cap27 from './1_fuga/villaggio/grano/cap27.js';

// 1_fuga/villaggio/falegnameria
import cap30 from './1_fuga/villaggio/falegnameria/cap30.js';
import cap31 from './1_fuga/villaggio/falegnameria/cap31.js';
import cap32 from './1_fuga/villaggio/falegnameria/cap32.js';
import cap33 from './1_fuga/villaggio/falegnameria/cap33.js';
import cap34 from './1_fuga/villaggio/falegnameria/cap34.js';
import cap35 from './1_fuga/villaggio/falegnameria/cap35.js';
import cap36 from './1_fuga/villaggio/falegnameria/cap36.js';

// 1_fuga/villaggio/stalla
import cap40 from './1_fuga/villaggio/stalla/cap40.js';
import cap41 from './1_fuga/villaggio/stalla/cap41.js';
import cap42 from './1_fuga/villaggio/stalla/cap42.js';

// 1_fuga/bosco
import cap50 from './1_fuga/bosco/cap50.js'; // bosco da solo
import cap51 from './1_fuga/bosco/cap51.js'; // bosco in 2 51-53
import cap52 from './1_fuga/bosco/cap52.js';

// 1_fuga/bosco/capanna
import cap53 from './1_fuga/bosco/capanna/cap53.js';
import cap56 from './1_fuga/bosco/capanna/cap56.js';
import cap57 from './1_fuga/bosco/capanna/cap57.js';

// 1_fuga/bosco/grotta
import cap60 from './1_fuga/bosco/grotta/cap60.js';
import cap61 from './1_fuga/bosco/grotta/cap61.js';

// 1_fuga/bosco/fiume
import cap70 from './1_fuga/bosco/fiume/cap70.js';

// 2_cattura
import cap7 from './2_cattura/cap7.js';
import cap62 from './2_cattura/cap62.js';
import cap64 from './2_cattura/cap64.js';
import cap65 from './2_cattura/cap65.js';

import cap71 from './2_cattura/cap71.js';
import cap72 from './2_cattura/cap72.js';
import cap80 from './2_cattura/cap80.js';
import cap90 from './cap90.js';

// import cap102 from './cap102.js';
// import cap103 from './cap103.js';


// zaino: coperta, corda, accetta, razione, 
// borsello: 2, 

// checkpoint part1 
// incontri Aaron 26

// capitoli con bonus 
// parte 1_fuga 0, 19, 25, 34, 50, capGrottaAcqua, 
// parte 2_cattura aaronCoraggio, verita, discussioneConSoldati, rialzato, cadeIlRosso
// parte 3_addestramento  vittoriaSanguinante, vittoriaNonSanguinante

// capitoli finali par1 7, 20, 32, 36, 42, 65

// morte 
// parte_1 90
// parte_2 trappolaBanditiMorte
// parte_3 fineSecondaProvaMorte, mortePerResa, scappareDarius, morteInTenda, uccisoDaDarius

// informazioni per gioco Text
// PG: Philidor, 14 anni, voglia a forma di falce sul ginocchio, 
// nomi png: , Carcadena, Denred, Aaron, Ravon
// altre info: 
// villaggio Grassfat
//  "giorno del raccolto", 
//  a Denred mancano 2 dita mano sx ed ha una cicatrice sulla guancia che gli causa una parlata male
// il capitano dei soldati si chiama Ravon
// la capitale si chiama Berdask
// bosco dei serpenti
//


// IDEA

/**
 *  Usare le risposte come gioco con una domanda
 * "Il governstore di Berdask è..."
 * Duca
 * Conte
 * Re
 * Principe
 */


// TODO: finire rumoreMisterioso (inserire un rumore all'audio)

/** 
 * info varie
 * Pantelion, 14 anni, fratello gemello, voglia di falce sul ginocchio destro, potere da 4 mesi
 * Carcadena, bionda, voglia di falce su spalla sinistra,
 * Denred, fratellastro, mancano 2 dita mano sinistra
 * Denred, voce rovinata per via di una cicatrice sulla guancia
 * Denred ha fatto l'adestramento con successo
 * Erbafolta (villaggio)
 * Berdask (città di destinazione dove avviene l'addestramento)
 * Duca di Blick (sovrano di Berdask)
 * Murafredde (villaggio a nord di erbafolta - tra berdask e Erbafolta ma non obbligatorio passarci)
 * Essertag figlio muscoloso dell'artigiano, testa calda, scappa, viene ucciso da Darius
 * Gudrum, amico di Essertag, fratello minore della numerosa famiglia di allevatori amico di Essertag controlla che le guardie non si accorgano di Essertag,
 * Aaron, 
      più giovane di 2 anni di te, 
      figlio unico dei contadini che gestiscono il pozzo, 
      abbastanza timoroso, ha subito alcune angherie dai soldati e sta accovacciato in silenzio,
 * Alexis, figlio de falegname per il quale anche tu spesso lavori, è sicuramente ammalato e avrebbe bisogno di stare sdraiato a riposare.
 * Essertag ucciso dai soldati (Darius)
 * Altri png di Murafredde: 
 * Teela di Murafredde, donna, 13 anni, veloce, agile, cacciatrice brava con arco, carattere schivo e silenziosa
 * Giak di Murafredde, uomo, capelli rosso, 15 anni, basso e muscoloso, aiutante fabbro
 * Frozia di Murafredde, grasso e timido, 14 anni, aiutante bibliotecario
 * Redro di Murafredde, uomo, capelli neri, 16 anni quasi 17, coltivatore figlio di una guardia
 * Terrarossa (accampamento)
 * Colli sparse (strada verso Berdask)
 * Darius (guardia assassina di Essertag)
 * Orius (soldato lingua amputata)
 * Nerqun (guardia )
 * Giakkos (eremita)
 * Ravon (generale)
 * Piede di capra
 * Rune bagnate
 * Ponte del drago (ponte per Berdask)
 * Mezzo picco (dove verranno portati Carcadena e Alexis)
 * Il corvo zoppo (locanda)
 * 
 * 
 * Strada : Erbafolta -> Coli Sparsi -> "strada segreta", "terrarossa" -> "strada segreta" , "foresta "
 * 
 * 
 * 
 * 
  ------------------- tempi ---------------------------
  2/3 gg fino all'accampamento
  2 settimane di addestramento
  2/3 giorni fino a Berdask
  11 mesi di istruzione militare


  ------------------------------- parte 2 viaggio + addestramento -----
  [Carcadena] - ok
  Dialogo con tua sorella, i racconti di Denred dando alcune informazioni sul potere

  Sul carretto oltre a noi 5 prede del "giorno del raccolto", ci sono anche alcuni soldati che si alternano nel riposare.

  [Alexis sta male] - ok
  Tra di noi quello che al momento se la sta passando peggio è Alexis. 
  Si vede chiaramente che sta male e che ha bisogno di cure e di riposo; 
  in tutta risposta alcuni soldati scommettono 2 "Lune di Blick" che non supererà i 2 giorni che vi separano dall'accampamento.
  Un soldato, quello che sembra essere il superiore in grado, maneggia il viso di Alexis piantodogli i polpastrelli sulle guange e ruotando il volto a destra e a sinistra; 
  il malato apre lentamente gli occhi come in una spece di trance. 
  Il capo soldato se la prende poi con i suoi sottoposti alzando la voce e dando qualche pestone; 
  i soldati si giustificano dicendo che hanno dato le 10 Lune in cambio del ragazzo
  afferma che sarebbe stato meglio lasciare quel ragazzo a casa

  [Essertag si lamenta]
  La sensazione di essere trattati come dei delinquenti viene sottolineata da Essertag che, in tutta risposta, ottiene una stretta ulteriore al nodo che già stringeva i polsi.
  
  [i soldati parlano]
  I soldati parlano fra di loro usando un gergo non sempre chiaro, 
  capisci che la strada che state percorrendo porta a Berdask e prevede di passare per i "Colli sparsi", 
  poi nei pressi delle "pietra piangenti" bisognerà deviare verso "il luogo dell'incontro"

  // In questo momento passi a fianco di una decrepita locanda lato strada con apparententemente nessun ospite.

  [riposo]
  Dopo una ulteriore mezz'ora il piccolo gruppo di 7 soldati si ferma per riposare un poco nei pressi di un cerchio di pietre che naturalmente offre riparo; 
  il terreno è nero per le bruciatore di centinaia di falò che prima di questo hanno ospitato questo posto.
  
  "Mi scappa! Liberatemi" sono le parole di Gudrum che ottiene come risposta un "pisciati addosso"

  [Essertag scappa]
  Di Mattina viene acceso un veloce fuoco e servita una calda brodaglia in una ciotola; venite liberati per mangiare ed Essertag ne approfitta subito per scappare; 
  subito 3 soldati vanno a carcarlo mentre gli altri vi legano immediatamente per evitare altre spiacevoli sorprese.

  [punizione per la bravata di Essertag]
  ricevete tutti una serie di bastonate sulla schiena che vi fanno rimanere senza fiato e sopratutto senza voglia di riprovarci.

  [bivio]
  la strada principale prosegue per i "colli sparsi" ma voi siete fermi davanti ad un albero e non ne capisci il motivo.
  -> deviazione

  ------- parte 3 addestramento ----------
  [accampamento]
  Dopo un paio d'ore di fuori pista arrivate in uno spiazzo di terra battuta rossastra e ad aspettarvi ci sono una ventina di soldati e altri 6 o 7 giovani come voi.
  Tutto il perimetro è definito con pali di legno e fil di ferro ed una volta entrati capisci che sarà impossibile scappare da questa prigione.

  Una volta dentro venite slegati e tutte le guardie si mettono attorno a voi radunandovi al centro.
  Un soldato suona un corno e da una tenda esce un soldato più anziano con un mantello scuro; deve essere il comandante.
  Cala il silenzio ai suoi passi, poi si arresta davanti a tutti voi presentandosi come "Generale Ravon"
  Ha il compito di insegnarvi tutto, da come riconoscere i frutti e le piante commestibili della zona, quali sono gli animali pericolosi e come affrontarli,
  come impugnare un'arma militare, uno scudo e come cavalcare ma soprattutto vi insegnerà ad essere degli uomini veri quindi 
  come sopportare la fame, il dolore, le ingiustizie e tutto quello che ci vuole per servire al meglio il Duca di Blick, sovrano di Berdask.

  Come prima cosa un tozzo di pane ed una boccale colmo di vino rosso a testa.

  [prima prova]
  Royal rumble
  --e passa così la fine della giornata--

  [le altre reclute]
  arrivano da Murafredde

  [prove successive] 
  i giorni seguenti si susseguono senza soste addestramenti vari tra cui lezioni su vegetali, animali, tiro con l'arco, spada, bastoni,
  senza evitare 

  -------- parte 4 la prova --------------------
  [la prova] - Senza sapere che è una prova
  Vieni chiamato dal generale Ravon e all'interno della sua tenda vieni lasciato solo con lui.
  Ti spiega che sei uno dei migliori del campo e che per te ha in moente un compito particolare; 
  mentre ti racconta queste parole si sposta in fondo alla stanza e ti mostra una botola.
  Ti dice che il tuo compito è recuperare un piccolo bauletto in fondo, quindi dovrai scendere, recuperare e risalire 
  e per fare questo avrai a disposizone solamente 30 minuti.
  Ti chiede quando sei pronto in modo da girare la classidra.

  -- ovviamente è una scusa perchè la prova consiste nell'eplorare un piccolo dungeon --

  Esplorazione Dungeon -> enigma finale

  Finita la prova, Pantelion scoprirà che è la prova e che NON potrà parlarne con nessuno

  Preparativi per andare a Berdask a concludere l'addestramento

  -------parte 5 finale-------------------
  Vieni separato da Carcadena che NON proseguirà per Berdask
  una parte delle reclute si dirigerà da un'altra parte (sconosciuta) mentre tu andrai a Berdask

  Arrivo a Berdask, il ponte del drago, le alte mura di pietra. Le decine di soldati impettiti e organizzati

  Conti già i giorni che mancano per rivedere tua sorella

 * */

export default {
  _0,
  a,
  a0,
  a1,
  a2,
  a3,
  cap1,
  cap2,
  cap3,
  cap4,
  cap5,
  cap6,
  cap7,
  cap10,
  cap11,
  cap12,
  cap13,
  cap14,
  cap16,
  cap17,
  cap19,
  cap20,
  cap21,
  cap24,
  cap25,
  cap26,
  cap27,
  cap30,
  cap31,
  cap32,
  cap33,
  cap34,
  cap35,
  cap36,
  cap40,
  cap41,
  cap42,
  cap50,
  cap51,
  cap52,
  cap53,
  cap56,
  cap57,
  cap60,
  cap61,
  cap62,
  cap64,
  cap65,
  cap70,
  cap71,
  cap72,
  cap80,






  cap90,
  // cap102,
  // cap103,
}