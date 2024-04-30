import React from 'react'
import { useState } from 'react'
import Coin from './back.jpg'
import Coin from './front.jpg'

function Tosscoin(coins) {

    const [head, setHead] = useState(0)
    const [totalFlip, setTotalflip] = useState(0)
    const [currentFace, setCurrentface] = useState(null)

    const choice = (arr) => {
        const store = Math.floor(Math.random() * arr.length)
        return arr[store]
    }

    const flip = () => {
        const newFlip = choice(coins)
        setCurrentface(newFlip)
        setTotalflip(prev => prev + 1)
        setHead(prev => prev + (newFlip.side === 'head' ? 1 : 0))
    }

  return (
    <>
    <div>
      <h2>Let's flip a coin</h2>
      {currentFace && <Coin info={currentFace} />}
      <button onClick={flip}>Flip Me!</button>
      <p>
        Out of {totalFlip} flips, there have been {head} heads and{' '}
        {totalFlip - head} tails
      </p>
    </div>
    </>
  )
}

Tosscoin.defaultProps = {
    coins:[
        {
            side: 'head',
            image: require('./front.jpg'),
        },
        {
            side: 'tails',
            image: require('./back.jpg'),
        }
    ]
}

export default Tosscoin