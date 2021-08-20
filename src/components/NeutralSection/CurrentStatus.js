import React from 'react'
import './styles.scss'
const CurrentStatus = ({ prize = 0 }) => {
    if (prize) {
        return (
            <div className="current-prize-container">
                <div className="current-prize-text">Current Prize</div>
                <div className="neutral-chip">{prize}</div>
            </div>
        )
    }
    return <div className="game-over-text">GAME OVER</div>
}

export default CurrentStatus
