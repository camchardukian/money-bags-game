import React, { useState, useEffect } from "react";
import CurrentPrize from "./CurrentPrize";
import PrizesRemaining from "./PrizesRemaining";

import "./styles.scss";

const NeutralSection = ({ currentPrize, prizesRemaining }) => {
  return (
    <div className="neutral-section-container">
      Neutral Section
      <CurrentPrize prize={currentPrize} />
      <PrizesRemaining prizesRemainingArray={prizesRemaining} />
    </div>
  );
};

export default NeutralSection;
