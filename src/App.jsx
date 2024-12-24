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
      message: "You have a way of holding our family together, always knowing when someone needs a kind word or a listening ear. Your empathy and unwavering support mean so much to me, and I’m grateful for the love and stability you bring to all of us. Thank you for always being there.",
      signoff: "Love,",
      signature: "The Boy"
    },
    {
      name: "Liz",
      image: lizImage,
      message: "You’re more than my sister—you’re my confidant, my sounding board, and my best friend. I don’t know where I’d be without our daily chats and the way you’re always there to celebrate the wins and get through the losses. You make life better just by being you.",
      signoff: "With love,",
      signature: "William"
    },
    {
      name: "Fiona",
      image: fionaImage,
      message: "You bring so much joy with your curiosity and adventurous spirit. Whether we’re at the beach or the pool, your energy and kindness remind me to enjoy life’s little moments. I can’t wait for our next adventure together!",
      signoff: 'See you at the beach!',
      signature: "Beach Buddy"
    },
    {
      name: "Finn",
      image: finnImage,
      message: "You’re such a fun and fearless kid, always full of energy and curiosity. I love seeing you light up the room with your enthusiasm and how much you adore your sister. Even though we don’t see each other as much as I’d like, I’m so proud of the awesome person you’re becoming.",
      signoff: 'Your amazing uncle,',
      signature: "William"
    },
    {
      name: "Ian",
      image: ianImage,
      message: "Your passion for cooking and hosting makes every visit feel special. Whether you’re grilling or watching the game, you make everyone feel welcome and at ease.",
      signoff: 'Have a Merry Christmas,',
      signature: "William"
    },
    {
      name: "Kathy",
      image: kathyImage,
      message: "You’ve had such a big year, and I’m amazed by your resilience and drive. Balancing residency and everything life has thrown your way, you handle it all with strength and grace. I can’t wait to see you start this next chapter of your career—it’s so well-deserved.",
      signoff: "Merry Christmas!",
      signature: "Your Brother"
    },
    {
      name: "Angel",
      image: angelImage,
      message: "You’ve grown into such a witty and kind young man. I love our banter and the way you’ve embraced Dad’s humor (for better or worse). Keep being the thoughtful and fun person you are. You’ve got an incredible future ahead!",
      signoff: "Merry Christmas!",
      signature: "William"
    },
    {
      name: "Becca",
      image: beccaImage,
      message: "You bring so much laughter and fun to our family. I’ll miss playing board games with you this year, but don’t worry—we all know I’d have won. 😉 Your easygoing and honest approach to life is something I truly admire.",
      signoff: "Merry Christmas!",
      signature: "William"
    },
    {
      name: "Ben",
      image: benImage,
      message: "It’s been great getting to know you and sharing our love for music and stories. You bring such a calming and welcoming presence to every room. I’m glad to have you as part of the family.",
      signoff: "Happy Holidays!",
      signature: "William"
    },
    {
      name: 'Dad',
      image: dadImage,
      message: "Your support and wisdom have guided me through so much. Whether it’s one-word texts or hours-long calls, I know you’re always there for me. I look up to your dedication and drive, but don’t forget to take time for yourself—you’ve earned it.",
      signoff: 'With love,',
      signature: "Your Son"
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
            Merry Christmas, Family and Friends!
            <span className="christmas-tree">🎄</span>
          </h1>
          <p className="intro-message">
            While you're all bundled up in the winter wonderland, I'm sending warm tropical wishes your way! 
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