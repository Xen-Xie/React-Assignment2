import React from 'react'
import { LocationText } from '../../lib/reuse/LocationText'

function LocationTexts() {
  return (
    <div className="space-y-4">
      {LocationText.map((item, index) => (
        <div className="flex items-start gap-3" key={index}>
          <div className="w-6 h-6 sm:w-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 sm:h-8 rounded-full bg-[#F4F4F5] flex items-center justify-center shadow-sm overflow-hidden">
            <img
              src={item.icon}
              alt=""
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 object-contain"
            />
          </div>
          <div>
            <p className="text-[11px] sm:text-sm md:text-base text-secondary mb-1">{item.text}</p>
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-accent">{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationTexts
