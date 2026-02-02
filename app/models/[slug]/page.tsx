import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vehicleData, Vehicle } from '@/data/vehicle';
import { ArrowLeft, CheckCircle, Gauge, Zap, Calendar } from 'lucide-react';

// 1. Define Props Interface for the Page
interface PageProps {
  params: Promise<{slug: string}>;
}

// 2. The Page Component
const VehicleDetails = async ({ params }: PageProps) => {
  const { slug } = await params;
  // Find the vehicle that matches the URL slug
  const vehicle = vehicleData.find((v) => v.slug === slug);

  // If no vehicle found, show 404 page
  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-10 pb-20">
      
      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link 
          href="/#models" 
          className="inline-flex items-center text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Models
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: IMAGE */}
        <div className="relative aspect-4/3 w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {/* Decorative Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-contain p-8 z-0"
            priority
          />
          
          {/* Overlay Info */}
          <div className="absolute bottom-6 left-6 z-20">
            <span className="px-3 py-1 bg-sky-500 text-black text-xs font-bold uppercase rounded-full">
              {vehicle.category}
            </span>
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div>
          <h1 className="text-4xl md:text-6xl font-black mb-2">{vehicle.name}</h1>
          <p className="text-sky-400 text-2xl font-mono mb-6">{vehicle.price}</p>
          
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {vehicle.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Gauge className="text-sky-400 w-6 h-6" />
              <div>
                <p className="text-xs text-white/50 uppercase">Range</p>
                <p className="font-bold">{vehicle.range}</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Zap className="text-sky-400 w-6 h-6" />
              <div>
                <p className="text-xs text-white/50 uppercase">Power</p>
                <p className="font-bold">{vehicle.power}</p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {vehicle.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 bg-sky-500 text-black font-bold rounded-full hover:bg-white transition-colors">
              Book Test Drive
            </button>
            <button className="flex-1 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

// OPTIONAL: Generate static pages at build time for super fast loading
export async function generateStaticParams() {
  return vehicleData.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default VehicleDetails;