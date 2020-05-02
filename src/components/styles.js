const styles= (theme) => ({
    container: {
        textAlign: 'center'
    },
    homeContainer: {
        textAlign: 'center',
        width: '20%',
        margin: '10% auto',
        [theme.breakpoints.between('xs','md')]: {
            width:'70%',
            marginTop: '20%'
        }
    },
    paper:{
        padding: '20px'
    },
    buttonNewGame: {
        color: '#e1b382',
        border: '1px solid #e1b382'
    },
    inputContainer:{
        display: 'block',
        padding: '10px',
        paddingTop: '35px'
    },
    header: {
        width: '200px',
        height: '50px',
        margin: '0 auto',
        marginTop: '3%',
        [theme.breakpoints.between('xs','md')]: {
            marginTop: '18%'
        }
    },
    newGameButton: {
        borderRadius: '20px',
        marginTop: '2%',
        [theme.breakpoints.between('xs','md')]: {
            marginTop: '9%'
        }
    },
    boardStyle: {
        border: '5px solid darkblue',
        borderRadius: '10px',
        width: '500px',
        height: '500px',
        margin: '20px auto',
        display: 'grid',
        marginTop: '4%',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
        [theme.breakpoints.between('xs','md')]: {
            width: '300px',
            height: '300px',
            marginTop: '17%',
            background: 'darkblue'
        }
    }
})


export default styles