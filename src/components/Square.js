import React from'react'

const style= {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const winnerStyle= {
    background: 'yellow'
}

const Square=({isWinningSquare, value, clickHandler}) => (
    <button style={isWinningSquare ? {...style,...winnerStyle} : style} onClick={clickHandler}>
        {value}
    </button>
)

export default Square