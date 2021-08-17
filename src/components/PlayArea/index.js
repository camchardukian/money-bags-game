import React, { useState, useEffect } from 'react'
import NeutralSection from '../NeutralSection'
import PrimaryPlayerSection from '../PrimaryPlayerSection'
import SecondaryPlayerSection from '../SecondaryPlayerSection'
import './styles.scss'

const PlayArea = () => {
    const [prizesRemaining, setPrizesRemaining] = useState([1, 2, 3, 4, 5, 6])
    const [currentPrize, setCurrentPrize] = useState(0)
    const [isMovingToNextRound, setIsMovingToNextRound] = useState(true)
    const [primaryPlayerChips, setPrimaryPlayerChips] = useState([1, 2, 3, 4, 5, 6])
    const [secondaryPlayerChips, setSecondaryPlayerChips] = useState([1, 2, 3, 4, 5, 6])

    useEffect(() => {
        if (isMovingToNextRound) {
            const randomIndex = Math.floor(prizesRemaining.length * Math.random())
            setCurrentPrize(() => {
                return prizesRemaining[randomIndex]
            })
            setPrizesRemaining(() => {
                return prizesRemaining.filter((prize) => {
                    return prize !== prizesRemaining[randomIndex]
                })
            })
            setIsMovingToNextRound(false)
        }
    }, [isMovingToNextRound, prizesRemaining])

    const handleSelectSecondaryPlayerChip = () => {
        const randomIndex = Math.floor(prizesRemaining.length * Math.random())
        setSecondaryPlayerChips(() => {
            return secondaryPlayerChips.filter((chip) => {
                return chip !== secondaryPlayerChips[randomIndex]
            })
        })
        setIsMovingToNextRound(true)
    }

    const handleSelectPrimaryPlayerChip = (selectedChip) => {
        setPrimaryPlayerChips(() => {
            return primaryPlayerChips.filter((chip) => {
                return selectedChip !== chip
            })
        })
        handleSelectSecondaryPlayerChip()
    }
    return (
        <div className="play-area-container">
            <SecondaryPlayerSection chipsRemaining={secondaryPlayerChips} />
            <NeutralSection
                currentPrize={currentPrize}
                prizesRemaining={prizesRemaining}
            />
            <PrimaryPlayerSection
                chipsRemaining={primaryPlayerChips}
                onSelectChip={handleSelectPrimaryPlayerChip}
            />
        </div>
    )
}

export default PlayArea
