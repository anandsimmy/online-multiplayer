import React from 'react'
import { withStyles, Paper, FormControl,Input, Button } from '@material-ui/core'
import styles from './styles'

const Home=(props) => {

    const { classes }= props

    const createNewGame=() => {
    
    }

    return (
        <div className={classes.homeContainer}>
            <Paper className={classes.paper}> 
                <Button variant='outlined' color='secondary' onClick={createNewGame}>
                    Create New Game
                </Button>
                <FormControl className={classes.inputContainer}>
                    <Input placeholder='Enter Game ID'></Input>
                </FormControl>
                <Button clasName={classes.inputContainer} variant='outlined' color='secondary'>
                    Join Friend's Game
                </Button>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Home)