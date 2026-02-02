"use client"

import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const Hero = () => {
  // 1. State to track which slide is currently active
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'image',
      url: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-LEMON-FRONT-1.png'
    },
    {
      type: 'image',
      url: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-BOX-WHITE-FRONT-1.png'
    },
    {
      type: 'image',
      url: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-LEMON-BACK-1.png'
    },
    // {
    //   type: 'video',
    //   url: '/assets/your-car-video.mp4', // Local file or URL
    //   poster: 'https://wallpapercave.com/wp/wp15218806.webp' // Image to show while video loads
    // }
  ];

  // 3. Logic to cycle slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      
      {/* Navbar Wrapper - Absolute so it floats ON TOP of the slider */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      <section className='relative w-full h-full flex items-center justify-center'>
        
        {/* === SLIDESHOW CONTAINER === */}
        <div className="absolute inset-0 w-full h-full z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* IMAGE LOGIC */}
              {slide.type === 'image' && (
                <div
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url('${slide.url}')` }}
                />
              )}

              {/* VIDEO LOGIC (Commented out structure as requested) */}
              {/* {slide.type === 'video' && (
                 <video
                   className="w-full h-full object-cover opacity-80"
                   autoPlay
                   muted
                   loop
                   playsInline
                   poster={slide.poster}
                 >
                   <source src={slide.url} type="video/mp4" />
                 </video>
               )} 
               */}
            </div>
          ))}

          {/* Overlay Gradient (Fixed syntax to bg-gradient-to-b) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 z-10"></div>
        </div>

        {/* === CONTENT === */}
        <div className='relative z-20 text-center flex flex-col items-center mt-10 px-4'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white leading-tight'>
            The Pride of <br /> 
            <span className='text-sky-400'>African Roads</span>
          </h1>
          
          <p className='text-white/80 my-6 text-lg tracking-wide'>
            Precision Engineering. Unmatched Elegance.
          </p>
          
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-sky-400 transition-colors'>
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