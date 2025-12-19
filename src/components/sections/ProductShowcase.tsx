"use client";

import React from "react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useCategory } from "@/context/CategoryContext";
import { products } from "@/lib/products";
import { toast } from "sonner";
import Link from "next/link";

export function ProductShowcase() {
  const { addToCart } = useCart();
  const { selectedCategory, setSelectedCategory } = useCategory();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.after,
      description: product.description
    });
    toast.success(`${product.title} added to cart!`);
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <section id="shop" className="py-24 bg-black">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h2 mb-4"
          >
            {selectedCategory ? `${selectedCategory} BUNDLES` : "FEATURED BUNDLES"}
          </motion.h2>
          {selectedCategory && (
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-[10px] tracking-[0.3em] text-white/40 hover:text-white transition-colors mb-4 uppercase"
            >
              / VIEW ALL BUNDLES
            </button>
          )}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h3 text-muted-foreground max-w-2xl"
          >
            Professional tools for professional photographers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="mb-6 overflow-hidden border border-white/5 cursor-pointer">
                  <BeforeAfterSlider
                    beforeImage={product.before}
                    afterImage={product.after}
                    aspectRatio="aspect-[4/5]"
                  />
                </div>
              </Link>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="h3 italic text-xl group-hover:text-white transition-colors cursor-pointer">
                      {product.title}
                    </h3>
                  </Link>
                  <span className="font-body text-sm tracking-widest">{product.priceLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {product.description}
                </p>
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="w-full mt-4 btn-outline py-3 text-[12px] hover:bg-white hover:text-black transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
