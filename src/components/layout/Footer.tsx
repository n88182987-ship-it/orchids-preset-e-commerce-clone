import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

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
              {/* Logo and Social Icons Container */}
              <div className="elementor-element elementor-element-04dd21f w-full flex flex-col items-center gap-10">
                
                {/* Logo Section */}
                <div className="elementor-element elementor-element-92e437e flex justify-center w-full">
                  <div className="elementor-widget-container max-w-[449px] w-full px-6 md:px-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CCCCLR-16.png"
                      alt="Colour Store Presets Logo"
                      width={449}
                      height={326}
                      priority
                      className="w-full h-auto object-contain"
                    />
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
              <div className="elementor-element elementor-element-78ef72e w-full mt-12">
                <div className="elementor-widget-container text-center">
                  <div className="hfe-copyright-wrapper">
                    <span className="font-body text-[13px] font-light tracking-[0.2em] uppercase text-[#a3a3a3]">
                      Copyright © 2025 Colour Store Presets
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