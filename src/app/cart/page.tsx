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

  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");

    const handleWhatsAppCheckout = () => {
      if (!customerName || !customerPhone) {
        alert("Please enter your name and phone number to proceed.");
        return;
      }

      const phoneNumber = "919727155628"; 
      const orderNo = `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
      const date = new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      
      const productList = cart.map((item, index) => 
        `${index + 1}. ${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
      ).join('%0A');

      let message = "Hello,%0A";
      message += "I have placed an order. Please find the details below:%0A%0A";
      message += `Order No: ${orderNo}%0A`;
      message += `Order Date: ${date}%0A%0A`;
      message += `Customer Name: ${customerName}%0A`;
      message += `Phone Number: ${customerPhone}%0A%0A`;
      message += "Products:%0A";
      message += `${productList}%0A%0A`;
      message += `Total Amount Paid: ₹${totalPrice.toLocaleString('en-IN')}%0A%0A`;
      message += "Please confirm my order. Thank you.";
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    };

  const WhatsAppIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      width="20" 
      height="20" 
      fill="currentColor" 
      className="transition-transform group-hover:scale-110"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

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
                          <div className="font-display text-blue-400">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
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
                        <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm font-light">
                        <span className="opacity-60">Taxes</span>
                        <span>₹0</span>
                      </div>
                    </div>
                      <div className="flex justify-between font-display text-lg">
                        <span>Total</span>
                        <span className="text-blue-400">₹{totalPrice.toLocaleString('en-IN')}</span>
                      </div>

                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-semibold">Your Name</label>
                        <input 
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="ENTER YOUR FULL NAME"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[10px] tracking-widest focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-semibold">Phone Number</label>
                        <input 
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[10px] tracking-widest focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-white/10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppCheckout}
                      className="group w-full bg-[#25D366] text-white py-4 flex items-center justify-center gap-3 tracking-[0.2em] font-bold text-[10px] hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(37,211,102,0.2)] rounded-sm"
                    >
                      <WhatsAppIcon /> ORDER ON WHATSAPP
                    </motion.button>
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
