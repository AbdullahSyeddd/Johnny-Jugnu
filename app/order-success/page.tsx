import Link from "next/link";

interface OrderSuccessPageProps {
  searchParams: Promise<{
    tracking?: string;
    phone?: string;
  }>;
}

export default async function OrderSuccessPage({ searchParams }: OrderSuccessPageProps) {
  const params = await searchParams;
  const tracking = params.tracking || `#JJ-${Math.floor(1000 + Math.random() * 9000)}`;
  const phone = params.phone || "your provided number";

  return (
    <div className="container mx-auto px-4 flex min-h-[75vh] items-center justify-center py-12">
      <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-full max-w-2xl rounded-3xl p-8 md:p-14 text-center shadow-2xl animate-in zoom-in duration-500">
        
        {/* SUCCESS ICON */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-brand-yellow)] text-black mb-8 shadow-lg">
          <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--color-brand-yellow)]">
          Order Confirmed
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          Your order is in the <span className="text-[var(--color-brand-yellow)]">kitchen.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg opacity-80 font-medium">
          Get ready! We will contact you at <span className="font-bold text-[var(--color-brand-yellow)]">{phone}</span> shortly to confirm dispatch details.
        </p>

        <div className="mx-auto mt-10 max-w-sm rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-brand-yellow)] p-6 shadow-inner">
          <p className="text-sm font-bold uppercase tracking-wide opacity-70">Tracking ID</p>
          <p className="mt-1 text-4xl font-black">{tracking}</p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
            Back to Menu
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-black/20 dark:border-white/20 font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}