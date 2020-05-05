import React, { useState } from 'react'
import { withStyles, Paper, FormControl,Input, Button } from '@material-ui/core'
import generate from 'meaningful-string'
import { connect } from 'react-redux'
import styles from './styles'
import firebase from 'firebase'

const Home=(props) => {

    const { classes }= props
    const [joinGameToken, setJoinGameToken]= useState(null)

    const createNewGame= async() => {
        const options= {
            min: 6,
            max: 6,
            capsWithNumbers: true
        }
        const newGame={
            p1_token: generate.random(options),
            p2_token: generate.random(options)
        } 
        await firebase.firestore()
            .collection('games')
            .doc(`${newGame.p1_token}:${newGame.p2_token}`)
            .set({
                boardState: Array(9).fill(null),
                xIsNext: true,
                gameInfo: newGame,
                creatorToken: newGame.p1_token,
                joineeToken: newGame.p2_token,
                gamers:[newGame.p1_token, newGame.p2_token]
            })
        .then(()=>{
            props.dispatchTokens({
                creatorToken: newGame.p1_token,
                joineeToken: newGame.p2_token
            })
            props.history.push(`/game/${newGame.p1_token}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const joinGame=() => {
        props.history.push(`/${joinGameToken}`)
    }

    return (
        <div className={classes.homeContainer}>
            <Paper className={classes.paper}> 
                <Button variant='outlined' color='secondary' onClick={createNewGame}>
                    Create New Game
                </Button>
                <FormControl className={classes.inputContainer}>
                    <Input value={joinGameToken} onChange={(e)=>setJoinGameToken(e.target.value)} placeholder='Enter Game ID' />
                </FormControl>
                <Button clasName={classes.inputContainer} variant='outlined' color='secondary' onClick={joinGame}>
                    Join Friend's Game
                </Button>
            </Paper>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
            dispatchTokens: (tokenObj) => {
                dispatch({
                type:'tokens',
                payload: tokenObj
            })}
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Home))