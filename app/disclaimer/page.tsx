import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Johnny & Jugnu",
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
      <div className="border-b-4 border-[var(--color-brand-yellow)] pb-8 mb-10">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          Legal Information
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
          Disclaimer
        </h1>
      </div>

      <div className="space-y-10 text-lg opacity-80 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">1. Food Allergies & Ingredients</h2>
          <p>
            While we take strict precautions to prevent cross-contamination, our kitchen handles ingredients containing gluten, dairy, nuts, and soy. We cannot guarantee that any item is 100% free of allergens. Please inform our staff of any severe allergies before ordering.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">2. Nutritional Information</h2>
          <p>
            Any nutritional information provided is approximate and based on standard product formulations. Variations may occur depending on portion sizes, preparation techniques, and custom modifier selections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">3. Third-Party Deliveries</h2>
          <p>
            Johnny & Jugnu may utilize third-party delivery services (like Foodpanda) alongside our internal riders. We are not responsible for delays or service interruptions caused by external delivery partners once the food leaves our premises.
          </p>
        </section>
      </div>
    </div>
  );
}