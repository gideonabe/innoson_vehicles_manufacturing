import React from 'react';
import { Globe, Share2, Twitter, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  // Data for footer links to keep JSX clean
  const footerSections = [
    {
      title: "Models",
      links: ["G80 Luxury", "G40 Heritage", "G20 Smart", "IVM Carrier"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"]
    },
    {
      title: "Support",
      links: ["Financing", "Maintenance", "Find a Dealer", "Owner's Guide"]
    }
  ];

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5 text-white/60">
      
      {/* Background Watermark (Converted from CSS to Tailwind) */}
      <div className="absolute bottom-0 left-0 text-[15rem] leading-none opacity-[0.2] font-black select-none pointer-events-none text-white z-0">
        IVM
      </div>

      <div className="max-w-300 mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo SVG */}
              <div className=" cursor-pointer">
                <Image src="/ivmlogo.png" alt="Logo" width={160} height={120}/>
              </div>
            </div>
            
            <p className="text-white/50 max-w-xs leading-relaxed text-sm mb-6">
              Pioneering the future of African automotive excellence through luxury, innovation, and uncompromising quality.
            </p>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Globe size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Innoson Vehicle Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;