import React,{useState} from 'react'
import stone from './stone.png'
import paper from './paper.png'
import scissor from './scissors.png'

function Game() {

 const [player, setPlayer] = useState(null)
 const [computer, setComputer] = useState(null)
 const [playerScore, setPlayerscore] = useState(0)
 const [computerScore, setComputerscore] = useState(0)

 const logic = (player, computer) => {
    if(player === computer) return 0

    if(
        (player==='ROCK' && computer==='SCISSORS') || (player==='SCISSORS' && computer=== 'PAPER')
        || (player==='PAPER' && computer==='ROCK')
    ){
        return 1
    }
    else{
        return 2
    }
 }

 const decision = (playerChoices) => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    const compChoices = choices[Math.floor(Math.random() * choices.length)]

    const result = logic(playerChoices, compChoices)
    if(result === 1) setPlayerscore(prev => prev+1)
    else if(result === 2) setComputerscore(prev => prev+1)
    
    setPlayer(playerChoices)
    setComputer(compChoices)
 }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200">
    <h1 className="text-2xl mb-8 text-green-500 uppercase">Welcome to Rock, Paper, Scissors Game</h1>
    <div className="flex space-x-4">
        <button className="btn-rock" onClick={() => decision("ROCK")}>
         <img className='w-10' src={stone} alt="" />    Rock
        </button>
        <button className="btn-paper" onClick={() => decision("PAPER")}>
         <img className='w-10' src={paper} alt="" />   Paper
        </button>
        <button className="btn-scissors" onClick={() => decision("SCISSORS")}>
         <img className='w-10' src={scissor} alt="" />   Scissors
        </button>
    </div>
    <div className="text-center mt-8">
        <p>Your choice: {player}</p>
        <p>Computer's choice: {computer}</p>
        <h2 className="text-2xl font-bold mt-4">Your Score: {playerScore}</h2>
        <h2 className="text-2xl font-bold">Computer Score: {computerScore}</h2>
    </div>
</div>

    </>
  )
}

export default Game