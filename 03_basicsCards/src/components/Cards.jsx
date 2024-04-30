import React from 'react'


function Cards({userName, details ,btnTxt="vist me", img, extraTxt="terms and contions applied"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={img}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName}</h1>
          <p className="mt-2 text-sm text-gray-300">
           {details}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold bg-gray-400">
          {btnTxt}
          </button>
          <p className='text-slate-600 mr-20'>{extraTxt}</p>
        </div>
      </div>
  )
}

export default Cards