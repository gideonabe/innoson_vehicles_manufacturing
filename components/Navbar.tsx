'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Menu, X } from 'lucide-react'
import nobg2 from '@/assets/nobg2.png'
import nobg4 from '@/assets/nobg4.png'
import nobg5 from '@/assets/nobg5.png'
import nobg8 from '@/assets/nobg8.png'
import nobg7 from '@/assets/nobg7.png'
import { vehicleData } from '@/data/vehicle'

// === DATA DEFINITIONS ===
const menuVehicles = [
  { name: 'IVM G80', image: nobg2, slug: 'ivm-g80' },
  { name: 'IVM G40', image: nobg4, slug: 'ivm-g80' },
  { name: 'IVM Carrier', image: nobg7, slug: 'ivm-g80' }, 
  { name: 'IVM Granite', image: nobg8, slug: 'ivm-g80' },
  { name: 'IVM Aso', image: nobg4, slug: 'ivm-g80' }, 
  { name: 'IVM Caris', image: nobg5, slug: 'ivm-g80' },
];
const modelSideLinks = ["Inventory", "Used Cars", "Demo Drive", "Trade-in", "Compare", "Fleet", "Semi"];

const financeLinks = [
  { title: "Payment Options", links: ["Cash Purchase", "Financing Plans", "Leasing Options"] },
  { title: "Tools", links: ["Payment Calculator", "Trade-in Value", "Apply for Credit"] },
  { title: "Corporate", links: ["Fleet Financing", "Business Lines of Credit"] },
];

const serviceLinks = [
  { title: "Maintenance", links: ["Schedule Service", "Maintenance Guide", "Warranty Info"] },
  { title: "Parts & Support", links: ["Order Parts", "Roadside Assistance", "Owner Manuals"] },
  { title: "Locations", links: ["Find a Service Center", "Certified Body Shops"] },
];

