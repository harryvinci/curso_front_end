import { useEffect, useState } from "react"

const tarefas = [
  { id: '1', title: 'Primeira tarefa' },
  { id: '1', title: 'Primeira tarefa' },
  { id: '1', title: 'Primeira tarefa' }
]

function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos') //API para testar busca de dados no React
      const resultadoFinal = await resultado.json()

      return resultadoFinal

    }

    buscarDados().then(res => setTarefas(res))

  }, [])

  return (
    <div>
      <h1>Buscando Dados - React</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (

            <div>
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ? <span><b> * Tarefa concluída</b></span> : null}
              </li>
  
            </div>
            
          )
        })}
      </ol>
    </div>
  )
}

export default App
