import React, { useState } from 'react';
import './Card.css';

const Card = ({ name, passage, signoff, coverImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="card-wrapper">
            <h2 className="card-name">{name}</h2>
            <div 
                className={`card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="card-inner">
                    <div className="card-front">
                        <img 
                            src={coverImage || 'https://placehold.co/300x400/red/white?text=Merry+Christmas'} 
                            alt={`Christmas card for ${name}`}
                        />
                    </div>
                    <div className="card-back">
                        <div className="card-content">
                            <p className="passage">{passage}</p>
                            <p className="signoff">{signoff}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
