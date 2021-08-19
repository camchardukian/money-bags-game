import React from 'react'
import './styles.scss'
const CurrentPrize = ({ prize = 0 }) => {
    return (
        <div className="current-prize-container">
            <div className="current-prize-text">Current Prize</div>
            <div className="neutral-chip">{prize}</div>
        </div>
    )
}

export default CurrentPrize
