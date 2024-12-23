import { useState, useEffect, useRef } from 'react'
import Snowfall from 'react-snowfall'
import Card from './components/Card'
import Snowman from './components/Snowman'
import './App.css'
import evaNYC from './assets/eva-nyc.jpg';
import lizImage from './assets/liz.jpeg';
import fionaImage from './assets/fiona.jpeg';
import finnImage from './assets/finn.jpeg';
import ianImage from './assets/ian.jpeg';
import kathyImage from './assets/kathy.jpeg';
import angelImage from './assets/angel.jpeg';
import beccaImage from './assets/becca.jpeg';
import benImage from './assets/ben.jpeg';
import dadImage from './assets/dad.jpeg';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showSnowman, setShowSnowman] = useState(false);
  const footerRef = useRef(null);

  const cards = [
    {
      name: "Eva",
      image: evaNYC,
      message: "While you're all bundled up in the winter wonderland, I'm sending warm tropical wishes your way! Your love and support mean the world to me, and even though I'm enjoying palm trees and mai tais, my heart is with you this holiday season. Each of you brings something special to my life, and I'm grateful for the joy, laughter, and memories we share.",
      signature: "With love, The Boy"
    },
    {
      name: "Liz",
      image: lizImage,
      message: "Your friendship has been one of the greatest gifts in my life. Thank you for always being there with your wisdom, humor, and caring heart. Here's to many more years of shared laughter and memories.",
      signoff: 'With love, William'
    },
    {
      name: "Fiona",
      image: fionaImage,
      message: "My wonderful niece, your creativity and spirit light up every room you enter! I love watching you grow, learn, and share your unique perspective with the world. Your imagination and determination inspire me, and I'm so grateful for all the amazing things you'll do. Keep being your incredible self!",
      signoff: 'See you at the beach! William'
    },
    {
      name: "Finn",
      image: finnImage,
      message: "To my amazing nephew, your curiosity and enthusiasm for life bring so much joy to everyone around you! I love seeing your eyes light up when you discover something new, and how you approach everything with such excitement and wonder. You make every moment together an adventure!",
      signoff: 'Your amazing uncle, William'
    },
    {
      name: "Ian",
      image: ianImage,
      message: "Your determination and spirit continue to inspire me. I'm so proud of all you've accomplished and the person you've become. Thank you for being such an amazing brother and friend. Looking forward to more adventures and conversations in the coming year!",
      signoff: 'Have a Merry Christmas, William'
    },
    {
      name: "Kathy",
      image: kathyImage,
      message: "Dear Mom, your love, guidance, and unwavering support have shaped who I am today. Thank you for always being there with open arms and a loving heart. Your strength and wisdom continue to inspire me, and I'm so grateful for all the cherished memories we share. Sending you the warmest holiday wishes with all my love!"
    },
    {
      name: "Angel",
      image: angelImage,
      message: "Your kindness and grace touch everyone around you. Thank you for being such a wonderful presence in our lives. Your caring heart and gentle spirit make the world a better place, and we're so blessed to have you in our family.",
      signoff: 'With love, William'
    },
    {
      name: "Becca",
      image: beccaImage,
      message: "Your vibrant spirit and infectious laughter bring so much joy to our family. I love how you embrace life with such enthusiasm and care so deeply for those around you. Thank you for being such an amazing sister-in-law and friend. Here's to more shared adventures and wonderful memories in the year ahead!",
      signoff: "Merry Christmas! William"
    },
    {
      name: "Ben",
      image: benImage,
      message: "Your strength, resilience, and dedication to family inspire us all. Thank you for being such an incredible brother-in-law and for bringing so much warmth and wisdom to our lives. I'm grateful for our conversations and the way you always make time for what truly matters. Looking forward to more shared moments and memories in the year ahead!",
      signoff: "Happy Holidays! William"
    },
    {
      name: 'Dad',
      image: dadImage,
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
