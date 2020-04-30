import React, {  useState } from'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const style={
    width: '200px',
    textAlign: 'center',
    margin: '20px auto',
    marginTop: '5%'
}

const Game=() => {

    const [history, setHistory]= useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber]= useState(0)
    const [xIsNext, setXIsNext]= useState(true)
    const { winner, winningSquares }= calculateWinner(history[history.length - 1])
    const clickHandler= (index) => {
        const boardHistory= history.slice(0, stepNumber + 1)
        const squares= boardHistory[boardHistory.length - 1]
        if(winner || squares[index])
            return;
        xIsNext ? squares[index] = 'X' : squares[index] = 'O'
        setHistory([...boardHistory, squares])
        setStepNumber(stepNumber+1)
        setXIsNext(!xIsNext)
    }

    return (
    <React.Fragment>
        <div style={style}>
           { winner ? 'Winner: ' + winner  : 
            'Next is: ' + ( xIsNext ? 'X' : 'O' )}
        </div>
        <Board winningSquares={winningSquares} squares={history[history.length - 1]} clickHandler={clickHandler}/>
    </React.Fragment>
    )
}

export default Game