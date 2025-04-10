import React from 'react'
import { cn } from '../../lib/utlities'

function GradientText({ className, children }) {
  return (
    <h1
      className={cn(
        'mt-5 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x font-bold',
        className
      )}
    >
      {children}
    </h1>
  )
}

export default GradientText
