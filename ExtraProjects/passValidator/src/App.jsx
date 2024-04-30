import { useState } from 'react'
import validator from 'validator'
import './App.css'

function App() {

  const [errorMsg, setErrorMsg] = useState('')

  const validate = (value) => {

    if(validator.isStrongPassword(
      value, {
        minLength: 8,
        minSymbols: 1,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
      }
    )) {
      setErrorMsg('Strong Password')
    }
    else{
      setErrorMsg('week Password')
    }
  }
  
  return (
    <>
    <pre>
      <h1 className='text-2xl font-mono'>Password Strength Validator</h1>
      <input onChange={(e) => validate(e.target.value)} className='mt-10 bg-gray-50
       text-gray-900 rounded-lg w-72 p-2.5 '
       placeholder='Password' type="text" /><br/><br/>
       {errorMsg === '' ? null : 
       <span className='text-red-600 font-bold text-lg'>{errorMsg}</span>}
    </pre>
    </>
  )
}

export default App
