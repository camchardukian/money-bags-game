import React from 'react'
import CurrentPrize from './CurrentPrize'
import PrizesRemaining from './PrizesRemaining'
import './styles.scss'

const NeutralSection = ({ currentPrize, prizesRemaining, activeChips }) => {
    console.log('activeChips', activeChips)
    const { primaryPlayerChip, secondaryPlayerChip } = activeChips
    return (
        <div className="neutral-section-container">
            {secondaryPlayerChip && (
                <div className="secondary-player-chip">{secondaryPlayerChip}</div>
            )}
            <div className="neutral-area-center-section">
                <PrizesRemaining prizesRemainingArray={prizesRemaining} />
                <CurrentPrize prize={currentPrize} />
            </div>
            {primaryPlayerChip && (
                <div className="primary-player-chip">{primaryPlayerChip}</div>
            )}
        </div>
    )
}

export default NeutralSection
