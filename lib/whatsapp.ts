import { CartItem } from "@/types/menu";

const WHATSAPP_NUMBER = "923333022699";

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  address: string;
  instructions: string;
}

export function buildWhatsAppOrderMessage(params: {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  finalTotal: number;
  customer: CheckoutFormData;
}) {
  const { items, subtotal, deliveryFee, finalTotal, customer } = params;

  const itemLines = items.map((item, index) => {
    // Basic item line with total price calculated dynamically
    let line = `${index + 1}. ${item.name} x${item.quantity} - Rs ${item.itemTotal}`;
    
    // Extract and append all selected modifiers (Sauces, Addons) neatly
    const modifierNames = Object.values(item.selectedModifiers)
      .flat()
      .map(mod => mod.name);

    if (modifierNames.length > 0) {
      line += `\n   [Options: ${modifierNames.join(", ")}]`;
    }
    
    return line;
  });

  return [
    "Johnny & Jugnu Order Request",
    "",
    "Customer Details",
    `Full Name: ${customer.fullName}`,
    `Phone Number: ${customer.phone}`,
    `Delivery Address: ${customer.address}`,
    `Special Instructions: ${customer.instructions || "None"}`,
    "",
    "Order Summary",
    ...itemLines,
    "",
    `Subtotal: Rs ${subtotal.toFixed(2)}`,
    `Delivery Fee: Rs ${deliveryFee.toFixed(2)}`,
    `Final Total: Rs ${finalTotal.toFixed(2)}`,
  ].join("\n");
}

export function openWhatsAppOrder(message: string) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}