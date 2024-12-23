import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, message, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={image} alt="Christmas Card" className="card-image" />
        </div>
        <div className="card-back">
          <div className="card-content">
            <div>
              <h2 className="card-recipient">{name},</h2>
              <p className="card-message">{message}</p>
            </div>
            <div className="card-signature">
              <span>Love,</span>
              <span className="signature-name">William</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
