import React from 'react'
import ProgressBar from '../CommonComponents/ProgressBar'
import IncidentCards from '../CommonComponents/IncidentCards'
import Button from '../CommonComponents/Button'
import { useLocation, useNavigate } from 'react-router'

function NewIncident() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if (location.pathname === '/incidents/new') {
          navigate('/incidents/new/new-step');
        } else {
          navigate('/cypher');
        }
      };
  return (
    <div className='mt-15'>
      <div className='items-center text-center flex flex-col gap-y-2'>
        <h1 className='font-bold text-xl text-accent'>Let’s get started</h1>
        <p className='text-md text-secondary leading-tight w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] xl:w-[40%]'>
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
        </p>
        <ProgressBar />
        <IncidentCards />
        <Button className='my-8' onClick={handleButtonClick}>Get started</Button>
      </div>
    </div>
  )
}

export default NewIncident
