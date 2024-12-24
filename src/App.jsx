import { useState, useEffect, useRef } from 'react'
import Snowfall from 'react-snowfall'
import Card from './components/Card'
import Snowman from './components/Snowman'
import './App.css'
import momImage from './assets/mom.jpeg'
import jeffImage from './assets/jeff.jpeg'
import wellyImage from './assets/welly.jpeg'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showSnowman, setShowSnowman] = useState(false);
  const footerRef = useRef(null);

  const cards = [
    {
      name: "Mom",
      image: momImage,
      message: "Of everyone in the family, you show me the most love and empathy without judging me.  I appreciate you calling me, visiting me and treating me like a part of your life.  I love you so much and wish you a very Merry Christmas.",
      signoff: "Merry Christmas!",
      signature: "Your Son"
    },
    {
      name: "Jeff",
      image: jeffImage,
      message: "I know you're just ready to walk out of that job (and moon them on the way out).  Soon you'll be up in north GA building decks and mending fences.  I love you and miss you - I hope you have a jolly holly Christmas.  Don't drink and drive.",
      signoff: "With love,",
      signature: "The Grill Master"
    },
    {
      name: "Welly Belly",
      image: wellyImage,
      message: "I miss you, ya big goof troop.  Tell momma you're sad that she killed the pool.  Be kind this Christmas and don't eat the cat.",
      signoff: 'Woof, woof, woof,',
      signature: "The One who named you + Beurre"
    }
];

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
            Merry Christmas, Y'all!
            <span className="christmas-tree">🎄</span>
          </h1>
          <p className="intro-message">
            While you're hanging out in the sticks, I'm sending warm tropical wishes your way! 
            Your love and support mean the world to me, and even though I'm enjoying palm trees and frozen margaritas, 
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