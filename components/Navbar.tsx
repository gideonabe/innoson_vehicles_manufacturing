'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-all duration-300">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLinkClick}>
          <div className="cursor-pointer">
            <Image src="/ivmlogo.png" alt="Logo" width={120} height={90} className="w-24 md:w-40 h-auto" />
          </div>
        </Link>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-12 backdrop-blur-md py-3 px-8 rounded-full bg-white/15 border border-white/10">
          {['Models', 'Finance', 'Service', 'About'].map((item) => (
            <a 
              key={item}
              className="text-xs font-medium tracking-widest text-white hover:text-sky-400 transition-colors uppercase" 
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA (Hidden on Mobile) */}
        <button className="hidden md:block px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all bg-sky-500 text-white rounded-sm">
          Test Drive
        </button>

        {/* MOBILE HAMBURGER BUTTON (Visible on Mobile) */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`
        absolute top-20 left-0 w-full bg-black/35 backdrop-blur-xl border-t border-white/10 overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col items-center gap-8 py-10">
          {['Models', 'Finance', 'Service', 'About'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-lg font-medium tracking-widest text-white hover:text-sky-400 transition-colors uppercase"
            >
              {item}
            </a>
          ))}
          
          <button 
            onClick={handleLinkClick}
            className="mt-4 px-10 py-4 text-sm font-bold tracking-widest uppercase bg-sky-500 text-white hover:bg-white hover:text-black transition-all rounded-sm w-[80%]"
          >
            Test Drive
          </button>
        </div>
      </div>

    </header>
  )
}

export default Navbar