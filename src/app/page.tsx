import HeroGrid from "@/components/sections/HeroGrid";
import { Navbar } from "@/components/sections/Navbar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ComparisonDetail } from "@/components/sections/ComparisonDetail";
import Footer from "@/components/layout/Footer";
import Counter from "@/components/ui/Counter";

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
        <section id="gallery" className="py-24 bg-black border-t border-white/5 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="h2 text-4xl md:text-5xl tracking-tighter">PRECISION EDITING ON THE GO</h2>
                  <div className="h-1 w-20 bg-blue-600" />
                </div>
                
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  Our presets are designed to work seamlessly across mobile and desktop. 
                  Experience the before and after effects with our touch-responsive comparison tools. 
                  Every detail, every shadow, every highlight—controlled by you.
                </p>

                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">Bundle Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-white/70">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      One-click Professional Results
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      Mobile & Desktop Compatible
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      Lifetime Access & Updates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      Step-by-step Installation Guide
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative group">
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                    <span className="block text-3xl font-display mb-1 text-white">
                      <Counter value={5000} />+
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase opacity-40 font-bold">SOLD PRESETS</span>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative group">
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                    <span className="block text-3xl font-display mb-1 text-white">
                      <Counter value={100} />+
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase opacity-40 font-bold">PRO PRESETS</span>
                  </div>
                  <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative group">
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                    <span className="block text-3xl font-display mb-1 text-white">
                      24/7
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase opacity-40 font-bold">SUPPORT</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 group shadow-2xl shadow-blue-900/10">
                <ComparisonDetail />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
