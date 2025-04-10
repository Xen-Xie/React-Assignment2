import React from 'react'
import Progress from '../CommonComponents/Progress'
import FakeMap from '../CommonComponents/FakeMap'

function LastStep() {
  return (
    <div>
        <Progress />
        <div className='mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30 xl:mx-65'>
        <FakeMap />
        </div>
        
    </div>
  )
}

export default LastStep