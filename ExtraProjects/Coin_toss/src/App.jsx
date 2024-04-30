import { useState } from 'react'
import './App.css'
import Tosscoin from './Components/Tosscoin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tosscoin/>
    </>
  )
}

export default App
