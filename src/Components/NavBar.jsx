import React, { useState } from 'react'
import { NavItems } from '../lib/reuse/NavItems'
import ProfileBar from './CommonComponents/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './CommonComponents/MobileNav'
import DashBord from './DashBord'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
    const [isMenusOpen, setIsMenusOpen] = useState(false); //Open or Close the menu
    const location = useLocation();
    const toggleMenus = () => setIsMenusOpen(!isMenusOpen); //Toggle Function
    
    return (
        <>
            <nav className='mx-3 sm:mx-10 md:mx-5 my-2 lg:mx-30'>
                <div className='flex items-center justify-between gap-3.5 sm:gap-0'>
                    {/*Toggle Menu Button and Logo Area*/}
                    <div className='flex items-center gap-3'>
                    <button className='lg:hidden block cursor-pointer' onClick={toggleMenus}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </button>
                    <img src="Logo.png" alt="" className='w-[100px] sm:w-[150px] lg:w-[165px]'/>
                    </div>
                
                    <div>
                        {/*Navigation Link Area*/}
                    <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
                        {NavItems.map(({label, path}, i) => {
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
                            )
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
           <DashBord /> {/*Dashbord area*/}
        </>
    )
}

export default NavBar