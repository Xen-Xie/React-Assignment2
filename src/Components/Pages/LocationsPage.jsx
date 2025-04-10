import React from 'react'
import LocationTexts from '../CommonComponents/LocationTexts'
import LocationDes from '../CommonComponents/LocationDes'

function Locations() {
  return (
    <div className='mx-4 mt-8'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='space-y-3'>
          <LocationTexts />
          <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        <LocationDes />
        <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        </div>
        
          
        <div className='space-y-2 sm:space-y-5'>
         <p className='text-sm text-secondary'>Incident Map</p>
         <img src="/FakeMap2.svg" alt="" className='w-full object-cover'/>
         <p className='text-[13px] sm:text-base text-secondary leading-tight sm:leading-relaxed text-justify flex justify-around'><span>Start 19.1232, -118.233</span> <span>End 19.3245, -119.2323</span></p>
        </div>

      </div>
    </div>
  )
}

export default Locations