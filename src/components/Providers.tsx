"use client";

import { CartProvider } from "@/context/CartContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CategoryProvider>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </CategoryProvider>
  );
}
