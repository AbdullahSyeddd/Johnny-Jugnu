import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Johnny & Jugnu",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          Get in Touch
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          Reach our team for orders, support, or general <span className="text-[var(--color-brand-yellow)]">enquiries.</span>
        </h1>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        
        {/* INFO SECTION */}
        <section className="bg-black/5 dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-black/10 dark:border-white/10 h-fit">
          <h2 className="text-3xl font-black uppercase tracking-wide mb-8">
            Visit or Call
          </h2>

          <div className="space-y-8 opacity-80 font-medium">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-brand-yellow)] uppercase">Headquarters & Hubs</h3>
              <p className="mt-2 leading-relaxed">
                Johar Town • 28 Civic Centre<br />
                DHA Phase 4 • CC Commercial Area<br />
                Bahria Town • Sector C Commercial Area<br />
                Lahore, Pakistan
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[var(--color-brand-yellow)] uppercase">Opening Hours</h3>
              <p className="mt-2 leading-relaxed">
                Standard Hubs: 12:00 PM – 3:00 AM<br />
                Emporium Mall: 12:00 PM – 11:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[var(--color-brand-yellow)] uppercase">Contact Options</h3>
              <p className="mt-2 leading-relaxed">
                Support: +92 300 0000000<br />
                Email: support@johnnyandjugnu.com
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="bg-[var(--color-background)] p-8 md:p-10 rounded-3xl border border-black/10 dark:border-white/10 shadow-lg">
          <h2 className="text-3xl font-black uppercase tracking-wide mb-2">
            Send a Message
          </h2>
          <p className="opacity-70 mb-8 font-medium">
            Fill out the form below and our team will get back to you during operating hours.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">Full Name</label>
              <input className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent rounded-xl p-4 focus:border-[var(--color-brand-yellow)] outline-none transition" placeholder="Enter your name" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Email</label>
                <input type="email" className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent rounded-xl p-4 focus:border-[var(--color-brand-yellow)] outline-none transition" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2">Phone</label>
                <input className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent rounded-xl p-4 focus:border-[var(--color-brand-yellow)] outline-none transition" placeholder="03XX-XXXXXXX" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">Message</label>
              <textarea rows={5} className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent rounded-xl p-4 focus:border-[var(--color-brand-yellow)] outline-none transition resize-none" placeholder="How can we help you?" />
            </div>

            <button type="button" className="w-full bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest py-4 rounded-full hover:scale-105 transition-transform shadow-xl">
              Submit Enquiry
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}