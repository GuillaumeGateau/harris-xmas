import React, { useState, useRef, useEffect } from 'react';
import './Card.css';

const Card = ({ image, message, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const height = img.height * (400 / img.width); // Scale height based on 400px width
      setImageHeight(height);
    };
    img.src = image;
  }, [image]);

  const cardStyle = {
    height: `${imageHeight}px`
  };

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)} style={cardStyle}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} style={cardStyle}>
        <div className="card-front" style={cardStyle}>
          <img ref={imageRef} src={image} alt="Christmas Card" className="card-image" />
        </div>
        <div className="card-back" style={cardStyle}>
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
