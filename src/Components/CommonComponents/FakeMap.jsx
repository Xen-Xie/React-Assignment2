import React from 'react'
import { cn } from '../../lib/utlities'

function FakeMap({className}) {
  const searchBar = [
    {
      icon: '/searchIcon.svg',
      placeholder: 'Enter incident address or GPS'
    },
    {
      icon: '/searchIcon.svg',
      placeholder: 'Pinpoint damage'
    }
  ]

  return (
    <div className={cn("px-6 py-8",className)}>
      <h1 className="text-2xl font-bold text-accent mb-2">Where’s the incident?</h1>
      <p className="text-secondary mb-4 max-w-xl">
        Enter a GPS, address, or pin point on the map. Try to be as accurate as possible, or click:
        <span className="font-medium ml-1 text-secondary">Jurisdiction Wide</span>
      </p>

      {/* Map with overlayed search bars */}
      <div className="relative overflow-hidden rounded-2xl w-full max-w-4xl">
        {/* Map Image */}
        <img
          src="/fakemap.svg"
          alt="Map"
          className="w-full h-auto object-cover"
        />

        {/* Overlay search bars */}
        <div className="absolute top-6 left-6 right-6 space-y-3">
          {searchBar.map((search, index) => (
            <div key={index} className="relative w-full">
              <img
                src={search.icon}
                alt=""
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary"
              />
              <input
                type="text"
                placeholder={search.placeholder}
                className="w-70 pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-white bg-opacity-90 text-sm placeholder-secondary focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FakeMap
