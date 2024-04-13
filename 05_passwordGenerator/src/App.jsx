import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [len, setLen] = useState(6)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  const passGen = useCallback(() =>{
    let pasWord = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "~!@#$%^&*_-+="

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pasWord += str.charAt(char)
    }
    setPass(pasWord)
  }, [len, num, char, setPass])

  const copyPassToClip = useCallback(() => {
    refpass.current?.select()
    refpass.current?.setSelectionRange(0, 16)
    window.navigator.clipboard.writeText(pass)
  }, [pass])


  useEffect(() => {
    passGen()
  }, [len, num, char, passGen])

  const refpass = useRef(null)

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-lg rounded-lg my-8 px-4 py-3 text-yellow-500 bg-gray-700'>
      <h1 className='text-white text-center mb-4 mt-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={refpass}/>
        <button onClick={copyPassToClip} className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={16} value={len} onChange={(e) => setLen(e.target.value)} className='cursor-pointer'/>
          <label htmlFor="length">length : {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={num} id='numInp' onChange={() => setNum((prev) => !prev)}/>
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" defaultChecked={char} id='charInp' onChange={() => setChar((prev) => !prev)}/>
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
