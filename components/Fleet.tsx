"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { vehicleData } from '@/data/vehicle'; 
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState('SUVs');
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['SUVs', 'Pickups', 'Sedans', 'Buses'];

  // FILTER DATA
  const filteredFleet = vehicleData.filter((vehicle) => vehicle.category === activeTab);

  // CALCULATE TOTAL PAGES
  const totalPages = Math.ceil(filteredFleet.length / itemsPerPage);

  // 3. RESPONSIVE ITEMS PER PAGE
  // We need this to know how many dots to show
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) setItemsPerPage(1); // Desktop: ~3 items
        else if (window.innerWidth >= 768) setItemsPerPage(2); // Tablet: ~2 items
        else setItemsPerPage(1); // Mobile: 1 item (plus peek)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 4. SCROLL HANDLER (Updates Dots when you scroll manually)
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Calculate which "page" we are on based on scroll position
      const newPage = Math.round(scrollLeft / clientWidth);
      if (newPage !== currentPage && newPage < totalPages) {
        setCurrentPage(newPage);
      }
    }
  };

  // 5. CLICK DOT (Scrolls to specific page)
  const scrollToPage = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      });
      setCurrentPage(index);
    }
  };

  // 6. ARROW BUTTONS (Scroll by 1 page width)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id='models' className='py-10 relative bg-white'>
      <div className='max-w-[95%] mx-auto'>
        <h1 className='text-xl md:text-3xl text-center md:text-left font-bold text-black'>Our Models</h1>
        
        {/* TABS HEADER */}
        <div className='flex flex-col md:flex-row justify-between items-center w-full pb-2 mb-6'>
          <p className='text-black/60 text-base md:text-lg mb-5 md:mb-0'>
            Crafted for the diverse terrains of the continent.
          </p>

          <div className='flex gap-2 backdrop-blur-md bg-gray-200/70 rounded-full items-center justify-center p-1'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                   setActiveTab(cat);
                   setCurrentPage(0);
                   if(scrollContainerRef.current) scrollContainerRef.current.scrollTo({ left: 0 });
                }}
                className={`
                  text-sm font-medium tracking-wider px-4 py-2 transition-all duration-300 relative items-center rounded-full
                  ${activeTab === cat ? 'bg-skyblue text-white' : 'text-black/70'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className='relative group/carousel'>
          
          {/* PREV BUTTON */}
          <button 
            onClick={() => scroll('left')}
            className='absolute left-1 md:-left-12.5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-md border border-white/10 bg-gray-200/80 backdrop-blur-md text-black hover:bg-blue-900 hover:text-white transition-all duration-300 hidden md:block'
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll} // ATTACH SCROLL LISTENER
            className='flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar w-full scroll-pl-4'
          >
            {filteredFleet.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className='relative shrink-0 w-[75vw] md:w-[75%] lg:w-[80%] h-96 md:h-135 snap-start rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-300'
              >
                <Link href={`/models/${vehicle.slug}`} className="block w-full h-full relative">
                  
                  {/* BACKGROUND IMAGE */}
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    fill
                    className='object-cover transition-transform duration-700'
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 33vw"
                    priority
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-linear-to-tr from-black/80 via-transparent to-transparent opacity-90" />

                  {/* TEXT CONTENT */}
                  <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full z-20'>
                    <div className="flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <h3 className='text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide'>
                          {vehicle.name}
                        </h3>
                        
                        <div className='flex items-center gap-2 text-white text-xs md:text-sm font-medium'>
                          <span className="bg-blue-600/80 backdrop-blur-md px-3 py-1 rounded-sm">
                            {vehicle.range || "N/A"}
                          </span>
                          <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                            {vehicle.power || "N/A"}
                          </span>
                        </div>
                      </div>

                      {/* ARROW */}
                      <div className='bg-sky-500 p-2 md:p-3 rounded-full text-white md:opacity-0 md:translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out'>
                        <ArrowRight className='w-5 h-5 md:w-6 md:h-6' />
                      </div>
                    </div>
                  </div>

                </Link>
              </div>
            ))}

            {/* EMPTY STATE */}
            {filteredFleet.length === 0 && (
              <div className='w-full py-20 text-center text-black/70'>
                  No vehicles found in this category.
              </div>
            )}
            
            {/* SPACER for mobile scrolling comfort */}
            <div className="shrink-0 w-4" />
          </div>

          {/* NEXT BUTTON */}
          <button 
            onClick={() => scroll('right')}
            className='absolute right-1 md:-right-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-md border border-white/10 bg-blue-700/90 backdrop-blur-md text-white hover:bg-blue-900 transition-all duration-300 hidden md:block'
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* PAGINATION DOTS */}
        {totalPages > 1 && (
          <div className='flex justify-center items-center gap-3 mt-4'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                // Dynamic styling: Active gets width and color, inactive is small
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentPage === index ? 'w-8 bg-skyblue' : 'w-2 bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Fleet