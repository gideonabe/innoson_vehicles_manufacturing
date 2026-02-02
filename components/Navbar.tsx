import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className=" cursor-pointer">
          <Image src="/ivmlogo.png" alt="Logo" width={160} height={120}/>
        </div>

        <nav className="hidden md:flex items-center gap-12 backdrop-blur-md py-3 px-8 rounded-full bg-white/15">
          <a className="text-xs font-medium tracking-widest hover:text-primary transition-colors" href="#">Models</a>
          <a className="text-xs font-medium tracking-widest hover:text-primary transition-colors" href="#">Finance</a>
          <a className="text-xs font-medium tracking-widest hover:text-primary transition-colors" href="#">Service</a>
          <a className="text-xs font-medium tracking-widest hover:text-primary transition-colors" href="#">About</a>
        </nav>

        <button className="px-4 py-2 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all bg-blue-500/80 rounded-sm">
          Test Drive
        </button>
      </div>
    </header>
  )
}

export default Navbar