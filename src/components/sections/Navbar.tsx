"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useCategory } from "@/context/CategoryContext";

const categories = [
  "INDIAN WEDDING",
  "PORTRAITS",
  "LIFESTYLE",
  "CINEMATIC"
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { totalItems } = useCart();
  const { setSelectedCategory } = useCategory();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/#shop" },
    { name: "Gallery", href: "/#gallery" },
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const shopSection = document.getElementById("shop");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    setSelectedCategory(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" 
            : "bg-gradient-to-b from-black/60 to-transparent py-6"
        }`}
      >
          <div className="container flex items-center justify-between">
            {/* Desktop Links Left */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                onClick={handleHomeClick}
                className="nav-link text-white/90 hover:text-white transition-colors tracking-[0.2em] text-[13px] uppercase"
              >
                Home
              </Link>
              
              {/* Presets Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 nav-link text-white/90 hover:text-white transition-colors tracking-[0.2em] text-[13px] uppercase">
                  PRESETS <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-6 min-w-[240px] shadow-2xl">
                        <div className="flex flex-col gap-4">
                          <button 
                            onClick={() => {
                              setSelectedCategory(null);
                              setIsDropdownOpen(false);
                            }}
                            className="text-left text-[11px] tracking-[0.3em] text-white/60 hover:text-white transition-colors uppercase"
                          >
                            VIEW ALL BUNDLES
                          </button>
                          <div className="h-[1px] bg-white/5 w-full my-1" />
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => handleCategorySelect(cat)}
                              className="text-left text-[11px] tracking-[0.3em] text-white/60 hover:text-white transition-colors uppercase"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#shop"
                className="nav-link text-white/90 hover:text-white transition-colors tracking-[0.2em] text-[13px] uppercase"
              >
                Shop
              </Link>
            </div>

            {/* Logo */}
              <Link href="/" onClick={handleHomeClick} className="flex items-center gap-4 group">
                <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/magic_tools__3_-removebg-preview-1766149505661.png"
                    alt="Magic Tools Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-lg md:text-xl tracking-[0.3em] text-white uppercase font-bold">Magic Tools</span>
              </Link>


            {/* Desktop Links Right */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link text-white/90 hover:text-white transition-colors tracking-[0.2em] text-[13px] uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 ml-4">
                <button className="text-white/80 hover:text-white transition-colors">
                  <Search size={18} strokeWidth={1.5} />
                </button>
                <Link href="/cart" className="text-white/80 hover:text-white transition-colors relative">
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-500/50">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle & Icons */}
            <div className="flex md:hidden items-center gap-4">
              <Link href="/cart" className="text-white relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* Slogan Bar */}
        <div className={`fixed left-0 right-0 z-40 transition-all duration-500 overflow-hidden ${
          isScrolled ? "top-[73px]" : "top-[104px]"
        }`}>
          <div className="bg-white/5 backdrop-blur-md border-b border-white/5 py-3">
            <div className="container">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-white/60"
              >
                Transform Raw Moments Into <span className="text-blue-400">Timeless, Exclusive Presets</span> with MagicTools
              </motion.p>
            </div>
          </div>
        </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col gap-8"
          >
            <button
              className="self-end text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display text-white tracking-widest"
                  onClick={() => {
                    if (link.name === "Home") handleHomeClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
