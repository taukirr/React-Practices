// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  // let myObj = {
  //   name : "Karbala",
  //   country : "Iraq",
  //   owner : "Imam_Hussain_a",
  //   }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is React using Tailwind CSS</h1>
      <Cards userName="Karbala" btnTxt= "click me"/>
      <Cards userName="Haram Mola Abbas (a.s.)" img="https://images.unsplash.com/photo-1564287535259-91d01d9a634b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D"/>
    </>
  )
}

export default App
