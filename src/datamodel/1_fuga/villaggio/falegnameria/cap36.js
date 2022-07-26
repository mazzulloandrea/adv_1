export default {
  step: 2,
  titolo: "Falegnameria",
  frase: `
    La mano del soldato passa a pochissimi centimetri da te... e ti afferra per il vestito.
    Grida immediatamente di averti preso ed entrano in falegnameria l'altra guardia e tuo fratellastro Denred.
    Il bastardo li sta aiutando.
    
    I soldati ti legano portandoti su di un carretto dove ci sono già tua sorella ed altri quattro ragazzi che conosci bene: Aaron, Alexis, Essertag e Gudrum.
    Incroci lo sguardo di Carcadena <<Pantelion perchè non mi hai ascoltata?>>.
    **cornice**
    Nella notte, tra le lamentele ed i pianti delle madri, il carretto inizia a muoversi mentre i soldati brontolano qualcosa sul volere del "Gran Generale" e che tra un anno, finito l'addestramento, ritornerete a casa.

    Sai bene che pochissimi sono ritornati... 
    e tuo fratellastro è uno di questi.
  `,
  audio: {
    src: "/assets/audio/cap36.mp3",
  },
  risposte: [
    {
      frase: "Preferisci parlare con Carcadena?",
      gioco: "audio",
      next: "sorella1",
    },
    {
      frase: "Preferisci parlare con qualcun altro delle reclute",
      gioco: "audio",
      next: "parlareAltri",
    },
  ],
};
