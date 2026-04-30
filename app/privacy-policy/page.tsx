import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Johnny & Jugnu",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl">
      <div className="border-b border-black/10 dark:border-white/10 pb-10">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          Legal & Privacy
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          Privacy Policy & Terms of Service
        </h1>
      </div>

      <div className="mt-10 space-y-10 text-lg opacity-80 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] mb-4">Introduction</h2>
          <p>
            Johnny & Jugnu is committed to protecting the privacy of its guests and maintaining responsible standards in the collection and handling of personal information. This Privacy Policy explains how information may be collected through our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] mb-4">Information we collect</h2>
          <p>
            When a guest places an order, submits a contact enquiry, or communicates with our team, we may collect personal details such as full name, phone number, delivery address, and any information voluntarily included in special instructions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] mb-4">WhatsApp and Ordering</h2>
          <p>
            Orders placed through our system may be routed to our operational WhatsApp numbers for final confirmation and dispatch. By proceeding, the user acknowledges that communication is then subject to the privacy practices of the respective platform. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--color-brand-yellow)] mb-4">User Responsibilities</h2>
          <p>
            Guests are responsible for providing accurate and complete information when placing orders. Johnny & Jugnu is not responsible for delays, failed deliveries, or communication errors resulting from incomplete names or inaccurate delivery details.
          </p>
        </section>
      </div>
    </div>
  );
}