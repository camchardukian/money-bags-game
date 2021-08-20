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
    const [activeChips, setActiveChips] = useState({
        primaryPlayerChip: null,
        secondaryPlayerChip: null,
    })
    const [playerScores, setPlayerScores] = useState({
        primaryPlayerScore: 0,
        secondaryPlayerScore: 0,
    })

    useEffect(() => {
        if (activeChips.primaryPlayerChip !== null) {
            if (activeChips.primaryPlayerChip > activeChips.secondaryPlayerChip) {
                setPlayerScores((prevState) => {
                    return {
                        ...prevState,
                        primaryPlayerScore:
                            prevState.primaryPlayerScore +
                            activeChips.primaryPlayerChip +
                            activeChips.secondaryPlayerChip +
                            currentPrize,
                    }
                })
                setCurrentPrize(0)
            } else if (activeChips.primaryPlayerChip < activeChips.secondaryPlayerChip) {
                setPlayerScores((prevState) => {
                    return {
                        ...prevState,
                        secondaryPlayerScore:
                            prevState.secondaryPlayerScore +
                            activeChips.primaryPlayerChip +
                            activeChips.secondaryPlayerChip +
                            currentPrize,
                    }
                })
                setCurrentPrize(0)
            } else {
                setCurrentPrize(() => {
                    return (
                        activeChips.primaryPlayerChip +
                        activeChips.secondaryPlayerChip +
                        currentPrize
                    )
                })
            }
            setActiveChips({ primaryPlayerChip: null, secondaryPlayerChip: null })
        }
    }, [activeChips, currentPrize])

    useEffect(() => {
        if (isMovingToNextRound) {
            const randomIndex = Math.floor(prizesRemaining.length * Math.random())
            setCurrentPrize((prevState) => {
                return prevState + prizesRemaining[randomIndex]
            })
            setPrizesRemaining(() => {
                return prizesRemaining.filter((prize) => {
                    return prize !== prizesRemaining[randomIndex]
                })
            })
            setIsMovingToNextRound(false)
        }
    }, [currentPrize, isMovingToNextRound, prizesRemaining])

    const handleSelectPrimaryPlayerChip = (selectedChip) => {
        setPrimaryPlayerChips(() => {
            return primaryPlayerChips.filter((chip) => {
                return selectedChip !== chip
            })
        })
        setActiveChips(() => {
            return {
                primaryPlayerChip: selectedChip,
                secondaryPlayerChip: null,
            }
        })
        handleSelectSecondaryPlayerChip()
    }
    const handleSelectSecondaryPlayerChip = () => {
        const randomIndex = Math.floor(prizesRemaining.length * Math.random())
        setSecondaryPlayerChips(() => {
            return secondaryPlayerChips.filter((chip) => {
                return chip !== secondaryPlayerChips[randomIndex]
            })
        })
        setActiveChips((prevState) => {
            return {
                ...prevState,
                secondaryPlayerChip: secondaryPlayerChips[randomIndex],
            }
        })
        setIsMovingToNextRound(true)
    }

    return (
        <div className="play-area-container">
            <SecondaryPlayerSection chipsRemaining={secondaryPlayerChips} />
            <NeutralSection
                currentPrize={currentPrize}
                prizesRemaining={prizesRemaining}
                activeChips={activeChips}
                playerScores={playerScores}
            />
            <PrimaryPlayerSection
                chipsRemaining={primaryPlayerChips}
                onSelectChip={handleSelectPrimaryPlayerChip}
            />
        </div>
    )
}

export default PlayArea
