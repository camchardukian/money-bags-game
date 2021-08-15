import React from "react";
import "./styles.scss";
const CurrentPrize = ({ prize = 0 }) => {
  return (
    <div className="current-prize-container">CurrentPrize is: {prize}</div>
  );
};

export default CurrentPrize;
