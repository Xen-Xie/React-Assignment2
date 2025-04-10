import React from 'react'
import LocationTexts from '../CommonComponents/LocationTexts'
import LocationDes from '../CommonComponents/LocationDes'
import LocationCard from '../CommonComponents/LocationCard'
import Activities from '../CommonComponents/Activities'
import Documents from '../CommonComponents/Documents'

function Locations() {
  return (
    <div className='mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30 mt-8'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='space-y-3'>
          <LocationTexts />
          <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        <LocationDes />
        <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        <LocationCard />
        <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        <Activities />
        <div className='w-full h-0.5 bg-[#E4E4E7]'>
        </div>
        <Documents />

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