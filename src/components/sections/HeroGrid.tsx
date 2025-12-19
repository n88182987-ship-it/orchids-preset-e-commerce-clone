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
              className="intro-center flex items-center justify-center relative z-20 aspect-square md:aspect-auto group/center"
            >
              {/* Animated Background Magic Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-blue-600/30 via-purple-500/10 to-blue-400/30 blur-[120px] rounded-full pointer-events-none"
              />
              
              <div className="relative z-30 flex flex-col items-center justify-center text-center px-6">
                {/* Floating Magic Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-20, -120, -20],
                        x: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `50%`,
                      }}
                    />
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="mb-8"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/magic_tools__3_-removebg-preview-1766149505661.png"
                    alt="Magic Tools"
                    width={180}
                    height={180}
                    className="drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    priority
                  />
                </motion.div>

                <motion.a
                  href="#shop"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-12 py-5 overflow-hidden rounded-full"
                >
                  {/* Luxury Magic Button Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-white/10 to-blue-600/20 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:border-white/50" />
                  
                  {/* Animated Border/Glow */}
                  <motion.div 
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(59,130,246,0.5)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Shimmer Effect */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-white text-[11px] tracking-[0.5em] font-bold uppercase">Explore Products</span>
                    <motion.div 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-[1px] bg-white/50"
                    />
                  </div>
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
