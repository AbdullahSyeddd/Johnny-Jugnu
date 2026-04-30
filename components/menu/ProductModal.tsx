"use client";

import { useState, useEffect } from "react";
import { MenuItem, ModifierGroup, ModifierOption } from "@/types/menu";
import { X } from "lucide-react";
import { useCartStore } from "@/store/cart-store"; // Store import kiya hai

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

export default function ProductModal({ isOpen, onClose, item }: ProductModalProps) {
  // Zustand store se addItem function nikal liya
  const addItem = useCartStore((state) => state.addItem);

  const [selectedModifiers, setSelectedModifiers] = useState<Record<string, ModifierOption[]>>({});
  const [quantity, setQuantity] = useState(1);

  // Reset state whenever modal opens or item changes
  useEffect(() => {
    if (isOpen) {
      setSelectedModifiers({});
      setQuantity(1);
    }
  }, [isOpen, item]);

  // EARLY RETURNS
  if (!isOpen || !item) return null;

  // LOGIC FUNCTIONS
  const handleModifierToggle = (group: ModifierGroup, option: ModifierOption) => {
    setSelectedModifiers((prev) => {
      const currentSelected = prev[group.id] || [];
      const isAlreadySelected = currentSelected.some((opt) => opt.name === option.name);

      let newSelected: ModifierOption[];

      if (isAlreadySelected) {
        newSelected = currentSelected.filter((opt) => opt.name !== option.name);
      } else {
        if (group.maxSelections === 1) {
          newSelected = [option];
        } else if (currentSelected.length < group.maxSelections) {
          newSelected = [...currentSelected, option];
        } else {
          newSelected = currentSelected;
        }
      }

      return { ...prev, [group.id]: newSelected };
    });
  };

  const calculateTotal = () => {
    let total = item.price;
    Object.values(selectedModifiers).forEach((options) => {
      options.forEach((opt) => {
        total += opt.price;
      });
    });
    return total * quantity;
  };

  const isAddToCartDisabled = () => {
    if (!item.modifiers) return false;
    for (const group of item.modifiers) {
      if (group.isRequired) {
        const selectedCount = selectedModifiers[group.id]?.length || 0;
        if (selectedCount < group.minSelections) {
          return true;
        }
      }
    }
    return false;
  };

  const handleAddToCart = () => {
    // Ab yeh properly cart mein data bhej raha hai calculations ke sath
    addItem(item, quantity, selectedModifiers, calculateTotal());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[var(--color-background)] w-full max-w-2xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
          <h2 className="text-2xl font-black">{item.name}</h2>
          <button onClick={onClose} className="p-2 bg-black/5 dark:bg-white/10 rounded-full hover:scale-110 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <p className="text-lg opacity-80">{item.description}</p>

          {/* MODIFIERS MAPPING */}
          {item.modifiers?.map((group) => (
            <div key={group.id} className="space-y-4 bg-black/5 dark:bg-white/5 p-4 rounded-xl">
              <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-2">
                <h3 className="font-bold text-lg">{group.name}</h3>
                {group.isRequired && (
                  <span className="text-xs font-bold bg-red-500 text-white px-2 py-1 rounded">
                    REQUIRED ({group.minSelections})
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.options.map((option) => {
                  const isSelected = selectedModifiers[group.id]?.some((opt) => opt.name === option.name);
                  return (
                    <label 
                      key={option.name} 
                      className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        isSelected 
                        ? "border-[var(--color-brand-yellow)] bg-[var(--color-brand-yellow)]/10" 
                        : "border-transparent bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input 
                          type={group.maxSelections === 1 ? "radio" : "checkbox"}
                          name={group.id}
                          checked={isSelected || false}
                          onChange={() => handleModifierToggle(group, option)}
                          className="w-4 h-4 accent-[var(--color-brand-yellow)]"
                        />
                        <span className="font-medium">{option.name}</span>
                      </div>
                      {option.price > 0 && (
                        <span className="opacity-70 text-sm">+Rs {option.price}</span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-black/10 dark:bg-white/10 rounded-full p-1">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/20"
              >-</button>
              <span className="w-8 text-center font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/20"
              >+</button>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled()}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
              isAddToCartDisabled() 
              ? "bg-gray-400 text-gray-700 cursor-not-allowed opacity-50" 
              : "bg-[var(--color-brand-yellow)] text-black hover:scale-105 shadow-xl"
            }`}
          >
            {isAddToCartDisabled() ? "Select Required Options" : `Add to Cart (Rs ${calculateTotal()})`}
          </button>
        </div>

      </div>
    </div>
  );
}