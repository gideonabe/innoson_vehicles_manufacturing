import { Car, KeyRound } from 'lucide-react'
import React from 'react'

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
    <section className='bg-darkblue py-10 md:py-20'>
      <div className='w-[90%] mx-auto flex flex-col gap-2 text-center items-center'>
        <h1 className='text-4xl font-semibold'>Drive Now, Pay Later</h1>
        <p className='text-white/60'>Luxury ownership made accessible with our flexible financing plans</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8'>
          {steps.map((step) => (
            <div key={step.id} className='backdrop-blur-md bg-white/5 border border-white/20 flex flex-col gap-4 py-12 px-6 text-center items-center rounded-4xl'>
              <div className='bg-blue-800/10 p-4 rounded-full my-2'>
                {step.icon}
              </div>
              <h3 className='text-2xl font-semibold'>{step.id}. {step.title}</h3>
              <p className='text-white/70'>{step.desc}</p>
            </div>
          ))}
        </div>

        <button className='mt-8 font-semibold bg-skyblue py-3 px-6 rounded-full text-white text-center items-center'>Start your application</button>
      </div>
    </section>
  )
}

export default DriveNow