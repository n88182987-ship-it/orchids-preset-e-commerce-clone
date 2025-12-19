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
                  <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium italic">Simplicity is Magic</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="group space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">01</div>
                        <h4 className="text-white text-sm tracking-widest uppercase font-semibold">Choose Your Vibe</h4>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed pl-12">Select from our exclusive range of bundles tailored for different lighting and aesthetics.</p>
                    </div>
                    
                    <div className="group space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">02</div>
                        <h4 className="text-white text-sm tracking-widest uppercase font-semibold">One-Click Magic</h4>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed pl-12">Import to Lightroom (Mobile or Desktop) and apply with a single tap. It's that simple.</p>
                    </div>

                    <div className="group space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">03</div>
                        <h4 className="text-white text-sm tracking-widest uppercase font-semibold">Refine & Export</h4>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed pl-12">Tweak exposure if needed, and export your masterpiece in high resolution.</p>
                    </div>
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
