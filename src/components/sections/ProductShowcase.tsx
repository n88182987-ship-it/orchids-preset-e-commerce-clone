"use client";

import React from "react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "INDIAN WEDDING BUNDLE",
    price: "$49.00",
    description: "Our best-selling collection for vibrant and timeless wedding edits.",
    before: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/BFR-AFT-9-2.webp",
    after: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-2-1.webp",
  },
  {
    id: 2,
    title: "CINEMATIC LIFESTYLE",
    price: "$39.00",
    description: "Create mood and atmosphere with our premium film-inspired presets.",
    before: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/BFR-AFT-6-5.webp",
    after: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-4-4.webp",
  },
  {
    id: 3,
    title: "PORTRAIT PRO PACK",
    price: "$29.00",
    description: "Perfect skin tones and professional lighting in one click.",
    before: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-9-10.webp",
    after: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/HERO-9.webp",
  },
];

export function ProductShowcase() {
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
            FEATURED BUNDLES
          </motion.h2>
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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 overflow-hidden border border-white/5">
                <BeforeAfterSlider
                  beforeImage={product.before}
                  afterImage={product.after}
                  aspectRatio="aspect-[4/5]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="h3 italic text-xl group-hover:text-white transition-colors">
                    {product.title}
                  </h3>
                  <span className="font-body text-sm tracking-widest">{product.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full mt-4 btn-outline py-3 text-[12px]">
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
