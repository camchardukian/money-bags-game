import React from 'react'
import CurrentStatus from './CurrentStatus'
import PrizesRemaining from './PrizesRemaining'
import Scoreboard from '../Scoreboard'

import './styles.scss'

const NeutralSection = ({ currentPrize, prizesRemaining, activeChips, playerScores }) => {
    const { primaryPlayerChip, secondaryPlayerChip } = activeChips

    return (
        <div className="neutral-section-container">
            {secondaryPlayerChip && (
                <div className="secondary-player-chip">{secondaryPlayerChip}</div>
            )}
            <div className="neutral-area-center-section">
                <PrizesRemaining prizesRemainingArray={prizesRemaining} />
                <CurrentStatus
                    prize={currentPrize}
                    prizesRemaining={prizesRemaining}
                    playerScores={playerScores}
                />
                <Scoreboard playerScores={playerScores} />
            </div>
            {primaryPlayerChip && (
                <div className="primary-player-chip">{primaryPlayerChip}</div>
            )}
        </div>
    )
}

export default NeutralSection
