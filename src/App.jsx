import { useState } from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import './App.css'

const tarefas = [
  {id:1, titulo: "Estudar", categoria: "Estudos", prioridade: "alta" },
  {id:2, titulo: "Treinar", categoria: "Exercício", prioridade: "media" },
  {id:3, titulo: "Ler", categoria: "Estudos", prioridade: "baixa" },
  {id:4, titulo: "Correr", categoria: "Exercício", prioridade: "media" }
]

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen bg-slate-100">
    <Header />

    <main className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-xl font-bold text-slate-700 mb-6">
        Minhas tarefas ({tarefas.length})</h2>

      <section className="grid gap-4 sm:grid-cols-2">
        {tarefas.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            categoria={tarefa.categoria}
            prioridade={tarefa.prioridade}
          />
        ))}
      </section>
    </main>
   </div>
  )
}
