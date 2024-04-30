import React from 'react'

export default function RegisterForm({
    loginForm
}) 
{
    const prevent = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={prevent} className='max-w-sm mx-auto'>
        <h1 className='text-black text-3xl font-semibold'>Register From</h1>

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

        <div class="mt-10 group relative z-0 mb-5 w-full">
            <input 
                type="confirmPass" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={cPassword}
                />
            <label for="confirmPass" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Confirm Password</label>
        </div>

        <div className='grid md:grid-cols-2 md:gap-6'>
        <div class="mt-6 group relative z-0 mb-5 w-full">
            <input 
                type="fName" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={fName}
                />
            <label for="fName" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">First Name</label>
        </div>

        <div class="mt-6 group relative z-0 mb-5 w-full">
            <input 
                type="lName" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={lName}
                />
            <label for="lName" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Last Name</label>
        </div>
        </div>

        <div className='grid md:grid-cols-2 md:gap-6'>
        <div class="mt-6 group relative z-0 mb-5 w-full">
            <input 
            type="phoneNumber"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
            // value={phoneNumber}
            />
            <label for="phoneNumber" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Phone Number</label>
        </div>

        <div class="mt-6 group relative z-0 mb-5 w-full">
            <input 
                type="company" 
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required 
                // value={company}
                />
            <label for="company" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Company</label>
        </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        <div className='flex justify-end -mt-10'>
            <button onClick={loginForm} className="text-blue-600 bg-blue-100 font-medium align-e rounded-lg text-sm w-full sm:w-auto px-5 mr-10 py-2.5 text-center">Login</button>
        </div>
    </form>  
  )
}
