import { Car, KeyRound } from 'lucide-react'
import React from 'react'

import drivebg from '@/assets/drivebg.jpg'

const DriveNow = () => {
  const steps = [
    {
      id: 1,
      icon: <Car className='text-skyblue w-9 h-9'/>,
      title: 'Choose model',
      desc: 'Select from our elite range of luxury SUVs, Pickups, or Sedans tailored to your lifestyle.'
    },
    {
      id: 2,
      icon: <Car className='text-skyblue/70 w-9 h-9'/>,
      title: 'Get Approved',
      desc: 'Our steamlined digital application process gives you a decision within 24 hours.'
    },
    {
      id: 3,
      icon: <KeyRound className='text-skyblue/70 w-9 h-9'/>,
      title: 'Take Delivery',
      desc: 'Drive home in your new IVM with customized monthly payments that fit your budget.'
    },
  ]

  return (
    // 1. Parent set to relative and flex to center content vertically
    <section className='relative w-full py-20 md:py-32 h-screen flex items-center justify-center overflow-hidden'>
      
      <div className='absolute inset-0 w-full h-full z-0'>
        <img 
          // src="https://gml-nigeria.com/wp-content/uploads/2024/05/Fleet-management-01-1.jpg" 
          src={drivebg.src}
          alt="Drive Now Background" 
          className='w-full h-full object-cover' 
        />
        <div className='absolute inset-0 bg-darkblue/80 md:bg-darkblue/80 mix-blend-multiply' /> 
      </div>

      <div className='relative z-10 w-[90%] max-w-7xl mx-auto flex flex-col gap-6 text-center justify-end md:justify-center h-full items-center'>
        
        <div className='space-y-2'>
          <h1 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
            Drive Now, Pay Later
          </h1>
          <p className='text-white/80 text-lg md:text-xl max-w-2xl mx-auto'>
            Luxury ownership made accessible with <br /> our flexible financing plans
          </p>
        </div>

        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full'>
          {steps.map((step) => (
            <div key={step.id} className='backdrop-blur-md bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col gap-4 py-10 px-6 text-center items-center rounded-3xl group'>
              <div className='bg-sky-900/50 p-4 rounded-full mb-2 group-hover:scale-110 transition-transform'>
                {step.icon}
              </div>
              <h3 className='text-xl text-white font-semibold'>{step.title}</h3>
              <p className='text-white/70 text-sm leading-relaxed'>{step.desc}</p>
            </div>
          ))}
        </div> */}

        <button className='mt-0 md:mt-4 font-bold bg-skyblue hover:bg-white hover:text-black transition-all duration-300 py-3 md:py-4 px-6 md:px-10 rounded-sm text-white'>
          Start your application
        </button>
      </div>
    </section>
  )
}

export default DriveNow