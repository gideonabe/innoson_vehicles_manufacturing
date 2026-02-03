'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { vehicleData } from '@/data/vehicle';
import nobg1 from '@/assets/nobg1.avif'
import nobg2 from '@/assets/nobg2.png'
import nobg3 from '@/assets/nobg3.avif'

// === 1. DATA FOR ALL MENUS ===


// MODELS (Already existing)
// const menuVehicles = vehicleData.slice(0, 6);

const menuVehicles = [
  { name: 'IVM G80', image: nobg2, slug: 'ivm-g80' },
  { name: 'IVM G40', image: nobg2, slug: 'ivm-g80' },
  { name: 'IVM Caris', image: nobg2, slug: 'ivm-g80' },
  { name: 'IVM Granite', image: nobg2, slug: 'ivm-g80' },
  { name: 'IVM Carrier', image: nobg2, slug: 'ivm-g80' }, 
  { name: 'IVM Aso', image: nobg2, slug: 'ivm-g80' }, 
];
const modelSideLinks = ["Inventory", "Used Cars", "Demo Drive", "Trade-in", "Compare", "Fleet", "Semi"];

// FINANCE
const financeLinks = [
  { title: "Payment Options", links: ["Cash Purchase", "Financing Plans", "Leasing Options"] },
  { title: "Tools", links: ["Payment Calculator", "Trade-in Value", "Apply for Credit"] },
  { title: "Corporate", links: ["Fleet Financing", "Business Lines of Credit"] },
];

// SERVICE
const serviceLinks = [
  { title: "Maintenance", links: ["Schedule Service", "Maintenance Guide", "Warranty Info"] },
  { title: "Parts & Support", links: ["Order Parts", "Roadside Assistance", "Owner Manuals"] },
  { title: "Locations", links: ["Find a Service Center", "Certified Body Shops"] },
];

// ABOUT
const aboutLinks = [
  { title: "Company", links: ["Our Story", "Leadership", "Careers", "Investors"] },
  { title: "Innovation", links: ["Manufacturing", "Sustainability", "Technology"] },
  { title: "News", links: ["Press Releases", "Blog", "Events"] },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setHoveredMenu(null);
  };

  // Helper to check if ANY menu is open
  const isMenuOpen = hoveredMenu !== null;

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="max-w-full h-17 px-4 flex items-center justify-between bg-white w-full relative z-50 shadow-sm">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLinkClick}>
          <div className="cursor-pointer pl-2">
            <Image src="/ivmlogo.png" alt="Logo" width={120} height={90} className="w-24 md:w-40 h-auto" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12 rounded-full border border-white/10">
          {['Models', 'Finance', 'Service', 'About'].map((item) => (
            <div 
              key={item}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu(item)}
            >
              <Link 
                className={`text-sm font-semibold tracking-widest transition-colors py-1 px-1
                  ${hoveredMenu === item ? 'bg-gray-200 text-black' : 'text-black hover:text-sky-500'}
                `} 
                href={item === 'Models' ? '/models' : `#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button className="hidden md:block px-6 py-2 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all text-black border border-transparent hover:border-black rounded-sm">
          Test Drive
        </button>

        {/* MOBILE HAMBURGER */}
        <button 
          className="md:hidden text-black px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === UNIVERSAL MEGA MENU CONTAINER === */}
      {/* This one container handles ALL dropdowns to ensure smooth transitions between them */}
      <div 
        className={`
          hidden md:block absolute top-full left-0 w-full bg-white text-black border-t border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out -mt-1
          ${isMenuOpen ? 'max-h-150 opacity-100 py-12' : 'max-h-0 opacity-0 py-0'}
        `}
        onMouseEnter={() => {}} // Keep open when hovering the content
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6">
          
          {/* CONTENT: MODELS (Grid Layout) */}
          {hoveredMenu === 'Models' && (
            <div className="grid grid-cols-4 gap-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="col-span-3 grid grid-cols-3 gap-y-10 gap-x-2">
                {menuVehicles.map((car, i) => (
                  <Link 
                    key={i} 
                    href={`/models/${car.slug}`}
                    onClick={handleLinkClick}
                    className="group flex flex-col items-center text-center cursor-pointer"
                  >
                    <div className="w-full h-24 relative mb-3 flex items-center justify-center">
                      {/* <div className="absolute inset-0 bg-sky-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                      <Image 
                        src={car.image} 
                        alt={car.name} 
                        className="object-contain h-full w-auto relative z-10 transition-transform duration-300" 
                        width={200}
                        height={200}
                      />
                    </div>
                    <h3 className="text-base font-bold mb-1">{car.name}</h3>
                    <div className="flex gap-3 text-xs font-medium text-black/80">
                      <span className="underline transition-colors">Learn</span>
                      <span className="underline transition-colors">Order</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='flex'>
                <div className='w-0.5 h-full bg-gray-200'></div>
                <div className="col-span-1 border-l border-white/10 pl-10 flex flex-col justify-start space-y-4 pt-2">
                  {modelSideLinks.map((link) => (
                    <a key={link} href="#" className="text-sm font-medium text-black/80 hover:text-white transition-colors hover:translate-x-1 duration-200 block">
                      {link}
                    </a>
                  ))}
                </div>            
              </div>
            </div>
          )}

          {/* CONTENT: FINANCE / SERVICE / ABOUT (Column Layout) */}
          {['Finance', 'Service', 'About'].includes(hoveredMenu || '') && (
            <div className="grid grid-cols-3 gap-12 animate-[fadeIn_0.3s_ease-out] max-w-4xl mx-auto">
              {/* Dynamically select which data to map based on the hovered menu */}
              {(hoveredMenu === 'Finance' ? financeLinks : 
                hoveredMenu === 'Service' ? serviceLinks : 
                aboutLinks
              ).map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-black/80 uppercase tracking-widest mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm font-medium text-black/70 hover:text-sky-500 transition-colors block">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* MOBILE MENU (Unchanged) */}
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