"use client";

import Image from "next/image";
import { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-[var(--color-background)] border-2 border-black/5 dark:border-white/5 rounded-2xl p-4 transition-all hover:border-[var(--color-brand-yellow)] hover:shadow-xl"
    >
      <div className="relative w-full aspect-square mb-4 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden">
        <Image 
          src={item.image || "/wehshi.jpg"} 
          alt={item.name} 
          fill 
          className="object-contain group-hover:scale-110 transition-transform duration-500 p-4" 
        />
      </div>
      
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-black text-xl uppercase tracking-wide">{item.name}</h3>
          <p className="text-sm opacity-70 line-clamp-2 mt-1">{item.description}</p>
        </div>
        <span className="font-bold whitespace-nowrap bg-[var(--color-brand-yellow)]/20 px-2 py-1 rounded text-sm">
          Rs {item.price}
        </span>
      </div>
      
      <button className="w-full mt-4 py-3 rounded-full border-2 border-black/10 dark:border-white/10 font-bold uppercase tracking-wider text-sm group-hover:bg-[var(--color-brand-yellow)] group-hover:border-[var(--color-brand-yellow)] group-hover:text-black transition-all">
        {item.modifiers ? "Build Your Order" : "Add to Cart"}
      </button>
    </div>
  );
}