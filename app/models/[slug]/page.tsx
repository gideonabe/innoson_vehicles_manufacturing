import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vehicleData } from '@/data/vehicle';
import { ArrowLeft, MessageSquare, Calendar } from 'lucide-react'; // Using Lucide icons to replace Material Symbols

interface PageProps {
  params: Promise<{ slug: string }>;
}

const VehicleDetails = async ({ params }: PageProps) => {
  const { slug } = await params;
  const vehicle = vehicleData.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#144bb8] selection:text-white">
      
      {/* 1. GLASS NAV (Sub-Nav Sticky) */}
      <div className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          
          {/* Back Link added for better UX */}
          <Link href="/#models" className="flex items-center text-xs font-bold tracking-widest text-black/50 hover:text-white mr-6">
             <ArrowLeft className="w-4 h-4 mr-2" /> BACK
          </Link>

          <div className="flex gap-4 md:gap-8 h-full items-center overflow-x-auto no-scrollbar">
            <a className="flex flex-col items-center justify-center border-b-2 border-[#144bb8] text-black/80 h-full px-2" href="#overview">
              <p className="text-xs md:text-sm font-bold tracking-wider">OVERVIEW</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-black/80 h-full px-2 transition-colors" href="#performance">
              <p className="text-xs md:text-sm font-bold tracking-wider">PERFORMANCE</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-black/80 h-full px-2 transition-colors" href="#features">
              <p className="text-xs md:text-sm font-bold tracking-wider">FEATURES</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-black/80 hover:text-white h-full px-2 transition-colors" href="#specs">
              <p className="text-xs md:text-sm font-bold tracking-wider">SPECS</p>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <p className="text-black/80 text-xs font-medium uppercase tracking-widest">{vehicle.name} Edition</p>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative w-full h-[95vh] overflow-hidden bg-[#fffefe]" id="overview">
        {/* Background Image Container */}
        <div className="absolute inset-0 flex items-center justify-center">
             {/* We use Next/Image with 'fill' and object-cover to mimic background-size: cover */}
             <div className="relative w-full h-full">
                <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    fill 
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlays */}
                {/* <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-[#0a0a0a]/90" /> */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-black/20 to-black/10" />
                <div className="md:hidden absolute inset-0 bg-linear-to-r from-black via-black/40 to-black/40" />
             </div>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24">
          <div className="max-w-2xl animate-[fadeIn_0.8s_ease-out]">
            <h1 className="text-white text-5xl md:text-6xl font-light leading-tight tracking-tight mb-4">
              {vehicle.name}<br/>
              <span className="font-bold">The Apex of Engineering</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
              {vehicle.description || "A masterpiece of power and prestige, designed to conquer every terrain with uncompromising luxury."}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Estimated Price</p>
                <p className="text-white text-xl md:text-3xl font-bold leading-none">{vehicle.price}</p>
              </div>
              <button className="bg-white text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Build Yours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE STATS GRID */}
      <section className="py-24 bg-[#111722] border-y border-white/5" id="performance">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[#144bb8] font-bold tracking-[0.2em] text-sm mb-4 uppercase">Dominance Redefined</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Engineering Excellence</h3>
            </div>
            <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
              The heart of the {vehicle.name} is a precision-engineered powertrain that delivers explosive acceleration and refined cruising capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Stat 1: Power */}
            <div className="py-12 md:px-8 flex flex-col gap-2">
              <span className="text-gray-600 font-bold tracking-widest text-xs uppercase">Max Power</span>
              <div className="flex items-baseline gap-2">
                {/* Extracting number from string like "200 hp" or using default */}
                <p className="text-6xl font-bold text-white">{(typeof vehicle.power === 'string' ? vehicle.power : String(vehicle.power)).replace(/\D/g,'') || '300'}</p>
                <span className="text-[#144bb8] font-bold text-xl uppercase">HP</span>
              </div>
              <p className="text-gray-400 text-sm mt-4 font-light leading-snug">Precision-tuned for responsive performance across all RPM ranges.</p>
            </div>

            {/* Stat 2: Torque/Range (Using Range here as it's in your data) */}
            <div className="py-12 md:px-8 flex flex-col gap-2">
              <span className="text-gray-600 font-bold tracking-widest text-xs uppercase">Est. Range</span>
              <div className="flex items-baseline gap-2">
                 {/* Extract number for display */}
                <p className="text-6xl font-bold text-white">{(typeof vehicle.range === 'string' ? vehicle.range : String(vehicle.range)).replace(/\D/g,'') || '400'}</p>
                <span className="text-[#144bb8] font-bold text-xl uppercase">KM</span>
              </div>
              <p className="text-gray-400 text-sm mt-4 font-light leading-snug">Effortless pulling power designed for Nigeria's diverse topographies.</p>
            </div>

            {/* Stat 3: Acceleration (Static placeholder or data if available) */}
            <div className="py-12 md:px-8 flex flex-col gap-2">
              <span className="text-gray-600 font-bold tracking-widest text-xs uppercase">0-100 KM/H</span>
              <div className="flex items-baseline gap-2">
                <p className="text-6xl font-bold text-white">6.2</p>
                <span className="text-[#144bb8] font-bold text-xl uppercase">Sec</span>
              </div>
              <p className="text-gray-400 text-sm mt-4 font-light leading-snug">Remarkable agility for a vehicle of such commanding presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERIOR / FEATURES SECTION */}
      <section className="py-24 bg-[#0a0a0a]" id="features">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="text-[#144bb8] font-bold tracking-[0.2em] text-sm mb-4 uppercase">The Sanctuary</h2>
              <h3 className="text-5xl font-bold text-white mb-8">Key Features</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                The {vehicle.name} is a masterclass in craftsmanship. Every surface is touched by premium materials designed for the ultimate driving experience.
              </p>
              
              <ul className="space-y-6">
                {vehicle.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#144bb8]/10 flex items-center justify-center text-[#144bb8] mt-1 shrink-0">
                       <span className="text-lg">✦</span> 
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Premium Feature {idx + 1}</h4>
                      <p className="text-gray-500 text-sm">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Gallery (Using the main image as placeholder for interior shots for now) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative group">
                  <Image src={vehicle.image} alt="Interior detail" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden relative group">
                    <Image src={vehicle.image} alt="Dashboard" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="aspect-square rounded-xl bg-[#111722] flex items-center justify-center border border-white/5">
                   <p className="text-center text-gray-500 text-xs tracking-widest uppercase">
                      More <br/> Photos <br/> Coming Soon
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECS TABLE */}
      <section className="py-24 bg-[#111722]" id="specs">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h3>
          <div className="border-t border-white/10">
            <div className="py-6 border-b border-white/5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-4 transition-colors">
              <span className="text-gray-300 font-medium">Category</span>
              <span className="text-white font-bold">{vehicle.category}</span>
            </div>
            <div className="py-6 border-b border-white/5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-4 transition-colors">
              <span className="text-gray-300 font-medium">Model Name</span>
              <span className="text-white font-bold">{vehicle.name}</span>
            </div>
            <div className="py-6 border-b border-white/5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-4 transition-colors">
              <span className="text-gray-300 font-medium">Price Range</span>
              <span className="text-white font-bold">{vehicle.price}</span>
            </div>
            <div className="py-6 border-b border-white/5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-4 transition-colors">
              <span className="text-gray-300 font-medium">Drivetrain</span>
              <span className="text-white font-bold">Intelligent 4WD System</span>
            </div>
            <div className="py-6 border-b border-white/5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-4 transition-colors">
              <span className="text-gray-300 font-medium">Safety Rating</span>
              <span className="text-white font-bold">5-Star IVM Security Shield</span>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#144bb8]/10 border border-[#144bb8]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white text-xl font-bold">Ready for the road?</p>
              <p className="text-gray-400">Find your nearest authorized IVM Experience Center.</p>
            </div>
            <button className="bg-[#144bb8] text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 hover:bg-[#144bb8]/90">
               Locate Dealer
            </button>
          </div>
        </div>
      </section>

      {/* 6. FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="bg-[#144bb8] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <Calendar className="w-6 h-6" />
        </button>
      </div>

    </main>
  );
};

// Generate static params for performance
export async function generateStaticParams() {
  return vehicleData.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default VehicleDetails;