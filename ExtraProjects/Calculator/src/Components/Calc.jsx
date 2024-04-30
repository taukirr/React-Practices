import React from 'react'
import { useState } from 'react'

function Calc() {

    const [display, setDisplay] = useState('')

    const handleClick = (value) => {
        if(value === '='){
            try{
                const result = eval(display)
                setDisplay(result.toString())
            }
            catch(error){
                setDisplay('Error')
            }
        }
        else{
            setDisplay((prevDisplay) => prevDisplay + value)
        }
    }

    const handleClear = () =>
    {
        setDisplay('')
    }

  return (
    <>
     <div class="container mx-auto mt-10 max-w-md">
  <div class="rounded-md bg-gray-100 p-4 shadow-md">
    <input type="text" value={display} readonly class="mb-2 w-full rounded-md border border-gray-300 p-2 text-right focus:border-blue-500 focus:outline-none" />
    <div class="grid grid-cols-4 gap-2">
      <button onClick={() => handleClear()} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">AC</button>
      <button onClick={() => handleClick('+')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">+/-</button>
      <button onClick={() => handleClick('%')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">%</button>
      <button onClick={() => handleClick('/')} class="rounded-md bg-yellow-400 p-2 text-black hover:bg-yellow-500">÷</button>
      <button onClick={() => handleClick('7')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">7</button>
      <button onClick={() => handleClick('8')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">8</button>
      <button onClick={() => handleClick('9')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">9</button>
      <button onClick={() => handleClick('*')} class="rounded-md bg-yellow-400 p-2 text-black hover:bg-yellow-500">x</button>
      <button onClick={() => handleClick('4')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">4</button>
      <button onClick={() => handleClick('5')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">5</button>
      <button onClick={() => handleClick('6')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">6</button>
      <button onClick={() => handleClick('-')} class="rounded-md bg-yellow-400 p-2 text-black hover:bg-yellow-500">-</button>
      <button onClick={() => handleClick('1')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">1</button>
      <button onClick={() => handleClick('2')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">2</button>
      <button onClick={() => handleClick('3')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">3</button>
      <button  onClick={() => handleClick('+')} class="rounded-md bg-yellow-400 p-2 text-black hover:bg-yellow-500">+</button>
      <button onClick={() => handleClick('0')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">0</button>
      <button onClick={() => handleClick('00')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">00</button>
      <button onClick={() => handleClick('.')} class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">.</button>
      <button onClick={() => handleClick('=')} class="rounded-md bg-yellow-400 p-2 text-black hover:bg-yellow-500">=</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Calc