import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavItems } from '../../lib/reuse/NavItems'
import { Link } from 'react-router'

function MobileNav({toggleMenus}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-36 sm:w-60 h-screen bg-foreground z-50 p-6 overflow-y-hidden rounded-tr-lg'>
      <div className='flex items-center justify-between'>
      <button onClick={toggleMenus} className='cursor-pointer'>
          <FontAwesomeIcon icon="fa-solid fa-xmark" className='text-[18px]' />
        </button>
       <img src="Logo.png" alt="" />
        
      </div>
      <div className='space-y-4 mt-5'>
       {NavItems.map(({label,path},i) =>
          <Link to={path} key={i}>
            <p className='block text-lg text-tertiary hover:text-primary transition-colors duration-150'>{label}</p>
          </Link>
      )}
      </div>
    </div>
  )
}

export default MobileNav
