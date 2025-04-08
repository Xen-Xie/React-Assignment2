import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';

function DashboardCards() {
  const [showChat, setShowChat] = useState(false); // Toggle state

  return (
    <>
      <div className='CardBoard'>
        <Cards />
      </div>

      {/* Floating Chat Toggle Button */}
    <button
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 w-13 h-13 rounded-full shadow-lg flex items-center justify-center text-xl font-bold z-50 cursor-pointer
        ${showChat ? 'bg-foreground' : 'bg-primary'} hover:${showChat ? 'bg-foreground/85' : 'bg-primary/85'} text-white`}
        >
        {showChat ? (
            <FontAwesomeIcon icon={faTimes} className="text-black text-lg" />
        ) : (
        'C'
        )}
    </button>

      {/* Chat Box */}
      {showChat && (
        <div className="fixed bottom-25 right-8 z-40 ml-2 sm:ml-0">
          <ChatBox />
        </div>
      )}
    </>
  );
}

export default DashboardCards;