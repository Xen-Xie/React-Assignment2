import React, { useState } from 'react'
import { NavItems } from '../lib/reuse/NavItems'
import ProfileBar from './CommonComponents/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './CommonComponents/MobileNav'
import DashBord from './DashBord'

function NavBar() {
    const [isMenusOpen, setIsMenusOpen] = useState(false);
    const toggleMenus = () => setIsMenusOpen(!isMenusOpen);
  return (
    <>
        <nav className='mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30'>
            <div className='flex items-center justify-between gap-3.5 sm:gap-0'>
                <div className='flex items-center gap-3'>
                <button className='lg:hidden block cursor-pointer' onClick={toggleMenus}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </button>
                <img src="Logo.png" alt="" className='w-[100px] sm:w-[150px] lg:w-[165px]'/>
                </div>
            
                <div>
                <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
                    {NavItems.map(({label,link}, i) =>
                        <a href={link}>
                    <p className='text-tertiary xl:text-base text-sm hover:text-primary transition-colors duration-150 cursor-pointer'>{label}</p>
                </a>
                    )}
                </div>
                </div>
                <div>
                    <ProfileBar />
                </div>
            </div>
        </nav>
       {isMenusOpen && <MobileNav toggleMenus={toggleMenus} />}
       <DashBord />
    </>
  )
}

export default NavBar