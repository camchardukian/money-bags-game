import React from 'react'
import './styles.scss'

const SecondaryPlayerSection = ({ chipsRemaining = [] }) => {
    return (
        <div className="secondary-section-container">
            <div className="player-chips-container">
                {chipsRemaining.map((chip) => {
                    return (
                        <div className="player-chip" key={chip}>
                            {chip}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SecondaryPlayerSection
