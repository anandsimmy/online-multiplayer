const styles= (theme) => ({
    container: {
        textAlign: 'center'
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
        marginTop: '2%',
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