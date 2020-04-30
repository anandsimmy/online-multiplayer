import React from'react'
import Square from './Square'

const style={
    border: '5px solid darkblue',
    borderRadius: '10px',
    width: '500px',
    height: '500px',
    margin: '20px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
}

const Board=({winningSquares, squares, clickHandler}) => (
    <div style={style}>
        {squares.map((squareValue, i) => (
            <Square isWinningSquare={winningSquares && winningSquares.includes(i)} key={i} value={squareValue} clickHandler={() => clickHandler(i)}/>
        ))}
    </div>
    )

export default Board