import React from 'react'
import Progress from '../CommonComponents/Progress'
import SecondComp from '../CommonComponents/SecondComp'

function SecondStep() {
  return (
    <div>
        <Progress />
        <SecondComp className='mt-15 mx-3 sm:mx-10 md:mx-5 lg:mx-30'/>
    </div>
  )
}

export default SecondStep