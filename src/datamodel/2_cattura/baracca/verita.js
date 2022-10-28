export default {
  titolo: "eremita",
  frase: `
    Dici che ti chiami Pantelion e spieghi la storia dei soldati e del giorno del raccolto.

    Lui si chiamata Giakkos, ed è un eremita che vive da solo nei colli sparsi.

    Giakkos si dimostra ospitale e, dopo averti offerto un poco di cibo ed un sorso d'acqua, ti suggerisce di ritornare dai soldati; secondo lui è la soluzione migliore per evitare i banditi che in questo posto sono davvero pericolosi.

    Non molto convinto, vieni accompagnato dall'eremita che pare conoscere benissimo quelle terre.
    **cornice**
    Dopo quasi un ora, nei pressi della strada principale nascosti da alcune rocce, vedete la piccola carovana; Giakkos ti saluta augurandoti buona fortuna e, con alcuni gesti e parole che sembrano magici, conclude una preghiera.
    Poi poggia le mani sul tuo petto, senti un beneficio molto piacevole e con leggerezza ti allontani.

    Attirando la loro attenzione, ti avvicini alle guardie che rimangono stupite della tua presenza.
    
    Convinte che sei tornato per la troppa paura di queste terre, ti legano le mani e ti mettono sul carretto insieme agli altri.

    Tua sorella e gli altri ti guardano con aria interrogativa e se avrai modo e tempo forse racconterai loro della tua conoscenza.

    Ora il viaggio prosegue.
  `,

  audio: {
    src: "/assets/audio/cap7.mp3", // todo
  },
  risposte: [
    {
      frase: "Corpo",
      abilita: "corpo",
      next: "arrivo",
      icon: "corpo",
    },
    {
      frase: "Mente",
      abilita: "mente",
      next: "arrivo",
      icon: "mente",
    },
    {
      frase: "Spirito",
      abilita: "spirito",
      next: "arrivo",
      icon: "spirito",
    }
  ]

}