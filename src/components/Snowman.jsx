import React from "react";

const Snowman = () => (
  <svg
    width="150"
    height="225"
    viewBox="0 0 200 300"
    xmlns="http://www.w3.org/2000/svg"
    className="snowman"
  >
    {/* Snow Base */}
    <ellipse cx="100" cy="290" rx="90" ry="30" fill="rgba(255, 255, 255, 0.8)" />

    {/* Bottom Snowball */}
    <circle
      cx="100"
      cy="200"
      r="50"
      fill="url(#snowGradient)"
      stroke="rgba(0, 0, 0, 0.1)"
      strokeWidth="1"
    />

    {/* Middle Snowball */}
    <circle
      cx="100"
      cy="120"
      r="40"
      fill="url(#snowGradient)"
      stroke="rgba(0, 0, 0, 0.1)"
      strokeWidth="1"
    />

    {/* Head */}
    <circle
      cx="100"
      cy="50"
      r="30"
      fill="url(#snowGradient)"
      stroke="rgba(0, 0, 0, 0.1)"
      strokeWidth="1"
    />

    {/* Gradient for Snowman */}
    <defs>
      <radialGradient id="snowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="lightblue" />
      </radialGradient>
    </defs>

    {/* Top Hat */}
    <rect x="75" y="0" width="50" height="15" fill="black" />
    <rect x="65" y="15" width="70" height="10" fill="black" />
    <rect x="65" y="15" width="70" height="3" fill="darkred" />

    {/* Eyes */}
    <circle cx="92" cy="42" r="3" fill="black" />
    <circle cx="108" cy="42" r="3" fill="black" />

    {/* Carrot Nose */}
    <polygon points="100,50 100,55 120,52.5" fill="orange" />

    {/* Mouth */}
    <path d="M90 60 Q100 70 110 60" fill="none" stroke="black" strokeWidth="2" />

    {/* Scarf */}
    <path
      d="M70 70 Q100 85 130 70"
      fill="none"
      stroke="darkred"
      strokeWidth="8"
    />
    <path d="M120 70 L120 100 Q115 102 110 98" fill="darkred" />

    {/* Arms */}
    <line
      x1="55"
      y1="120"
      x2="20"
      y2="80"
      stroke="saddlebrown"
      strokeWidth="5"
    />
    <line
      x1="145"
      y1="120"
      x2="180"
      y2="80"
      stroke="saddlebrown"
      strokeWidth="5"
    />

    {/* Buttons */}
    <circle cx="100" cy="100" r="3" fill="black" />
    <circle cx="100" cy="120" r="3" fill="black" />
    <circle cx="100" cy="140" r="3" fill="black" />
  </svg>
);

export default Snowman;