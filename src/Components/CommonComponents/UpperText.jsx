import React from 'react'
import { cn } from '../../lib/utlities'

function UpperText({children,className}) {
  return (
    <div>
        <h1  className={cn('text-xs text-tertiary',className)}>{children}</h1>
    </div>
  )
}

export default UpperText