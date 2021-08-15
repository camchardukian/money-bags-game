import React from "react";
import "./styles.scss";
const PrizesRemaining = ({ prizesRemainingArray = [] }) => {
  return (
    <div className="prizes-remaining-container">
      Prizes Remaining are:
      {prizesRemainingArray.map(number => {
        return <div key={number}>{number}</div>;
      })}
    </div>
  );
};

export default PrizesRemaining;
