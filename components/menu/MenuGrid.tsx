"use client";

import MenuCard from "./MenuCard";
import { MenuItem } from "@/types/menu";

interface MenuGridProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

export default function MenuGrid({ items, onItemClick }: MenuGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </div>
  );
}