"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[var(--color-background)] pt-20 pb-24">
      
      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[var(--color-brand-yellow)] opacity-10 dark:opacity-[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-5xl z-10">
        
        {/* FLOATING MENU CATEGORY PILLS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="px-5 py-2 rounded-full border-2 border-black/10 dark:border-white/10 text-xs md:text-sm font-black uppercase tracking-widest bg-[var(--color-background)] shadow-sm">
            Signature Mains
          </span>
          <span className="px-5 py-2 rounded-full border-2 border-black/10 dark:border-white/10 text-xs md:text-sm font-black uppercase tracking-widest bg-[var(--color-background)] shadow-sm">
            Toasted Wraps
          </span>
          <span className="px-5 py-2 rounded-full border-2 border-black/10 dark:border-white/10 text-xs md:text-sm font-black uppercase tracking-widest bg-[var(--color-background)] shadow-sm">
            Juicy Nuggs
          </span>
        </div>

        {/* BALANCED TYPOGRAPHY (Reduced size to look clean and professional) */}
        <div className="space-y-2 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-[var(--color-foreground)]">
            PURE. <br />
            <span className="text-[var(--color-brand-yellow)]">UNAPOLOGETIC.</span> <br />
            FLAVOR.
          </h1>
        </div>

        {/* SUBTEXT */}
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-medium mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
          We don't just do burgers. We craft an entire lineup of high-energy, premium fast food. Choose your mains, pick your sauces, and make it your own.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Link 
            href="#menu" 
            className="bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-xl w-full sm:w-auto"
          >
            Start Order
          </Link>
          <Link 
            href="/about" 
            className="bg-transparent border-2 border-black/20 dark:border-white/20 font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* SLIDING MARQUEE BAR */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-[var(--color-brand-yellow)] py-4 overflow-hidden border-y-4 border-[var(--color-brand-yellow)] z-20">
        <div className="flex flex-nowrap w-max animate-marquee items-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex shrink-0 gap-10 px-5 text-xl font-black uppercase tracking-widest whitespace-nowrap">
              <span>LIKE YOU'VE NEVER HAD BEFORE •</span>
              <span>THE BEST IN TOWN •</span>
              <span>WEHSHI FLAVORS •</span>
              <span>FRESHLY GRILLED •</span>
              <span>IT STARTS WITH THE SAUCE •</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}