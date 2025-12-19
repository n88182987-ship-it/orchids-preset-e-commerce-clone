"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "INDIAN WEDDING",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-0-3.webp",
    count: "12 PRESETS",
  },
  {
    id: 2,
    title: "PORTRAITS",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-18-6.webp",
    count: "8 PRESETS",
  },
  {
    id: 3,
    title: "LIFESTYLE",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-21-7.webp",
    count: "15 PRESETS",
  },
  {
    id: 4,
    title: "CINEMATIC",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-15-12.webp",
    count: "10 PRESETS",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="h2 text-2xl mb-2 text-white">{category.title}</h3>
                <span className="cta-text text-[10px] text-white/80">{category.count}</span>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <button className="btn-outline text-[10px] py-2 px-6">VIEW ALL</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
