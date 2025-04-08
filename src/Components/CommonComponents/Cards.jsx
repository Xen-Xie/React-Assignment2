import React, { useState } from 'react';
import { CardItems } from '../../lib/reuse/CardItems';
import ChatBox from './ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Cards() {
  const [showChat, setShowChat] = useState(false); // Toggle state

  return (
    <>
      <div className='mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30 mt-5 cursor-pointer'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-5 my-5'>
          {CardItems.map(({ image, insideImage, title, subtitle, price, insideText }, i) => (
            <div key={i} className='hover:scale-105 transition-all duration-150'>
              <div className='relative w-full max-w-md'>
                <img src={image} alt={title} className='w-full h-auto' />
                <div className='absolute top-2 xl:top-5 right-3 xl:right-6 bg-foreground w-fit px-3 xl:px-5 py-4.5 xl:py-6.5 rounded-full flex items-center justify-center h-5 gap-0.5'>
                  <img src={insideImage} alt="" className='w-[18px] h-[18px] xl:w-[22px] xl:h-[22px]' />
                  <span className='text-[#18181B] font-bold text-sm xl:text-md'>{insideText}</span>
                </div>
              </div>
              <div className='mx-1.5'>
                <h1 className='text-2xl leading-tight font-bold text-accent'>{title}</h1>
                <h2 className='text-sm text-secondary leading-tight'>{subtitle}</h2>
                <p className='font-semibold text-accent'>{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chat Toggle Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/85 text-white w-13 h-13 rounded-full shadow-lg flex items-center justify-center text-xl font-bold z-50"
      >
        {showChat ? (
          <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
        ) : (
          'C'
        )}
      </button>

      {/* Chat Box */}
      {showChat && (
        <div className="fixed bottom-25 right-8 z-40">
          <ChatBox />
        </div>
      )}
    </>
  );
}

export default Cards;