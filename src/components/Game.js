import React, {  useState, useEffect } from'react'
import Board from './Board'
import { connect } from 'react-redux'
import { calculateWinner } from '../calculateWinner'
import { confetti } from '../confetti'
import styles from './styles'
import { withStyles, Button }  from '@material-ui/core'
import firebase from 'firebase'

const Game=(props) => {

    const { token }= props.match.params
    const [gameData, setGameData]= useState({
        boardState: Array(9).fill(null),
        creatorToken: null,
        joineeToken: null,
        gameInfo: null,
        xIsNext: true,
        gamers: []
    })
    const { boardState, xIsNext }= gameData
    const { winner, winningSquares }= calculateWinner(boardState)
    useEffect(()=>{
        firebase
            .firestore()
            .collection('games')
            .where('gamers','array-contains',token)
            .onSnapshot(res=>{
                const gameData= res.docs[0].data()
                console.log(gameData)
                setGameData(gameData)
            })
    }, [])

    const clickHandler= (index) => {
        //if there is already a winner or square is already clicked and have a value inside it, or player not
        //eligible is clicking squares dont do anything
        if(winner || boardState[index] || (xIsNext && gameData.joineeToken === token) || 
            (!xIsNext && gameData.creatorToken === token))
            return;
        xIsNext ? boardState[index] = 'X' : boardState[index] = 'O'
        firebase
            .firestore()
            .collection('games')
            .doc(`${gameData.creatorToken}:${gameData.joineeToken}`)
            .set({
                ...gameData,
                boardState: boardState,
                xIsNext: !xIsNext
            })
    }
    const resetGame= () => {
        firebase
            .firestore()
            .collection('games')
            .doc(`${gameData.creatorToken}:${gameData.joineeToken}`)
            .set({
                ...gameData,
                boardState: Array(9).fill(null),
                xIsNext: true
            })
    }

    const { classes }=  props
    winner ? confetti.start() : confetti.stop()
    
    return (
        <div className={classes.container}>
            { gameData &&
                <React.Fragment>
                <div>friend id is: {props.friendToken}</div>
                <h2 className={classes.header}>
                    { winner ? 'Winner: ' + winner  : 
                        'Next is: ' + ( gameData && gameData.xIsNext ? 'X' : 'O' ) }
                </h2>
                <Button onClick={resetGame} variant="outlined" color="secondary" className={classes.newGameButton}>
                    Start New Game
                </Button>
                <Board squares={boardState} winningSquares={winningSquares} clickHandler={clickHandler}/>
                </React.Fragment>
            }
        </div>
    )

}
const mapStateToProps=(state) => {
    return {
        creatorToken: state.creatorToken,
        joineeToken: state.joineeToken
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Game))