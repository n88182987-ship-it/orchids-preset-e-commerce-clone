"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Navbar } from "@/components/sections/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">PRODUCT NOT FOUND</h1>
          <button onClick={() => router.push("/")} className="text-blue-400 hover:underline">Return to Store</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.after,
      description: product.description
    });
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container py-32">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={14} /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Comparison Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border border-white/5"
          >
            <BeforeAfterSlider
              beforeImage={product.before}
              afterImage={product.after}
              aspectRatio="aspect-[4/5]"
            />
            <div className="p-4 text-center text-[10px] tracking-widest uppercase opacity-40">
              Drag slider to see before & after
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="h2 text-4xl lg:text-6xl">{product.title}</h1>
              <div className="text-2xl font-display text-blue-400">{product.priceLabel}</div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-light">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white text-black py-4 tracking-[0.2em] font-medium text-sm hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> ADD TO CART
              </button>
              <button 
                onClick={() => {
                   handleAddToCart();
                   router.push("/cart");
                }}
                className="flex-1 border border-white/20 py-4 tracking-[0.2em] font-light text-sm hover:bg-white/5 transition-all duration-300"
              >
                BUY IT NOW
              </button>
            </div>

            <div className="space-y-4 pt-8">
              <div className="text-[10px] tracking-[0.3em] uppercase opacity-40">Guaranteed Safe Checkout</div>
              <div className="flex gap-4 opacity-30 grayscale contrast-150">
                {/* Placeholder for payment icons */}
                <div className="h-6 w-10 border border-white/20 rounded"></div>
                <div className="h-6 w-10 border border-white/20 rounded"></div>
                <div className="h-6 w-10 border border-white/20 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
