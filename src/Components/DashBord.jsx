import React from 'react'
import DashbordText from './CommonComponents/DashbordText'
import SearchBar from './CommonComponents/SearchBar'
import SortFilter from './CommonComponents/SortFilter'
import Button from './CommonComponents/Button'
import UpperText from './CommonComponents/UpperText'

function DashBord() {
  return (
    <div className='flex items-center justify-between mx-3 sm:mx-10 md:mx-5 lg:mx-30'>
        <div>
            <UpperText>Welcome back</UpperText>
            <DashbordText>
                Dashbord
            </DashbordText>
        </div>
        <div className='flex gap-2 sm:gap-5'>
            <SearchBar />
            <SortFilter />
            <Button>
                Cypher AI
            </Button>
        </div>
        
       
    </div>
  )
}

export default DashBord