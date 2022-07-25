const Risposte = ({ data, onend }) => {
  return (
    <div>
      {data.map((el) => <p onclick={() => onend(el.gioco)}>{el.frase}</p>)}
    </div>
  )
}

export default Risposte;