import React from 'react'
import { BuildingItems } from '../../lib/reuse/BuildingItems'

function LocationCard() {
  return (
    <div className="grid grid-cols-3 gap-3 px-2 py-4 sm:px-5 sm:py-5">
      {BuildingItems.map((items, i) => (
        <div
          key={i}
          className="transition-all duration-150 hover:scale-105 space-y-2 text-center"
        >
          <div className="relative w-full">
            <img
              src={items.image}
              alt={items.title}
              className="w-full h-auto rounded-md"
            />
            <div className="absolute top-1 right-1 sm:top-2 sm:right-3 bg-foreground px-[6px] py-[2px] sm:px-3 sm:py-1.5 rounded-full flex items-center justify-center gap-0.5 sm:gap-1">
              <img
                src={items.insideImage}
                alt=""
                className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"
              />
              <span className="text-[#18181B] font-bold text-[8px] sm:text-sm">
                {items.insideText}
              </span>
            </div>
          </div>

          <div className="px-1">
            <h1 className="text-[12px] sm:text-lg font-bold text-accent truncate">
              {items.title}
            </h1>
            <h2 className="text-[10px] sm:text-sm text-secondary truncate">
              {items.subtitle}
            </h2>
            <p className="text-[11px] sm:text-base font-semibold text-accent">
              {items.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationCard