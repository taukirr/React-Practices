import { useState } from 'react'
import Form from './Components/Form'
import RegisterForm from './Components/RegisterForm'

function App() {
  
  const [callRegister, setCallRegister] = useState(false)
  const [callLogin , setCallLogin] = useState(true)

  const handleRegister = () => {
    setCallRegister(true)
    setCallLogin(false)
  }

  const handleLogin = () => {
    setCallRegister(false)
    setCallLogin(true)
  }

  return (
    <div>
      {callLogin && <Form registerForm={handleRegister} />}
      {callRegister && <RegisterForm loginForm={handleLogin}/>}
    </div>
  )
}
  
export default App
