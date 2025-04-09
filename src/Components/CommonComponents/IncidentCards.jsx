import React from 'react';
import { IncidentsCardItems } from '../../lib/reuse/IncidentsCardItems';
import { cn } from '../../lib/utlities';

function IncidentCards({ className }) {
  return (
    <div className={cn('px-2 sm:px-4 xl:px-0 max-w-6xl mx-auto', className)}>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {IncidentsCardItems.map((card, index) => (
          <div
            key={index}
            className="bg-[#F4F4F5] aspect-square rounded-xl shadow-sm text-start flex flex-col justify-between
            w-[90px] sm:w-[130px] md:w-[200px] lg:w-[240px] xl:w-[260px] p-2 sm:p-3 md:p-5"
          >
            {/* Icon */}
            <div className="flex justify-start mb-2 sm:mb-3 md:mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:w-12 lg:h-12"
              />
            </div>

            {/* Title */}
            <h3 className="text-[10px] sm:text-xs md:text-base font-semibold mb-1 text-accent">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[9px] sm:text-xs md:text-sm text-secondary">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncidentCards;
