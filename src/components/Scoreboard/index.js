import React from 'react'
import './styles.scss'

const Scoreboard = ({ playerScores }) => {
    const { primaryPlayerScore, secondaryPlayerScore } = playerScores

    return (
        <div className="scoreboard-container">
            <div className="scoreboard-title">Scores</div>
            <div className="scores-container">
                <div className="secondary-player-score">Red: {secondaryPlayerScore}</div>
                <div className="primary-player-score">Green: {primaryPlayerScore}</div>
            </div>
        </div>
    )
}

export default Scoreboard
