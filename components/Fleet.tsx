"use client"

import React, { useState, useEffect } from 'react'
import { vehicleData } from '@/data/vehicle';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState('SUVs');
  
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(0);
  
  // CHANGED: itemsPerPage is now state, initialized to 1 (mobile-first safe)
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const categories = ['SUVs', 'Pickups', 'Sedans', 'Buses'];

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop (Large screens)
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet (Medium screens)
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    // Run immediately on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter Data
  const filteredFleet = vehicleData.filter(vehicle => vehicle.category === activeTab);

  // 2. Calculate Pages based on filtered results AND dynamic itemsPerPage
  const totalPages = Math.ceil(filteredFleet.length / itemsPerPage);

  // 3. Slice the data
  const currentData = filteredFleet.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Reset page to 0 when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Handlers for Arrows
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className='py-10 relative'>
      <div className='max-w-[90%] mx-auto'>
        <h1 className='text-xl md:text-3xl text-center md:text-left font-bold text-white'>Our Fleet</h1>
        
        {/* Header & Tabs */}
        <div className='flex flex-col md:flex-row justify-between items-center w-full pb-2 mb-6'>
          <p className='text-white/60 text-base md:text-lg mb-6 md:mb-0'>
            Crafted for the diverse terrains of the continent.
          </p>

          <div className='flex gap-2 backdrop-blur-md bg-white/15 rounded-full items-center justify-center p-1'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  text-sm font-medium tracking-wider px-4 py-2 transition-all duration-300 relative items-center rounded-full
                  ${activeTab === cat ? 'bg-skyblue text-white' : 'text-white/40 hover:text-white'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* === CAROUSEL CONTAINER === */}
        <div className='relative group/carousel'>
          
          {/* LEFT ARROW */}
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`
              absolute -left-5 md:-left-12.5 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white 
              hover:bg-skyblue hover:text-black hover:border-skyblue transition-all duration-300
              disabled:opacity-0 disabled:pointer-events-none
            `}
          >
            <ChevronLeft size={24} />
          </button>

          {/* GRID CONTENT */}
          {/* Note: min-h added to prevent layout jumping when switching pages */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[350px]'>
            {currentData.map((vehicle) => (
              <div key={vehicle.id} className='group overflow-hidden transition-all duration-300 animate-[fadeIn_0.5s_ease-out]'>
                
                <div className='h-64 w-full flex items-center justify-center transition-transform duration-500 bg-amber-500 rounded-[2rem] relative overflow-hidden'>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className='w-full h-full object-cover drop-shadow-2xl'
                  />
                </div>

                <div className='flex justify-between items-start mt-4 px-2'>
                  <div>
                    <p className='text-white font-semibold text-lg'>{vehicle.name}</p>
                    <p className='text-white/50 text-sm'>Range: {vehicle.range}km | Power: {vehicle.power}hp</p>
                  </div>
                  <ArrowRight className='w-10 h-6 text-skyblue transition-transform group-hover:translate-x-2' />
                </div>

              </div>
            ))}

            {filteredFleet.length === 0 && (
              <div className='col-span-full w-full py-20 text-center text-white/40'>
                  No vehicles found in this category.
              </div>
            )}
          </div>

          {/* RIGHT ARROW */}
          <button 
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className={`
              absolute -right-5 md:-right-12.5 top-1/2 -translate-y-1/2 z-20 
              p-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white 
              hover:bg-skyblue hover:text-black hover:border-skyblue transition-all duration-300
              disabled:opacity-0 disabled:pointer-events-none
            `}
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* === PAGINATION DOTS === */}
        {/* Only show dots if there is more than 1 page */}
        {totalPages > 1 && (
          <div className='flex justify-center items-center gap-3 mt-4'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`
                  h-2 rounded-full transition-all duration-500
                  ${currentPage === index ? 'w-8 bg-skyblue' : 'w-2 bg-white/20 hover:bg-white/50'}
                `}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Fleet