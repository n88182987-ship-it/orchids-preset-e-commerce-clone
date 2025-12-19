"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/sections/Navbar";
import Footer from "@/components/layout/Footer";
import { Trash2, ShoppingBag, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "919000000000"; // Replace with actual phone number
    let message = "Hello, I would like to place an order for the following presets:%0A%0A";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}%0A`;
    });
    
    message += `%0A*Total Amount: $${totalPrice.toFixed(2)}*%0A%0AThank you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
            <h1 className="h2 text-4xl">YOUR CART</h1>
            <span className="text-muted-foreground tracking-widest text-xs uppercase">{totalItems} Items</span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-24 space-y-6 border border-dashed border-white/10">
              <div className="flex justify-center">
                <ShoppingBag size={48} strokeWidth={1} className="opacity-20" />
              </div>
              <p className="text-muted-foreground font-light">Your cart is currently empty.</p>
              <Link href="/#shop" className="inline-block btn-outline px-8 py-3 text-xs tracking-[0.2em]">
                RETURN TO SHOP
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-6 p-4 border border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="relative w-24 h-32 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-display text-lg tracking-wide uppercase">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Digital Download</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="text-sm font-light">Qty: {item.quantity}</div>
                        <div className="font-display text-blue-400">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-lg space-y-6 sticky top-32">
                  <h2 className="font-display text-xl tracking-widest uppercase">Summary</h2>
                  <div className="space-y-4 border-b border-white/5 pb-6">
                    <div className="flex justify-between text-sm font-light">
                      <span className="opacity-60">Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-light">
                      <span className="opacity-60">Taxes</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-display text-lg">
                    <span>Total</span>
                    <span className="text-blue-400">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <button 
                      onClick={handleWhatsAppCheckout}
                      className="w-full bg-[#25D366] text-white py-4 flex items-center justify-center gap-3 tracking-[0.2em] font-medium text-xs hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                    >
                      <MessageCircle size={18} /> ORDER ON WHATSAPP
                    </button>
                    <Link 
                      href="/#shop"
                      className="w-full flex items-center justify-center gap-2 py-4 text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity"
                    >
                      Continue Shopping <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="text-[10px] text-center text-muted-foreground italic leading-relaxed pt-4">
                    * Final payment and delivery details will be confirmed via WhatsApp.
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
