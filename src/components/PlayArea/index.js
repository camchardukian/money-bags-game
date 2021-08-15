import React, { useState, useEffect } from "react";
import NeutralSection from "../NeutralSection";
import "./styles.scss";
const PlayArea = () => {
  const [prizesRemaining, setPrizesRemaining] = useState([1, 2, 3, 4, 5, 6]);
  const [currentPrize, setCurrentPrize] = useState(0);
  const [isMovingToNextRound, setIsMovingToNextRound] = useState(true);
  useEffect(() => {
    if (isMovingToNextRound) {
      const randomIndex = Math.floor(prizesRemaining.length * Math.random());
      setCurrentPrize(() => {
        return prizesRemaining[randomIndex];
      });
      setPrizesRemaining(() => {
        return prizesRemaining.filter(prize => {
          return prize !== prizesRemaining[randomIndex];
        });
      });
      setIsMovingToNextRound(false);
    }
  }, [isMovingToNextRound, prizesRemaining]);
  const handleMoveToNextRound = () => {
    setIsMovingToNextRound(true);
  };
  return (
    <div className="play-area-container">
      <NeutralSection
        currentPrize={currentPrize}
        prizesRemaining={prizesRemaining}
      />
      <button type="button" onClick={handleMoveToNextRound}>
        test continue to next round
      </button>
    </div>
  );
};

export default PlayArea;
