export default {
  titolo: "Arrivo",
  frase: `
    La strada principale prosegue per i "colli sparsi" ma voi siete fermi, già da alcuni minuti, davanti ad un arbusto morto, senza capirne il motivo.
    I soldati discutono il da farsi dopodichè due di loro si allontano oltre l'albero secco.
    **cornice**
    Alcuni minuti dopo le guardie ritornano e borbottano qualcosa; pochi istanti e arriva l'ordine.
    Bisogna abbandonare la via principale per seguire il sentiero non battuto. 
  `,

  audio: {
    src: "/assets/audio/arrivo.mp3",
  },
  gioco: "gioco9",
  gioco9: {
    successo: "terrarossa",
    fallimento: "terrarossa",
    durata: 25,
    combinazione: "essertag",
    type: "domanda",
    domanda: "Come si chiama il ragazzo morto?",
  },
};
