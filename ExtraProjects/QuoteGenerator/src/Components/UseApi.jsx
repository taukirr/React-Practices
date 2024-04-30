import React from 'react'
import { useState} from "react";

function UseApi () { 
    const [Quote, setQuote] = useState('')

    const fetchApi = () => {
        fetch("https://www.thaqalayn-api.net/api/random")
        .then((res) => res.json())
        .then((data) => setQuote({
          Book:data.book,
          Chapter: data.chapter,
          Author: data.author,
          Arabic: data.arabicText,
          English: data.englishText
        }))
    }

    return (
      <>
      <div className='w-max m-auto'>
      <h1 className='text-3xl text-white font-semibold'>Random Hadees Generator</h1>
        { Quote === '' ? 
        <div className='mt-5 p-2.5 bg-gray-200 shadow-lg rounded-lg'>
            <li>Welcome, to random Hadees Generator</li>
            <li>For Generate a random Hadees, you should have to click button given below</li>
        </div> :   
        <div className='mt-5 bg-gray-200 shadow-lg rounded-lg max-w-2xl'>
          <h2><span className='font-semibold'>Book : </span>{Quote.Book}</h2> <br />
          <h2><span className='font-semibold'>Chapter : </span>{Quote.Chapter}</h2> <br />
          <h2><span className='font-semibold'>Author : </span>{Quote.Author}</h2> <br />
          <h2><span className='font-semibold'>Hadees : </span>{Quote.Arabic}</h2><br />
          <h2><span className='font-semibold'>Translation : </span>{Quote.English}</h2>
        </div>
        }
      <button className='bg-blue-500 text-white rounded-xl p-1.5 mt-5 font-semibold
      hover:bg-blue-600' onClick={fetchApi}>click</button>
      </div>
      </>
    )
 }
export default UseApi