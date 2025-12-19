"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
          <div className="container flex items-center justify-between">
            {/* Desktop Links Left */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link text-white/90 hover:text-white transition-colors tracking-[0.2em] text-[13px] uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/magic_tools__3_-removebg-preview-1766149505661.png"
                  alt="Magic Tools Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl md:text-2xl tracking-[0.3em] text-white uppercase font-bold">Magic Tools</span>
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
