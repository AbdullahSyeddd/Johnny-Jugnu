"use client";

import { ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

export default function CartSummary() {
  const { items, cartTotal, removeItem } = useCartStore();

  return (
    <div className="bg-black/5 dark:bg-white/5 p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10 sticky top-24">
      <h3 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
        <ShoppingBag className="w-6 h-6 text-[var(--color-brand-yellow)]" />
        Order Summary
      </h3>
      
      {/* Dynamic Cart Items List */}
      <div className="flex flex-col gap-4 border-y border-black/10 dark:border-white/10 py-6 max-h-[40vh] overflow-y-auto pr-2">
        {items.length === 0 ? (
          <div className="text-center py-10 opacity-50">
            <p className="font-medium">Your cart is currently empty.</p>
            <p className="text-sm mt-1">Start with the sauce!</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.cartItemId} className="flex justify-between items-start gap-4 pb-4 border-b border-black/5 dark:border-white/5 last:border-0 last:pb-0">
              <div className="flex-1">
                <h4 className="font-bold uppercase text-sm">
                  {item.name} <span className="text-[var(--color-brand-yellow)] ml-1">x{item.quantity}</span>
                </h4>
                {/* Show selected sauces under the item */}
                {Object.keys(item.selectedModifiers).length > 0 && (
                  <div className="text-xs opacity-70 mt-1 font-medium">
                    {Object.entries(item.selectedModifiers).map(([_, options]) => (
                      options.map(opt => <p key={opt.name}>+ {opt.name}</p>)
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-black text-sm whitespace-nowrap">Rs {item.itemTotal}</span>
                <button onClick={() => removeItem(item.cartItemId)} className="text-red-500 opacity-50 hover:opacity-100 transition">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 pt-2 flex justify-between items-center">
        <span className="font-bold text-lg uppercase tracking-wide">Final Total</span>
        <span className="font-black text-3xl text-[var(--color-brand-yellow)]">
          Rs {cartTotal()}
        </span>
      </div>

      <Link href={items.length > 0 ? "/checkout" : "#"}>
        <button 
          disabled={items.length === 0}
          className="w-full mt-8 bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest py-4 rounded-full hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}