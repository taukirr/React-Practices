import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
        
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })

  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>Github Followers : {data.followers}
    <img className='text-center' src="{data.avatar_url}" alt="GIT PROFILE IMG" width={300}/>
    </div>
  )
}

export default Github

export const gitapiLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}