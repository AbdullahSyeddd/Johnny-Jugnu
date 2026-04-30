"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/menu/SectionHeading";
import MenuGrid from "@/components/menu/MenuGrid";
import ProductModal from "@/components/menu/ProductModal";
import { menuData } from "@/data/menu";
import { MenuItem } from "@/types/menu";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Har category ko alag alag filter kar rahay hain
  const mains = menuData.filter((item) => item.category === "Mains");
  const nuggets = menuData.filter((item) => item.category === "Nuggets"); // Added Nuggets filter
  const wings = menuData.filter((item) => item.category === "Wings");
  const lemonades = menuData.filter((item) => item.category === "Lemonade");

  return (
    <main className="min-h-screen bg-[var(--color-background)] pb-20">
      <Hero />
      
      <div id="menu" className="container mx-auto px-4 max-w-6xl">
        
        {/* MAINS */}
        <SectionHeading title="Signature Mains" />
        <MenuGrid items={mains} onItemClick={handleOpenModal} />

        {/* NUGGETS (Yeh miss tha!) */}
        <SectionHeading title="Juicy Nuggs" />
        <MenuGrid items={nuggets} onItemClick={handleOpenModal} />

        {/* WINGS */}
        <SectionHeading title="Wings" />
        <MenuGrid items={wings} onItemClick={handleOpenModal} />

        {/* LEMONADES */}
        <SectionHeading title="Lemonades" />
        <MenuGrid items={lemonades} onItemClick={handleOpenModal} />
        
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={selectedItem} 
      />
    </main>
  );
}