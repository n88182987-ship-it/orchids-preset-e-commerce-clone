import HeroGrid from "@/components/sections/HeroGrid";
import { Navbar } from "@/components/sections/Navbar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Intro Portal */}
      <HeroGrid />
      
      {/* Store Content */}
      <div className="relative">
        <Navbar />
        <ProductShowcase />
        <CategoryGrid />
        
        {/* Comparison Slider Detail Section (Bonus for "Main Feature") */}
        <section id="gallery" className="py-24 bg-black border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="h2 text-4xl">PRECISION EDITING ON THE GO</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our presets are designed to work seamlessly across mobile and desktop. 
                  Experience the before and after effects with our touch-responsive comparison tools. 
                  Every detail, every shadow, every highlight—controlled by you.
                </p>
                <div className="flex gap-4">
                  <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="block text-2xl font-display">100+</span>
                    <span className="text-[10px] tracking-widest uppercase opacity-60">PRO PRESETS</span>
                  </div>
                  <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="block text-2xl font-display">24/7</span>
                    <span className="text-[10px] tracking-widest uppercase opacity-60">SUPPORT</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
                <ProductShowcaseDetail />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function ProductShowcaseDetail() {
  const before = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-6-11.webp";
  const after = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0393263-6b1f-4544-bf0a-42b0640ce9a2-colourstorepresets-com/assets/images/CLRPIC-7-13.webp";
  
  // Use client component inside this server component? 
  // Actually, BeforeAfterSlider is a client component, so we need to import it.
  // Wait, I can't import a client component directly if it uses hooks? No, it's fine in Next 15.
  const { BeforeAfterSlider } = require("@/components/ui/BeforeAfterSlider");
  return <BeforeAfterSlider beforeImage={before} afterImage={after} />;
}
