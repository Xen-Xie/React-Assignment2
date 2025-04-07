import React from 'react'
import { cn } from '../../lib/utlities'

function Button({children, className}) {
  return (
    <div>
      <button className={cn('text-sm sm:text-lg font-semibold text-foreground bg-primary px-5 py-1 sm:py-2 rounded-lg h-[42px] text-center',className)}>{children}</button>
    </div>
  )
}

export default Button