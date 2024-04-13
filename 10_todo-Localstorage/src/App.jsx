import { useState, useEffect} from 'react'
// import './App.css'
import { TodoProvider } from './Context/TodoContext' 
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  
  const [items, setItems] = useState([])

  const addTodo = (todoName) => {
    setItems((prev) => [{id: Date.now(), ...todoName}, ...prev])
  }

  const updateTodo = (id, todoName) => {
    setItems((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todoName : prevTodo)))
  }

  const deleteTodo = (id) => {
    setItems((prev) => prev.filter((todoName) => todoName.id !== id))
  }

  const checkMark = (id) => {
    setItems((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, checkStatus: !prevTodo.checkStatus} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('storeLocally'))

    if(todos && todos.length > 0)
    {
      setItems(todos)
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('storeLocally', JSON.stringify(items))
  }, [items])

  return (
    <TodoProvider value={{addTodo, items ,updateTodo, deleteTodo, checkMark}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {items.map((todoName) => (
                          <div key={todoName.id}
                          className='w-full'
                          >
                            <TodoItem todoName={todoName} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
