import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white w-full border-t border-white/5">
      <div id="colophon" role="contentinfo" className="footer-width-fixer">
        <div className="elementor elementor-31">
          <div 
            className="elementor-element elementor-element-cad3446 flex flex-col items-center justify-center py-[80px] px-4"
            style={{ backgroundColor: '#000000' }}
          >
            <div className="max-w-[1200px] w-full flex flex-col items-center">
              {/* Logo and Info Container */}
              <div className="elementor-element elementor-element-04dd21f w-full flex flex-col items-center gap-12">
                
                  {/* Logo Section */}
                  <div className="elementor-element elementor-element-92e437e flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <div className="elementor-widget-container max-w-[200px] w-full px-6 md:px-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/magic-tools-1766149506021.png"
                        alt="Magic Tools Logo"
                        width={200}
                        height={100}
                        priority
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    
                    {/* MagicPin Info */}
                    <div className="flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full group hover:border-blue-500/50 transition-colors duration-500">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-[10px] font-bold">MP</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-bold">Featured on</span>
                        <span className="text-[12px] tracking-widest uppercase font-display">MagicPin</span>
                      </div>
                    </div>
                  </div>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                  <a href="mailto:support@magictools.com" className="flex items-center gap-3 group text-[#a3a3a3] hover:text-white transition-colors">
                    <Mail size={16} className="text-blue-500" />
                    <span className="text-[13px] tracking-widest font-light">support@magictools.com</span>
                  </a>
                  
                  <div className="relative group flex items-center gap-3 cursor-help">
                    <Phone size={16} className="text-blue-500" />
                    <span className="text-[13px] tracking-widest font-light text-[#a3a3a3]">Contact Us</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-white text-black text-[12px] font-bold tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      +1 (555) 000-1234
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                    </div>
                  </div>
                </div>

                {/* Social Media Icons Section */}
                <div className="elementor-element elementor-element-64f6b53 w-full">
                  <div className="elementor-widget-container">
                    <ul className="flex items-center justify-center gap-8 list-none p-0 m-0">
                      <li className="inline-block">
                        <a 
                          href="#" 
                          className="text-white hover:opacity-70 transition-opacity duration-300"
                          aria-label="Facebook"
                        >
                          <Facebook size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a 
                          href="#" 
                          className="text-white hover:opacity-70 transition-opacity duration-300"
                          aria-label="Instagram"
                        >
                          <Instagram size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a 
                          href="#" 
                          className="text-white hover:opacity-70 transition-opacity duration-300"
                          aria-label="Youtube"
                        >
                          <Youtube size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a 
                          href="#" 
                          className="text-white hover:opacity-70 transition-opacity duration-300"
                          aria-label="X (Twitter)"
                        >
                          <Twitter size={18} strokeWidth={1.5} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="elementor-element elementor-element-78ef72e w-full mt-16 pt-8 border-t border-white/5">
                <div className="elementor-widget-container flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                  <div className="hfe-copyright-wrapper">
                      <span className="font-body text-[11px] font-light tracking-[0.2em] uppercase text-[#666]">
                        Copyright © 2025 Magic Tools
                      </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#666]">Developed by</span>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-white font-medium flex items-center gap-1 group">
                      Orchids AI
                      <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;