import cap7 from "./cap7";

export default {
  step: 2,
  titolo: "Il Bosco",
  frase: `
    Ti sei perso nel bosco.
    L'ululato dei lupi ti mette in allarme e velocemente inizi a ritornare sui tuoi passi.
    **cornice**
    Dopo qualche minuto, senti una mano afferrarti nell'oscurità; è tuo fratellastro Denred insieme ad alcuni soldati.

    I soldati ti legano portandoti su di un carretto dove ci sono già tua sorella ed altri quattro ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena <<Pantelion perchè non mi hai ascoltata?>>.
    **cornice**
    Nella notte, tra le lamentele ed i pianti delle madri, il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale" e che, tra un anno, finito l'addestramento, ritornerete a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,
  audio: {
    src: "/assets/audio/cap62.mp3",
  },
  risposte: cap7.risposte,
};
