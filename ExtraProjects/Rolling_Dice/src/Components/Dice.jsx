    import React, {useState, useEffect} from 'react'

    function Dice({ diceValue }) {

    return (
        <>
        <div className='mt-5 container flex items-end justify-center'>
            <svg viewBox='0 0 100 100' width='100' height='100'>
            <rect x="0" y="0" width="100" rx='15' ry='15' height="100" fill="#e7fae1" stroke="#000000" strokeWidth="2" />
            {diceValue === 1 && <circle cx="50" cy="50" r="8" fill="#000000" />}
            {diceValue === 2 && (
            <>
                <circle cx="30" cy="70" r="8" fill="#000000" />
                <circle cx="70" cy="30" r="8" fill="#000000" />
            </>
            )}
            {diceValue === 3 && (
            <>
                <circle cx="30" cy="70" r="8" fill="#000000" />
                <circle cx="50" cy="50" r="8" fill="#000000" />
                <circle cx="70" cy="30" r="8" fill="#000000" />
            </>
            )}
            {diceValue === 4 && (
            <>
                <circle cx="30" cy="30" r="8" fill="#000000" />
                <circle cx="70" cy="30" r="8" fill="#000000" />
                <circle cx="30" cy="70" r="8" fill="#000000" />
                <circle cx="70" cy="70" r="8" fill="#000000" />
            </>
            )}
            {diceValue === 5 && (
            <>
                <circle cx="30" cy="30" r="8" fill="#000000" />
                <circle cx="70" cy="30" r="8" fill="#000000" />
                <circle cx="30" cy="70" r="8" fill="#000000" />
                <circle cx="70" cy="70" r="8" fill="#000000" />
                <circle cx="50" cy="50" r="8" fill="#000000" />
            </>
            )}
            {diceValue === 6 && (
            <>
                <circle cx="30" cy="30" r="8" fill="#000000" />
                <circle cx="70" cy="30" r="8" fill="#000000" />
                <circle cx="30" cy="70" r="8" fill="#000000" />
                <circle cx="70" cy="70" r="8" fill="#000000" />
                <circle cx="30" cy="50" r="8" fill="#000000" />
                <circle cx="70" cy="50" r="8" fill="#000000" />
            </>
            )}
        </svg>
        </div>
        </>
    )
    }

    export default Dice