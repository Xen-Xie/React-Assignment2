import React from 'react';
import { cn } from '../../lib/utlities';

function Button({ children, className, onClick }) {
  return (
    <div>
      <button 
      onClick={onClick}
      className={cn('text-sm sm:text-lg font-semibold text-foreground bg-primary px-4 sm:px-5 py-1 sm:py-2 rounded-lg h-[42px] text-center overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer hover:bg-primary/80 transition-all duration-150', className)}>
        {children}
      </button>
    </div>
  );
}

export default Button;