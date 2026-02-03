"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image' // 1. Import the Image component
import image1 from '@/assets/image1.webp'
import image2 from '@/assets/image2.webp'
import image3 from '@/assets/image3.webp'
import Navbar from './Navbar'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'image', url: image1, alt: "IVM G80 Front" }, // Added alt text
    { type: 'image', url: image2, alt: "IVM Caris Side" },
    { type: 'image', url: image3, alt: "IVM Granite Rear" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className='relative w-full h-40dvh md:h-screen overflow-hidden bg-black'>
      <Navbar />
      {/* <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div> */}

      <section className='relative w-full h-100 md:h-full flex items-center justify-center'>
        
        <div className="absolute inset-0 w-full h-full z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'image' && (
                // 2. REPLACED THE DIV WITH <IMAGE />
                <div className="relative w-full h-full opacity-80">
                  <Image
                    src={slide.url}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    priority={index === 0} 
                    quality={85}
                  />
                </div>
              )}
            </div>
          ))}

          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/50 z-10"></div>
        </div>

        {/* Content... */}
        <div className='relative z-20 text-left flex flex-col items-center mt-10 px-4'>
          <h1 className='hidden md:flex text-3xl md:text-6xl font-extrabold text-white leading-tight'>
            The Pride of African Roads
          </h1>
          <h1 className='md:hidden flex text-2xl md:text-6xl font-extrabold text-white leading-tight'>
            The Pride of <br /> 
            <span className='text-sky-400'> African Roads</span>
          </h1>
          
          <p className='text-white/80 my-6 text-sm md:text-lg tracking-wide'>
            Precision Engineering. Unmatched Elegance.
          </p>
          
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='px-8 py-3 font-bold rounded-full bg-skyblue text-white transition-colors'>
              Experience G80
            </button>
            <button className='px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-colors'>
              View Inventory
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Hero