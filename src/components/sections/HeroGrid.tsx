"use client";

import React from 'react';
import Image from 'next/image';

const HeroGrid = () => {
  const imagesBefore = [
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-2-1.webp', alt: 'Wedding photography example 1' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/BFR-AFT-9-2.webp', alt: 'Wedding photography example 2' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-0-3.webp', alt: 'Wedding photography example 3' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-4-4.webp', alt: 'Wedding photography example 4' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/BFR-AFT-6-5.webp', alt: 'Wedding photography example 5' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-18-6.webp', alt: 'Wedding photography example 6' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-21-7.webp', alt: 'Wedding photography example 7' },
  ];

  const imagesAfter = [
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/HERO-9.webp', alt: 'Wedding photography example 8' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-9-10.webp', alt: 'Wedding photography example 9' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-6-11.webp', alt: 'Wedding photography example 10' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-15-12.webp', alt: 'Wedding photography example 11' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-7-13.webp', alt: 'Wedding photography example 12' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-20-14.webp', alt: 'Wedding photography example 13' },
    { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-5-15.webp', alt: 'Wedding photography example 14' },
  ];

  return (
    <section className="intro-hero w-full overflow-hidden bg-black min-h-screen">
        <div className="intro-grid grid grid-cols-2 md:grid-cols-5 gap-0 w-full min-h-screen">
          {/* First 7 Images */}
          {imagesBefore.map((img, index) => (
            <div key={`before-${index}`} className="relative aspect-square md:aspect-auto overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
                priority={index < 5}
              />
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px] mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>
          ))}

          {/* Center Focal Area - Item 8 in a 5-column grid (Row 2, Column 3) */}
          <div className="intro-center flex items-center justify-center relative z-10 aspect-square md:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-xl border border-blue-400/30"></div>
            <div className="intro-content flex flex-col items-center justify-center text-center p-4 relative z-20">
              <div className="relative w-24 h-24 mb-6 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLR-REAL-1-8.png"
                  alt="Colour Store Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              <a
                href="#shop"
                className="intro-btn border border-blue-400/50 bg-blue-500/10 text-white uppercase transition-all duration-500 px-8 py-4 tracking-[0.3em] font-body font-light text-[12px] md:text-[14px] hover:bg-blue-500 hover:text-white hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] whitespace-nowrap backdrop-blur-md"
              >
                EXPLORE STORE
              </a>
            </div>
          </div>

          {/* Last 8 Images */}
          {imagesAfter.map((img, index) => (
            <div key={`after-${index}`} className="relative aspect-square md:aspect-auto overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px] mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

      <style jsx global>{`
        .intro-grid {
          display: grid;
          width: 100%;
          min-height: 100vh;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
          .intro-grid {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(3, 1fr);
            height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroGrid;