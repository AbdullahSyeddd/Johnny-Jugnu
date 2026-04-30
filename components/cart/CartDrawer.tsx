"use client";

import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, cartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      
      {/* Click Outside to Close Area */}
      <div className="absolute inset-0 cursor-pointer" onClick={closeCart}></div>

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[var(--color-background)] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
          <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[var(--color-brand-yellow)]" />
            Your Order
          </h2>
          <button onClick={closeCart} className="p-2 bg-black/5 dark:bg-white/10 rounded-full hover:scale-110 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center opacity-50 mt-20 space-y-4">
              <ShoppingBag className="w-16 h-16 mx-auto opacity-20" />
              <p className="font-bold uppercase tracking-widest text-lg">Your cart is empty</p>
              <p className="text-sm">Start with the sauce!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartItemId} className="flex gap-4 border-b border-black/5 dark:border-white/5 pb-6">
                <div className="relative w-20 h-20 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden flex-shrink-0">
                  {item.image && <Image src={item.image} alt={item.name} fill className="object-contain p-2" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg leading-tight uppercase">
                      {item.name} <span className="text-[var(--color-brand-yellow)] ml-1">x{item.quantity}</span>
                    </h4>
                    <button onClick={() => removeItem(item.cartItemId)} className="text-red-500 hover:text-red-700 bg-red-500/10 p-2 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Rendering Modifiers (Sauces, Add-ons) */}
                  <div className="text-sm opacity-70 mt-2 space-y-1 font-medium">
                    {Object.entries(item.selectedModifiers).map(([groupId, options]) => (
                      options.map(opt => <div key={opt.name}>+ {opt.name}</div>)
                    ))}
                  </div>
                  
                  <div className="font-black text-lg mt-3">Rs {item.itemTotal}</div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout Button */}
        {items.length > 0 && (
          <div className="p-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold uppercase tracking-wide">Subtotal</span>
              <span className="font-black text-3xl text-[var(--color-brand-yellow)]">Rs {cartTotal()}</span>
            </div>
            <Link href="/checkout" onClick={closeCart}>
              <button className="w-full bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}