import React from 'react'


export default function Form({registerForm}) {

    const prev = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={prev} className='max-w-sm mx-auto'>

      <h1 className='text-3xl text-black font-semibold'>Login</h1>
      <div class="mt-10 group relative z-0 mb-5 w-full">
            <input 
                type="email" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={email}
                />

            <label
             for="email" 
             className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Email address</label>
        </div>

        <div class="mt-10 group relative z-0 mb-5 w-full">
            <input 
                type="password" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={password}
                />
            <label for="password" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Password</label>
        </div>

        <div className='m-9'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white rounded-lg
            font-bold py-2 px-4'>Submit</button>

        <div className='flex justify-end -mt-10'>
            <button onClick={registerForm} className="text-blue-600 bg-blue-100 font-medium align-e rounded-lg text-sm w-full sm:w-auto px-5 mr-10 py-2.5 text-center">Register</button>
        </div>
        </div>
    </form>
  )
}
