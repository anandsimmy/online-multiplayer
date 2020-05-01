import React, {  useState } from'react'
import Board from './Board'
import { calculateWinner } from '../helpers'
import { confetti } from '../confetti'
import styles from './styles'
import { withStyles, Button }  from '@material-ui/core';

const Game=(props) => {

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
    const resetGame= () => {
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXIsNext('X')
    }

    const { classes }=  props

    winner ? confetti.start() : confetti.stop()
    
    return (
        <div className={classes.container}>
            <h2 className={classes.header}>
                { winner ? 'Winner: ' + winner  : 
                    'Next is: ' + ( xIsNext ? 'X' : 'O' ) }
            </h2>
            <Button onClick={resetGame} variant="outlined" color="secondary" className={classes.newGameButton}>
                Start New Game
            </Button>
            <Board winningSquares={winningSquares} squares={history[history.length - 1]} clickHandler={clickHandler}/>
        </div>
    )
}

export default withStyles(styles)(Game)