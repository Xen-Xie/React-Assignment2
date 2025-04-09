import React, { useState } from 'react'
import { NavItems } from '../../lib/reuse/NavItems'
import ProfileBar from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './MobileNav'
import DashBord from '../DashBord'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utlities'

function NavBar({ className }) {
  const [isMenusOpen, setIsMenusOpen] = useState(false); //Open or Close the menu
  const location = useLocation();
  const toggleMenus = () => setIsMenusOpen(!isMenusOpen); //Toggle Function

  // ✅ Show DashBord only on main pages
  const showDashboard =
    location.pathname === '/' ||
    location.pathname === '/incidents' ||
    location.pathname === '/locations' ||
    location.pathname === '/activities' ||
    location.pathname === '/documents' ||
    location.pathname === '/cypher';

  return (
    <div className='bg-[#E4E4E7] py-3'>
      <nav className={cn('mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30', className)}>
        <div className='flex items-center justify-between gap-3.5 sm:gap-0'>
          {/*Toggle Menu Button and Logo Area*/}
          <div className='flex items-center gap-3'>
            <button className='lg:hidden block cursor-pointer' onClick={toggleMenus}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <img src="Logo.png" alt="" className='w-[100px] sm:w-[150px] lg:w-[165px]' />
          </div>

          <div>
            {/*Navigation Link Area*/}
            <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
              {NavItems.map(({ label, path }, i) => {
                const isActive = location.pathname === path;
                return (
                  <Link to={path} key={i}>
                    <p className={`
                      ${isActive ? 'text-accent' : 'text-tertiary'} 
                      xl:text-base text-sm hover:text-primary 
                      transition-colors duration-150 cursor-pointer
                      relative
                    `}>
                      {label}
                      {isActive && (
                        <span className="absolute left-0 bottom-[-8px] w-full h-0.5 bg-accent"></span>
                      )}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/*Profile Area*/}
          <div>
            <ProfileBar />
          </div>
        </div>
      </nav>

      {isMenusOpen && <MobileNav toggleMenus={toggleMenus} />} {/*Pass the value to the mobile version*/}
      {showDashboard && <DashBord className={'mt-10'} />} {/*✅ Conditionally show Dashbord */}
    </div>
  )
}

export default NavBar;
