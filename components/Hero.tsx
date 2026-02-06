"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import image2 from '@/assets/image2.webp'
import image3 from '@/assets/image3.webp'
import ivmherobg from '@/assets/ivmherobg.jpeg'
import ivmherobgggg from '@/assets/ivmbgggg.png'
import Navbar from './Navbar'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'image', url: ivmherobgggg, alt: "IVM Caris Side" },
    // { type: 'image', url: ivmherobg, alt: "IVM G80 Front" }, 
    // Add your other desktop slides back here if needed
    // { type: 'image', url: image3, alt: "IVM Granite Rear" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      <Navbar />

      <section className='relative w-full h-full flex items-center justify-center'>
        
        {/* === BACKGROUND CONTAINER === */}
        <div className="absolute inset-0 w-full h-full z-0">
          
          {/* 1. MOBILE BACKGROUND (Visible on mobile, hidden on lg/laptop screens) */}
          <div className="absolute inset-0 w-full h-full lg:hidden opacity-80">
            <Image
              src={ivmherobg}
              alt="IVM Mobile Hero"
              fill
              className="object-cover"
              priority
              placeholder="blur"
            />
          </div>

          {/* 2. DESKTOP SLIDESHOW (Hidden on mobile, visible on lg/laptop screens) */}
          <div className="hidden lg:block absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-full opacity-80">
                  <Image
                    src={slide.url}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0} 
                    quality={90}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* GRADIENT OVERLAY (Applies to both) */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent z-10"></div>
          <div className="block md:hidden absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent z-10"></div>
        </div>

        {/* === TEXT CONTENT === */}
        <div className='relative z-20 text-left flex flex-col top-30 h-full items-center mt-22 px-4'>
          <h1 className='hidden md:flex text-3xl md:text-6xl font-extrabold text-white leading-tight'>
            The Pride of <br /> African Roads
          </h1>
          <h1 className='md:hidden text-2xl md:text-6xl font-extrabold text-center text-white leading-tight'>
            The Pride of <br /> 
            <span className='text-white text-4xl'> African Roads</span>
          </h1>
          
          <p className='text-white/90 my-4 text-sm md:text-lg tracking-wide'>
            Precision Engineering. Unmatched Elegance.
          </p>
          
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='px-4 md:px-8 py-1 md:py-3 font-semibold text-sm rounded-full bg-skyblue text-white transition-colors hover:bg-white hover:text-black'>
              Experience G80
            </button>
            <button className='px-4 md:px-8 py-1 md:py-3 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors'>
              View Inventory
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Hero