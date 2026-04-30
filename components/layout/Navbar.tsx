"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; 
import { useCartStore } from "@/store/cart-store"; // Store import kiya

export default function Navbar() {
  // Store se items array aur openCart function nikal liya
  const { items, openCart } = useCartStore(); 

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/10 bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        
{/* LOGO */}
        <Link href="/" className="flex items-center">
          {/* Width aur Height increase kar di hai (Mobile pe 150px, Desktop pe 180px) */}
          <div className="relative w-[150px] h-[60px] md:w-[180px] md:h-[70px]">
            <Image 
              src="/Logo.png" 
              alt="Brand Logo" 
              fill
              /* 'invert dark:invert-0' is the magic trick. 
                 Yeh white logo ko light mode mein black kar dega! */
              className="object-contain invert dark:invert-0 transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-8 font-black text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-[var(--color-brand-yellow)] transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-[var(--color-brand-yellow)] transition-colors">ABOUT</Link>
          {/* Menu ka link direct page section par jaye ga */}
          <Link href="/#menu" className="hover:text-[var(--color-brand-yellow)] transition-colors">MENU</Link>
          <Link href="/contact" className="hover:text-[var(--color-brand-yellow)] transition-colors">CONTACT</Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Cart Button with functionality */}
          <button 
            onClick={openCart} 
            className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <ShoppingBag className="w-6 h-6" />
            
            {/* Jab cart empty ho toh 0 na dikhaye, balkay badge gayab ho jaye (Better UX) */}
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-brand-yellow)] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                {items.length}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}