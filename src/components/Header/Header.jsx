import React from "react";
import {Link, NavLink} from 'react-router-dom'
import logoImg from '../../assets/zelevation-logo-m.png'
import { useState } from "react";




function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {setIsOpen(!isOpen)}
    const testMenu = () => {console.log("hello");}
    return (
        <>
        <header className="sticky top-0 shadow">
            <nav className="w-full h-14 bg-[#1D2B53] flex place-content-between items-center md:px-8">
                <div className="px-2">
                    <Link to="/">
                        <img src={logoImg} alt="" 
                        className="h-8"/>
                    </Link>
                </div>
                <div className="text-white text-2xl leading-10 text-center absolute bg-[#1D2B53] opacity-[0.9] w-auto right-0 left-0 top-14 md:top-0 md:relative">
                    <ul className={isOpen ? "block" : "hidden md:flex md:space-x-4"}>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Aboutus</NavLink>
                        </li>
                        <li>
                            <NavLink>Services</NavLink>
                        </li>
                        <li>
                            <NavLink>Contactus</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <button className="hidden md:block bg-[#7E2553] px-4 py-2 rounded-xl text-white"
                    >
                    Get Started
                    </button>
                </div>
                <button 
                onClick={toggleMenu}
                className="block text-white text-5xl md:hidden"
                >&#8801;
                </button>
            </nav>
        </header>
        {/* <nav className="bg-blue-500">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:justify-between mt-4 md:mt-0`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav> */}
        </>
    )
}

export default Header