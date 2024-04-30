import { useState, useEffect } from 'react'
import Dice from './Components/Dice'
// import './App.css'

function App() {

  const [diceValue , setDicevalue] = useState()
  const [diceValue2 , setDicevalue2] = useState()
  const [rolling, setRolling] = useState(false)

    useEffect(() => {
        if(rolling) {
            const timeout = setTimeout(() => {
                setRolling(false)
            }, 500)
        return () => clearTimeout(timeout)
        }
    }, [rolling])

    const throwdice = () => {
      setRolling(true)
      setTimeout(() => {
       const newValue = Math.floor(Math.random() * 6) + 1
       const newValue2 = Math.floor(Math.random() * 6) + 1
       setDicevalue(newValue)
       setDicevalue2(newValue2)
      }, 500)
  }

  return (
     <>
     <div className='flex justify-center items-center'>
     <div className='bg-blue-300 rounded-lg min-w-72 p-2.5 shadow-2xl'>
      <h1 className='text-3xl font-medium select-none text-center'>Throw The Dice</h1>
     <Dice diceValue={diceValue}/>
     <Dice diceValue={diceValue2}/>
     </div>
     </div>
     <div className='flex items-center justify-center mt-5'>
      <button className='bg-gray-800 text-white rounded-xl 
      p-1 shadow-2xl' onClick={throwdice}>click to roll</button>
      </div>
     </>
  )
}

export default App