const aboutLinks = [
  { title: "Company", links: ["Our Story", "Leadership", "Careers", "Investors"] },
  { title: "Innovation", links: ["Manufacturing", "Sustainability", "Technology"] },
  { title: "News", links: ["Press Releases", "Blog", "Events"] },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  // === NEW: State for Mobile Sub-Menu ===
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setMobileSubMenu(null); // Reset sub-menu when closing main menu
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setHoveredMenu(null);
    setMobileSubMenu(null);
  };

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

      {/* === DESKTOP MEGA MENU (Unchanged) === */}
      <div 
        className={`
          hidden md:block absolute top-full left-0 w-full bg-white text-black border-t border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out -mt-1
          ${isMenuOpen ? 'max-h-150 opacity-100 py-12' : 'max-h-0 opacity-0 py-0'}
        `}
        onMouseEnter={() => {}} 
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Models Content */}
          {hoveredMenu === 'Models' && (
            <div className="grid grid-cols-4 gap-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="col-span-3 grid grid-cols-3 gap-y-10 gap-x-2">
                {menuVehicles.map((car, i) => (
                  <Link key={i} href={`/models/${car.slug}`} onClick={handleLinkClick} className="group flex flex-col items-center text-center cursor-pointer">
                    <div className="w-full h-24 relative mb-3 flex items-center justify-center">
                      <Image src={car.image} alt={car.name} className="object-contain h-full w-auto relative z-10 transition-transform duration-300 group-hover:scale-110" width={200} height={200} />
                    </div>
                    <h3 className="text-base font-bold mb-1">{car.name}</h3>
                    <div className="flex gap-3 text-xs font-medium text-black/80">
                      <span className="underline transition-colors">Learn</span><span className="underline transition-colors">Order</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='flex'>
                <div className='w-0.5 h-full bg-gray-200'></div>
                <div className="col-span-1 border-l border-white/10 pl-10 flex flex-col justify-start space-y-4 pt-2">
                  {modelSideLinks.map((link) => (
                    <a key={link} href="#" className="text-sm font-medium text-black/80 hover:text-black transition-colors hover:translate-x-1 duration-200 block">{link}</a>
                  ))}
                </div>            
              </div>
            </div>
          )}

          {/* Finance/Service/About Content */}
          {['Finance', 'Service', 'About'].includes(hoveredMenu || '') && (
            <div className="grid grid-cols-3 gap-12 animate-[fadeIn_0.3s_ease-out] max-w-4xl mx-auto">
              {(hoveredMenu === 'Finance' ? financeLinks : hoveredMenu === 'Service' ? serviceLinks : aboutLinks).map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-black/80 uppercase tracking-widest mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}><a href="#" className="text-sm font-medium text-black/70 hover:text-sky-500 transition-colors block">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* === MOBILE MENU OVERLAY === */}
      <div className={`
        fixed inset-0 bg-white z-100 transition-transform duration-500 ease-in-out flex flex-col overflow-hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-gray-100 shrink-0">
          <button onClick={() => setIsOpen(false)} className="opacity-0 p-2 -ml-2 text-black transition-colors">
            <ChevronRight className="rotate-180 w-6 h-6" /> 
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-black/60 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. MAIN LIST (Hidden when SubMenu is open) */}
        <div className={`
          flex-1 px-6 py-4 overflow-y-auto transition-transform duration-500 absolute w-full h-[calc(100%-56px)] top-10
          ${mobileSubMenu ? '-translate-x-full opacity-50' : 'translate-x-0 opacity-100'}
        `}>
          {['Models', 'Finance', 'Service', 'About'].map((item) => (
            <button 
              key={item}
              onClick={() => setMobileSubMenu(item)} // OPEN SUB-MENU
              className="w-full group flex items-center justify-between py-6 border-b border-gray-100 text-black transition-colors"
            >
              <span className=" font-medium tracking-wide">{item}</span>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-sky-500 transition-colors" />
            </button>
          ))}
          <button onClick={handleLinkClick} className="mt-8 w-full py-4 text-sm font-bold tracking-widest uppercase bg-black text-white transition-colors rounded-sm">
            Test Drive
          </button>
        </div>

        {/* 2. SUB-MENU SLIDE-IN (Slides from right) */}
        <div className={`
          absolute inset-0 top-0 bg-white z-20 transition-transform duration-500 ease-in-out flex flex-col
          ${mobileSubMenu ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Sub-Menu Header */}
          <div className="flex justify-between items-center gap-4 px-6 py-4 border-b border-gray-100 shrink-0 bg-gray-50/50">
            <button 
              onClick={() => setMobileSubMenu(null)} // GO BACK
              className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>
            {/* <span className="text-lg font-bold uppercase ml-auto">{mobileSubMenu}</span> */}
            <button onClick={() => setIsOpen(false)} className="p-2 mr-2 text-black/60 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub-Menu Content Container */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
            
            {/* CONTENT: MODELS */}
            {mobileSubMenu === 'Models' && (
              <div className="grid grid-cols-2 gap-4">
                {menuVehicles.map((car, i) => (
                  <Link 
                    key={i} 
                    href={`/models/${car.slug}`} 
                    onClick={handleLinkClick}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-full h-20 relative mb-2">
                      <Image src={car.image} alt={car.name} className="object-contain" fill />
                    </div>
                    <h3 className="text-sm font-bold">{car.name}</h3>
                    <p className="text-[10px] text-gray-500 mt-1 underline">View Details</p>
                  </Link>
                ))}
                {/* Also show side links for models */}
                <div className="col-span-2 mt-4 pt-4 border-t border-gray-100 space-y-3">
                   {modelSideLinks.map(link => (
                     <a key={link} href="#" className="block text-sm font-medium text-gray-600">{link}</a>
                   ))}
                </div>
              </div>
            )}

            {/* CONTENT: FINANCE / SERVICE / ABOUT */}
            {['Finance', 'Service', 'About'].includes(mobileSubMenu || '') && (
              <div className="space-y-8">
                {(mobileSubMenu === 'Finance' ? financeLinks : mobileSubMenu === 'Service' ? serviceLinks : aboutLinks).map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{section.title}</h3>
                    <ul className="space-y-3 pl-2 border-l-2 border-gray-100">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a href="#" className="text-base font-medium text-black block py-1">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar