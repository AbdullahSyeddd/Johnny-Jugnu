export interface ModifierOption {
  name: string;
  price: number;
}

export interface ModifierGroup {
  id: string;
  name: string; // e.g., "MAKE IT SAUCY"
  isRequired: boolean;
  minSelections: number; // e.g., 1
  maxSelections: number; // e.g., 2
  options: ModifierOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  modifiers?: ModifierGroup[]; // Optional, because Lemonades might not have sauces
}

export interface CartItem extends MenuItem {
  cartItemId: string; // Unique ID for the cart (because 2 Wehshi burgers can have different sauces)
  quantity: number;
  selectedModifiers: Record<string, ModifierOption[]>; 
  itemTotal: number;
}
