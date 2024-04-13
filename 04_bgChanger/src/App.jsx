import { useState } from "react"


function App() {

  const bgchanger = () => {
    const hex = "0123456789ABCDEF"
    let nColor = "#"
    for (let i = 0; i<6; i++) {
      nColor += hex[Math.floor(Math.random() * 16)]
    }
    setColor(nColor)
  }
  const [color, setColor] = useState('gray')

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap gap-3 justify-center shadow-lg px-3 py-2 rounded-full bg-white">
      <button onClick={bgchanger} className='outline-none px-4 py-1 shadow-lg rounded-full bg-slate-300'>Generate Random Color</button>
      </div>
      </div>
    </div>
    
  )
}

export default App
