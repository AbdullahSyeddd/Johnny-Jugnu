import { create } from 'zustand';
import { CartItem, MenuItem, ModifierOption } from '@/types/menu';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: MenuItem, quantity: number, selectedModifiers: Record<string, ModifierOption[]>, itemTotal: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (item, quantity, selectedModifiers, itemTotal) => {
    const cartItemId = `${item.id}-${Date.now()}`;
    set((state) => ({
      items: [...state.items, { ...item, cartItemId, quantity, selectedModifiers, itemTotal }],
      // Yahan se isOpen: true hata diya gaya hai. Ab auto-open nahi hoga!
    }));
  },
  
  removeItem: (cartItemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.cartItemId !== cartItemId)
    }));
  },
  
  clearCart: () => set({ items: [] }),
  
  cartTotal: () => get().items.reduce((total, item) => total + item.itemTotal, 0),
}));