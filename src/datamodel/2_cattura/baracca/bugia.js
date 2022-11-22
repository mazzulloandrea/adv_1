export default {
  titolo: "eremita",
  frase: `
    Dici un nome diverso dal tuo e aggiungi anche altre informazioni false.
    
    Lui si rialza e ti dice che si chiama Giakkos; è un eremita e vive da solo sui "colli sparsi".

    Giakkos ti suggerisce di ritornare dai soldati, secondo lui è la soluzione migliore per evitare i banditi che in questo posto sono davvero pericolosi.

    Non molto convinto, vieni accompagnato dall'eremita che pare conoscere benissimo quelle terre.
    **cornice**
    Dopo quasi un ora, nei pressi della strada principale, nascosti da alcune rocce, vedete la piccola carovana; Giakkos ti saluta augurandoti buona fortuna e spera che in futuro potrai divenire sincero.

    Ripensando alle parole dell'eremita, ti avvicini alle guardie attirando la loro attenzione.
    I soldati rimangono stupiti della tua presenza.
    
    Convinti che sei tornato per la troppa paura di queste terre, ti legano le mani e ti mettono sul carretto insieme agli altri.

    Tua sorella e gli altri ti guardano con aria interrogativa e, se avrai modo e tempo, forse racconterai loro della tua conoscenza.

    Ora il viaggio prosegue.
  `,

  audio: {
    src: "/assets/audio/bugia.mp3",
  },
  next: "dice",
  dice: {
    successo: "arrivo",
    fallimento: "arrivo",
    obiettivo: 14, // numero da raggiungere con il lancio dei dadi
    abilita: ["corpo", "mente", "spirito"], // quelle che non si devono usare devono essere escluse
    lanci: 3, // quanti lanci col dado
  },
};
