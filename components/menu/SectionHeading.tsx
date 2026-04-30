export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center gap-4 py-12">
      <div className="h-[2px] flex-1 bg-black/10 dark:bg-white/10"></div>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[var(--color-brand-yellow)]">
        {title}
      </h2>
      <div className="h-[2px] flex-1 bg-black/10 dark:bg-white/10"></div>
    </div>
  );
}