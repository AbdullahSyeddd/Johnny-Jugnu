import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Johnny & Jugnu",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          The Story
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          Built on bold flavors, serious craftsmanship, and the <span className="text-[var(--color-brand-yellow)]">perfect sauce.</span>
        </h1>
      </div>

      <div className="mt-12 space-y-8 text-lg opacity-80 leading-relaxed font-medium">
        <p>
          Johnny & Jugnu was founded with a simple but demanding standard: every burger should feel composed, every wrap should earn its place, and every bite should hit the spot. From the first concept sketches to the final menu, the brand was shaped around the idea that fast food should feel high-end without losing its soul.
        </p>

        <p>
          Our menu brings together premium crispy fillets, carefully balanced wraps, crisp sides, and signature sauces that are designed to satisfy. We work with quality proteins, fresh produce, robust spices, and well-tested recipes so that each item delivers consistency as well as character. 
        </p>

        <h2 className="text-3xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] pt-8">
          It Starts With The Sauce
        </h2>
        <p>
          At Johnny & Jugnu, ingredient quality is never treated as a marketing line. It is the foundation of everything we serve. Our kitchen places emphasis on freshness, reliable sourcing, and disciplined preparation standards. Every component, from the toasted buns to the finishing garnishes, is selected to support the flavor profile.
        </p>

        <p>
          We believe that a memorable meal begins long before it reaches the guest. That is why our internal process gives equal weight to sourcing, storage, prep timing, and consistency during service. 
        </p>

        <h2 className="text-3xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] pt-8">
          The Experience
        </h2>
        <p>
          Whether dining in, taking away, or ordering from home, the experience should feel fast, energetic, and reliable. We want each touchpoint to communicate our passion for great food: an electrifying environment, a menu that packs a punch, and a service style that is always on point.
        </p>
      </div>
    </div>
  );
}