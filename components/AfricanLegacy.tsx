import { ChevronRight } from 'lucide-react'
import React from 'react'

const AfricanLegacy = () => {
  return (
    <section className='flex gap-8 md:gap-0 flex-col md:flex-row w-full h-dvh'>
      <div className='flex md:w-[50%] flex-col gap-4 justify-center h-full px-12 md:px-20 mt-8 md:mt-0'>
        <h4 className='text-sm md:text-base font-semibold text-skyblue'>OUR HERITAGE</h4>
        <h1 className='text-4xl md:text-6xl font-bold'>The African <br /> Legacy</h1>
        <div className='flex flex-col gap-8 mt-4 text-sm text-white/60 '>
          <p>Innoson Vehicle Manufacturing is more than a car company. We are the architects of a new African era. Our manufacturing plant in Nnewi combines state-of-the-art automation with the soul of craftmanship.</p>
          <p>Every wield, every stitch and every engine component is tested against the world's highest standards to ensure that you don't just drive - you lead.</p>

        </div>



        <p className='flex font-semibold mt-4'>Read our story <ChevronRight /></p>
      </div>
      <div className='w-full md:w-[50%] relative h-full'>
        <img src="https://static.dezeen.com/uploads/2023/08/charge-cars-micro-factory-london-most-architecture_dezeen_2364_col_10.jpg" alt="" className='flex md:hidden w-full object-cover h-full'/>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqe8GG24VsuH5WC5bpwrBDd2BVfXMxw8pQ_5rqAMvU1upd1yw66xPOVXWBIKUzcWWV-gNRwRup9vG_InKzke1WyouU62q0uwlJQ2zQz-eMrFXwQ359w7CSXIMikRQaPJOpZ1vtACdI3j8yKwwlNEK4Pjfg8Azugeb_xXNPUEl70I4BooZjUvLz4HWo7wunFVv-iVRgOILuUIfmqRuZ1k4ty3_8CdZWBL8ErNyHA66EXXEleWlM1ymXzhlaaeyKUtQCE1DBQJI9ZiI" alt="" className='hidden md:flex w-full object-cover h-full grayscale-10 brightness-60'/>/
        <div className='flex md:hidden absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/50'></div>
      </div>
    </section>
  )
}

export default AfricanLegacy