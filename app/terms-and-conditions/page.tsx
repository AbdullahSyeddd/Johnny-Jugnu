import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Johnny & Jugnu",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
      <div className="border-b-4 border-[var(--color-brand-yellow)] pb-8 mb-10">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          The Rules of the Game
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9]">
          Terms & Conditions
        </h1>
      </div>

      <div className="space-y-10 text-lg opacity-80 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">1. Ordering & Acceptance</h2>
          <p>
            Submission of an order through our website does not guarantee acceptance. All orders are subject to availability, delivery radius limits, and operational capacity. We reserve the right to cancel or modify orders if necessary, and we will notify you via the provided phone number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">2. Pricing & Payments</h2>
          <p>
            All prices listed on the website are inclusive of applicable government taxes. Delivery fees are calculated separately and added to the final total at checkout. Prices are subject to change without prior notice. Cash on Delivery (COD) is the standard payment method unless stated otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">3. Intellectual Property</h2>
          <p>
            All branding, logos, menu photography, and website design elements are the exclusive intellectual property of Johnny & Jugnu. Unauthorized reproduction, modification, or commercial use of these assets is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-foreground)] mb-3">4. Customer Responsibilities</h2>
          <p>
            Customers are responsible for providing an accurate delivery address and keeping their phone active during the estimated delivery window. Failed deliveries due to unresponsive customers may result in restricted access to future ordering.
          </p>
        </section>
      </div>
    </div>
  );
}