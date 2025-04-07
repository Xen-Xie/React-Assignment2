import React from 'react'
import { cn } from '../../lib/utlities'

function DashbordText({children,className}) {
  return (
    <div>
        <h1 className={cn("text-xl sm:text-2x md:text-3xl font-bold text-accent",className)}>{children}</h1>
    </div>
  )
}

export default DashbordText