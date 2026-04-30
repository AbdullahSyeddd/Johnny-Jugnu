"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart-store";

const DELIVERY_FEE = 220;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart, cartTotal } = useCartStore();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const subtotal = cartTotal();
  const finalTotal = items.length ? subtotal + DELIVERY_FEE : 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    if (!items.length) return;
    if (!form.fullName || !form.phone || !form.address) return;

    setLoading(true);

    const trackingId = `#JJ-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      clearCart();
      router.push(
        `/order-success?tracking=${encodeURIComponent(trackingId)}&phone=${encodeURIComponent(form.phone)}`
      );
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Review & <span className="text-[var(--color-brand-yellow)]">Confirm</span>
        </h1>
        <p className="mt-4 text-lg opacity-70">
          Almost there! Review your items and provide your delivery details below.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        
        {/* --- ORDER SUMMARY SECTION --- */}
        <section className="bg-black/5 dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-black/10 dark:border-white/10 h-fit">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
            <h2 className="text-2xl font-black uppercase tracking-wide">
              Order Summary
            </h2>
            <span className="bg-[var(--color-brand-yellow)] text-black px-3 py-1 rounded-full text-xs font-bold">
              {items.length} ITEMS
            </span>
          </div>

          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="text-center opacity-50 py-10 font-bold uppercase tracking-widest border-2 border-dashed border-black/10 dark:border-white/10 rounded-2xl">
                Your cart is empty.
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-[var(--color-background)] rounded-2xl p-5 shadow-sm border border-black/5 dark:border-white/5"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg uppercase tracking-wide">
                        {item.name} <span className="text-[var(--color-brand-yellow)] ml-1">x{item.quantity}</span>
                      </h3>
                      
                      {/* Mapping the new selectedModifiers structure */}
                      {Object.keys(item.selectedModifiers).length > 0 && (
                        <div className="mt-2 space-y-1 text-sm opacity-70 font-medium">
                          {Object.entries(item.selectedModifiers).map(([groupId, options]) => (
                            options.map(opt => (
                              <p key={opt.name}>+ {opt.name}</p>
                            ))
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="font-black text-xl whitespace-nowrap">
                      Rs {item.itemTotal}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Totals */}
          <div className="mt-8 space-y-3 border-t border-black/10 dark:border-white/10 pt-6">
            <div className="flex items-center justify-between text-sm opacity-70 font-medium">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>
            <div className="flex items-center justify-between text-sm opacity-70 font-medium">
              <span>Delivery Fee</span>
              <span>Rs {items.length ? DELIVERY_FEE : 0}</span>
            </div>
            <div className="flex items-center justify-between text-2xl font-black pt-2">
              <span>Total</span>
              <span className="text-[var(--color-brand-yellow)]">Rs {finalTotal}</span>
            </div>
          </div>
        </section>

        {/* --- DELIVERY INFO SECTION --- */}
        <section className="bg-black/5 dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-black/10 dark:border-white/10 h-fit">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-6">
            Delivery Details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                Full Name *
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-[var(--color-background)] border-2 border-black/10 dark:border-white/10 rounded-xl p-3 focus:border-[var(--color-brand-yellow)] outline-none transition"
                placeholder=" "
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                Phone Number *
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[var(--color-background)] border-2 border-black/10 dark:border-white/10 rounded-xl p-3 focus:border-[var(--color-brand-yellow)] outline-none transition"
                placeholder="0300-XXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                Delivery Address *
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[var(--color-background)] border-2 border-black/10 dark:border-white/10 rounded-xl p-3 focus:border-[var(--color-brand-yellow)] outline-none transition resize-none"
                placeholder="Enter complete address..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide mb-2">
                Special Instructions
              </label>
              <textarea
                name="instructions"
                value={form.instructions}
                onChange={handleChange}
                rows={2}
                className="w-full bg-[var(--color-background)] border-2 border-black/10 dark:border-white/10 rounded-xl p-3 focus:border-[var(--color-brand-yellow)] outline-none transition resize-none"
                placeholder="Delete the order if anything is missing..."
              />
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={loading || !items.length || !form.fullName || !form.phone || !form.address}
              className="w-full mt-4 bg-[var(--color-brand-yellow)] text-black font-black uppercase tracking-widest py-4 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-xl"
            >
              {loading ? "Processing Order..." : "Place Order"}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}