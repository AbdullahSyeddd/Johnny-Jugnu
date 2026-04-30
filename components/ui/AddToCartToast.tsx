"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";

export default function AddToCartToast() {
  const items = useCartStore((state) => state.items);
  const [show, setShow] = useState(false);
  const [lastItem, setLastItem] = useState("");

  useEffect(() => {
    if (items.length > 0) {
      // Get the name of the most recently added item
      setLastItem(items[items.length - 1].name);
      setShow(true);
      
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000); // 2 seconds ke baad gayab

      return () => clearTimeout(timer);
    }
  }, [items.length]);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 animate-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-full border-2 border-[var(--color-brand-yellow)] bg-black px-6 py-3 text-sm font-bold text-[var(--color-brand-yellow)] shadow-2xl flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        {lastItem} added to cart!
      </div>
    </div>
  );
}