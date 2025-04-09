import React from 'react'
import { IncidentsCardItemsA } from '../../lib/reuse/IncidensCardItemsA'
import { cn } from '../../lib/utlities'

function InsideInc({className}) {
  return (
    <div className={cn("px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32",className)}>
      {/* Title */}
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-6 text-accent">
        Which of these best describes the incident?
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {IncidentsCardItemsA.map((card, index) => (
          <div
            key={index}
            className="group flex items-center gap-0 sm:gap-2 w-full h-[90px] bg-[#F4F4F5] hover:bg-primary rounded-lg transition-all duration-200 cursor-pointer border border-[#E4E4E7]"
          >
            <img
              src={card.icon}
              alt={card.text}
              className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 mx-2 sm:mx-4 lg:mx-6 xl:mx-7 stroke-secondary"
            />
            <p className="text-sm sm:text-base text-secondary group-hover:text-white">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsideInc
