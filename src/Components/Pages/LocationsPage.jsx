import React from 'react'
import LocationTexts from '../CommonComponents/LocationTexts'

function Locations() {
  return (
    <div className='mx-4 mt-8'>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <LocationTexts />
        </div>
        <div className='space-y-2 sm:space-y-5'>
         <p className='text-sm text-secondary'>Incident Map</p>
         <img src="/FakeMap2.svg" alt="" className='w-full object-cover'/>
         <p className='text-sm text-secondary'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
        </div>

      </div>
    </div>
  )
}

export default Locations