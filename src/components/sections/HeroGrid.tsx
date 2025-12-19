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
          <div key={`before-${index}`} className="relative aspect-square md:aspect-auto overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 20vw"
              priority={index < 5}
            />
          </div>
        ))}

        {/* Center Focal Area - Item 8 in a 5-column grid (Row 2, Column 3) */}
        <div className="intro-center flex items-center justify-center bg-black relative z-10 aspect-square md:aspect-auto">
          <div className="intro-content flex flex-col items-center justify-center text-center p-4">
            <div className="relative w-24 h-24 mb-6 md:w-32 md:h-32">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLR-REAL-1-8.png"
                alt="Colour Store Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <a
              href="#"
              className="intro-btn border border-white bg-transparent text-white uppercase transition-all duration-300 px-6 py-3 tracking-[0.2em] font-body font-normal text-[12px] md:text-[14px] hover:bg-white hover:text-black whitespace-nowrap"
            >
              ENTER STORE
            </a>
          </div>
        </div>

        {/* Last 8 Images */}
        {imagesAfter.map((img, index) => (
          <div key={`after-${index}`} className="relative aspect-square md:aspect-auto overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
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