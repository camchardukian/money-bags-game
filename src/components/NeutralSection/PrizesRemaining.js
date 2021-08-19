import React from 'react'
import './styles.scss'
const PrizesRemaining = ({ prizesRemainingArray = [] }) => {
    return (
        <div className="prizes-remaining-container">
            <div className="prizes-remaining-title">Prizes Remaining</div>
            <div className="remaining-neutral-chips-list">
                {prizesRemainingArray.map((number) => {
                    return (
                        <div className="remaining-neutral-chip-container">
                            <div className="neutral-chip" key={number}>
                                {number}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PrizesRemaining
