"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CategoryContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

  export function CategoryProvider({ children }: { children: ReactNode }) {
    const [selectedCategory, setSelectedCategoryState] = useState<string | null>(() => {
      if (typeof window !== "undefined") {
        return sessionStorage.getItem("selectedCategory");
      }
      return null;
    });

    const setSelectedCategory = (category: string | null) => {
      setSelectedCategoryState(category);
      if (category) {
        sessionStorage.setItem("selectedCategory", category);
      } else {
        sessionStorage.removeItem("selectedCategory");
      }
    };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
