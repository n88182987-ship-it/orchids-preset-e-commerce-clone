"use client";

import React from "react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function ComparisonDetail() {
  const before = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-6-11.webp";
  const after = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-7-13.webp";
  
  return <BeforeAfterSlider beforeImage={before} afterImage={after} />;
}
