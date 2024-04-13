import React from 'react'


function Cards({userName, btnTxt="vist me", img="https://images.unsplash.com/photo-1564287531351-815cc2d36011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D"}) {
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
           Heaven on the Earth
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold bg-gray-400">
            {btnTxt}
          </button>
        </div>
      </div>
  )
}

export default Cards