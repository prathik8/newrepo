import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Chat from './Chat'; // Import the Chat component

const Dashboard = () => {
  const characters =   [
    { name: 'Richard Hendricks', url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'Erlich Bachman', url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Monica Hall', url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Jared Dunn', url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Dinesh Chugtai', url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];


  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('Removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="dashboard">
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.name}</h3>

               
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
 
      {/* Placeholder for the chat option */}
      <div className="chat-placeholder">
    
        <Chat />
        
      </div>
      
    </div>
    
  );
};

export default Dashboard;
