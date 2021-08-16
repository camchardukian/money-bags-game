import React from 'react'
import './styles.scss'

const PrimaryPlayerSection = ({ chipsRemaining = [], onSelectChip }) => {
    return (
        <div className="primary-section-container">
            <div className="player-chips-container">
                {chipsRemaining.map(chip => {
                    return (
                        <div
                            className="player-chip"
                            key={chip}
                            onClick={() => onSelectChip(chip)}
                        >
                            {chip}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PrimaryPlayerSection
