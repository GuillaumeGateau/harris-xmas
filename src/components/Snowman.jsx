import React from 'react';

const Snowman = () => (
  <svg
    width="120"
    height="160"
    viewBox="0 0 120 160"
    className="snowman"
  >
    {/* Head */}
    <circle cx="60" cy="40" r="20" fill="white" />
    {/* Body */}
    <circle cx="60" cy="90" r="30" fill="white" />
    {/* Base */}
    <circle cx="60" cy="150" r="40" fill="white" />
    {/* Eyes */}
    <circle cx="52" cy="35" r="3" fill="black" />
    <circle cx="68" cy="35" r="3" fill="black" />
    {/* Carrot Nose */}
    <path d="M60 40 L60 45 L70 42.5 Z" fill="orange" />
    {/* Mouth */}
    <path d="M50 48 Q60 55 70 48" fill="none" stroke="black" strokeWidth="2" />
    {/* Arms */}
    <line x1="25" y1="90" x2="95" y2="90" stroke="brown" strokeWidth="3" />
    {/* Buttons */}
    <circle cx="60" cy="75" r="3" fill="black" />
    <circle cx="60" cy="90" r="3" fill="black" />
    <circle cx="60" cy="105" r="3" fill="black" />
    {/* Scarf */}
    <path d="M40 60 Q60 70 80 60" fill="none" stroke="red" strokeWidth="5" />
    <path d="M75 60 L85 75" stroke="red" strokeWidth="5" />
  </svg>
);

export default Snowman;
