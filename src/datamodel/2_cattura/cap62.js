import cap7 from './cap7';

export default {
  step: 2,
  titolo: "Il Bosco",
  frase: `
    Ti sei perso nel bosco; l'ululato dei lupi ti mette in allarme e velocemente inizi a ritornare sui tuoi passi.

    **cornice**
    Dopo qualche minuto, senti una mano afferrarti nell'oscurità; è tuo fratellastra Denred insieme ad alcuni soldati.

    Ti legano le mani e ti portano dagli altri; su di un carretto ci sono già tua sorella ed altri ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena <<Pantelion perchè non mi hai ascoltato?>>.
    Nella notte, tra le lamentele ed i pianti delle madri, il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale" e che, tra un anno, finito l'addestramento, ritornerete a casa.
  **cornice**
    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,
  audio: {
    src: "/assets/audio/cap62.mp3",
  },
  risposte: cap7.risposte
}