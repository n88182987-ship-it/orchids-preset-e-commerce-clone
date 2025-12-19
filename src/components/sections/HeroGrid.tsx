"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const HeroGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, transparent, black)`;

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="intro-hero w-full overflow-hidden bg-black min-h-screen relative"
    >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="intro-grid grid grid-cols-2 md:grid-cols-5 gap-0 w-full min-h-screen relative z-0"
        >
          {/* First 7 Images */}
          {imagesBefore.map((img, index) => (
            <motion.div 
              key={`before-${index}`} 
              variants={itemVariants}
              className="relative aspect-square md:aspect-auto overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
                priority={index < 5}
              />
            </motion.div>
          ))}

          {/* Center Focal Area */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { type: "spring", damping: 15, stiffness: 100, delay: 1 }
              }
            }}
            className="intro-center flex items-center justify-center relative z-20 aspect-square md:aspect-auto overflow-hidden"
          >
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 50px rgba(30,58,138,0.3)", "0 0 80px rgba(59,130,246,0.5)", "0 0 50px rgba(30,58,138,0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-black/40 backdrop-blur-3xl border border-white/10"
            />
            <div className="intro-content flex flex-col items-center justify-center text-center p-8 relative z-30 w-full h-full">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-32 h-32 mb-6 md:w-40 md:h-40"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/magic_tools__3_-removebg-preview-1766149505661.png"
                    alt="Magic Tools Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
                
                <div className="space-y-2 mb-10">
                  <h1 className="text-white font-display text-2xl md:text-4xl tracking-[0.4em] uppercase font-bold">Magic Tools</h1>
                  <p className="text-[10px] md:text-[12px] text-white/60 tracking-[0.5em] uppercase font-light">Elevate Your Visual Story</p>
                </div>

              <motion.a
                href="#shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 px-8 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/20 group-hover:border-white transition-colors duration-500" />
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 tracking-[0.3em] text-[11px] font-light">EXPLORE STORE</span>
                <div className="relative z-10 w-6 h-[1px] bg-white group-hover:bg-black transition-colors duration-500" />
              </motion.a>
            </div>
          </motion.div>

          {/* Last 8 Images */}
          {imagesAfter.map((img, index) => (
            <motion.div 
              key={`after-${index}`} 
              variants={itemVariants}
              className="relative aspect-square md:aspect-auto overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </motion.div>
          ))}

          {/* Spotlight Overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{ 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              maskImage: maskImage,
              WebkitMaskImage: maskImage
            }}
          >
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px]" />
          </motion.div>
        </motion.div>

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
