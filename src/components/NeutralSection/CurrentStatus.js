import React from 'react'
import './styles.scss'
const CurrentStatus = ({ prize = 0, prizesRemaining = [], playerScores }) => {
    if (prize) {
        return (
            <div className="current-prize-container">
                <div className="current-prize-text">Current Prize</div>
                <div className="neutral-chip">{prize}</div>
            </div>
        )
    } else if (prizesRemaining.length) {
        return <div></div>
    }
    return (
        <div className="game-over-text">
            {playerScores.primaryPlayerScore > playerScores.secondaryPlayerScore
                ? 'Green wins!'
                : playerScores.primaryPlayerScore < playerScores.secondaryPlayerScore
                ? 'Red wins!'
                : 'Draw'}
        </div>
    )
}

export default CurrentStatus
