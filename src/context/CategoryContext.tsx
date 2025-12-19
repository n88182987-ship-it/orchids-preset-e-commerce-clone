"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategoryState] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("selectedCategory");
    if (saved) {
      setSelectedCategoryState(saved);
    }
  }, []);

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
