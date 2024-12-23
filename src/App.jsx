import { useState, useEffect, useRef } from 'react'
import Snowfall from 'react-snowfall'
import Card from './components/Card'
import Snowman from './components/Snowman'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showSnowman, setShowSnowman] = useState(false);
  const footerRef = useRef(null);

  const cards = [
    {
      name: 'Eva',
      passage: 'Your kindness and warmth always make every moment special. Thank you for being such an amazing presence in our lives.',
      signoff: 'With love, William'
    },
    {
      name: 'Liz',
      passage: 'Your strength and wisdom continue to inspire me. Thank you for always being there with your loving support.',
      signoff: 'With love, William'
    },
    {
      name: 'Kathy',
      passage: 'Your joy and enthusiasm for life is contagious. Thank you for bringing so much happiness to our family.',
      signoff: 'With love, William'
    },
    {
      name: 'Angel',
      passage: 'Your caring heart and gentle spirit make the world a better place. Thank you for being such a wonderful part of our lives.',
      signoff: 'With love, William'
    },
    {
      name: 'Becca',
      passage: 'Your creativity and passion light up every room. Thank you for sharing your beautiful energy with us.',
      signoff: 'With love, William'
    },
    {
      name: 'Ben',
      passage: 'Your humor and wit always bring joy to our gatherings. Thank you for being such a great presence in our family.',
      signoff: 'With love, William'
    },
    {
      name: 'Dad',
      passage: 'Your guidance and love have shaped who I am today. Thank you for being the best father anyone could ask for.',
      signoff: 'With love, William'
    }
  ]

  const holidayCharacters = ['🎅', '🦌', '⛄', '🎄', '🎁', '🔔', '❄️', '🤶', '🧝‍♂️', '🧝‍♀️'];
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Add new character every 200px of scroll
      if (scrollY % 200 < 10) {
        const character = holidayCharacters[Math.floor(Math.random() * holidayCharacters.length)];
        const startX = Math.random() > 0.5 ? -50 : window.innerWidth + 50;
        const endX = startX < 0 ? window.innerWidth + 50 : -50;
        const duration = 2000 + Math.random() * 1000;
        
        const newCharacter = {
          id: Date.now(),
          emoji: character,
          style: {
            left: `${startX}px`,
            top: `${scrollY + Math.random() * 200}px`,
            transform: `translateX(${endX - startX}px)`,
            transition: `transform ${duration}ms linear`
          }
        };

        setCharacters(prev => [...prev, newCharacter]);
        
        setTimeout(() => {
          setCharacters(prev => prev.filter(char => char.id !== newCharacter.id));
        }, duration);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="app">
      <Snowfall 
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />

      {characters.map(char => (
        <div
          key={char.id}
          className="holiday-character"
          style={char.style}
        >
          {char.emoji}
        </div>
      ))}

      <div className="header-container">
        <div className="header-content">
          <h1>
            Merry Christmas, Family and Friends!
            <span className="christmas-tree">🎄</span>
          </h1>
          <p className="intro-message">
            While you're all bundled up in the winter wonderland, I'm sending warm tropical wishes your way! 
            Your love and support mean the world to me, and even though I'm enjoying palm trees and mai tais, 
            my heart is with you this holiday season. Each of you brings something special to my life, and I'm 
            grateful for the joy, laughter, and memories we share.
          </p>
        </div>
      </div>

      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="footer-space">
        <div className="snow-ground">
          <div className="snow-surface"></div>
          <div className="snow-hill snow-hill-1"></div>
          <div className="snow-hill snow-hill-2"></div>
          <div className="snow-hill snow-hill-3"></div>
        </div>
        <div className="snowman-container">
          <Snowman />
        </div>
      </div>
    </div>
  )
}

export default App
