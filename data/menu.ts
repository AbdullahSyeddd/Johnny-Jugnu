import { MenuItem } from "@/types/menu";

// Reusable modifiers for Mains
const mainModifiers = [
  {
    id: "sauces",
    name: "MAKE IT SAUCY",
    isRequired: true,
    minSelections: 1,
    maxSelections: 2,
    options: [
      { name: "Atomic", price: 0 },
      { name: "Chipotle", price: 0 },
      { name: "Garlic", price: 0 },
      { name: "Greek", price: 0 },
      { name: "Mushroom", price: 0 },
    ],
  },
  {
    id: "addons",
    name: "MAKE IT BETTER",
    isRequired: false,
    minSelections: 0,
    maxSelections: 5,
    options: [
      { name: "'Shrooms", price: 50 },
      { name: "Jalapenos", price: 50 },
      { name: "Cheese", price: 50 },
      { name: "Pickles", price: 50 },
      { name: "Sweet Corn", price: 50 },
      { name: "Extra Patty", price: 250 },
      { name: "Sauce Dip", price: 100 },
    ],
  },
  {
    id: "meals",
    name: "MAKE IT A MEAL",
    isRequired: false,
    minSelections: 0,
    maxSelections: 1,
    options: [
      { name: "Smol Meal", price: 350 },
      { name: "Smol Meal (With Seasoning)", price: 360 },
      { name: "Upsize Meal", price: 400 },
      { name: "Upsize Meal (With Seasoning)", price: 410 },
      { name: "Nugg Meal", price: 730 },
      { name: "Nugg Meal (With Seasoning)", price: 740 },
      { name: "Lemonade Meal", price: 400 }
    ],
  }
];

export const menuData: MenuItem[] = [
  // MAINS
  {
    id: "m1",
    name: "Tortilla Wrap",
    description: "Grilled wrap with crisp vegetables and your choice of sauces.",
    price: 1030,
    image: "/wehshi.jpg",
    category: "Mains",
    modifiers: mainModifiers,
  },
  {
    id: "m2",
    name: "Smol Wrap",
    description: "Compact, fast, and built for a sharp hit of flavor.",
    price: 730,
    image: "/wehshi.jpg", 
    category: "Mains",
    modifiers: mainModifiers,
  },
  {
    id: "m3",
    name: "Fillet",
    description: "Crisp and premium, with a clean sauce finish and juicy texture.",
    price: 830,
    image: "/wehshi.jpg",
    category: "Mains",
    modifiers: mainModifiers,
  },
  {
    id: "m4",
    name: "Wehshi",
    description: "Our signature crispy chicken fillet with a sauce-driven finish.",
    price: 830,
    image: "/wehshi.jpg", 
    category: "Mains",
    modifiers: mainModifiers,
  },
  {
    id: "m5",
    name: "Nugg Wrap",
    description: "Crispy nuggets wrapped with fresh veggies and signature sauces.",
    price: 1030,
    image: "/wehshi.jpg", 
    category: "Mains",
    modifiers: mainModifiers,
  },
  {
    id: "m6",
    name: "Smol Nugg Wrap",
    description: "A smaller take on our classic Nugg Wrap.",
    price: 730,
    image: "/wehshi.jpg", 
    category: "Mains",
    modifiers: mainModifiers,
  },
  
  // NUGGETS
  {
    id: "n1",
    name: "Nuggs (3 Pieces)",
    description: "Like you've never had before.",
    price: 330,
    image: "/wehshi.jpg",
    category: "Nuggets",
  },
  {
    id: "n2",
    name: "Nuggs (6 Pieces)",
    description: "Like you've never had before.",
    price: 610,
    image: "/wehshi.jpg",
    category: "Nuggets",
  },
  {
    id: "n3",
    name: "Rami Nuggs",
    description: "6 Pieces tossed in signature Rami sauce.",
    price: 610,
    image: "/wehshi.jpg",
    category: "Nuggets",
  },
  {
    id: "n4",
    name: "Balti",
    description: "You know what kicks? Thirty Six Nuggs with 5 Sauces.",
    price: 2700,
    image: "/wehshi.jpg",
    category: "Nuggets",
  },

  // WINGS
  {
    id: "w1",
    name: "Crispy Wings",
    description: "8 Pieces + 1 Sauce",
    price: 700,
    image: "/crispywing.jpg",
    category: "Wings",
  },
  {
    id: "w2",
    name: "Gochu Wings",
    description: "8 Pieces + Gochujang Sauce",
    price: 750,
    image: "/guchuwings.jpg",
    category: "Wings",
  },
  {
    id: "w3",
    name: "Rami Wings",
    description: "8 Pieces + Rami Sauce",
    price: 750,
    image: "/ramiwings.jpg",
    category: "Wings",
  },

  // LEMONADE
  {
    id: "l1",
    name: "Thirst Aid",
    description: "Signature refreshing lemonade.",
    price: 200,
    image: "/wehshi.jpg",
    category: "Lemonade",
  },
  {
    id: "l2",
    name: "Thirst Aid Mint",
    description: "Refreshing mint infused lemonade.",
    price: 200,
    image: "/wehshi.jpg",
    category: "Lemonade",
  },
  {
    id: "l3",
    name: "Sunset",
    description: "Premium strawberry infused lemonade.",
    price: 400,
    image: "/wehshi.jpg",
    category: "Lemonade",
  },
  {
    id: "l4",
    name: "Wildberry",
    description: "Berry blend lemonade.",
    price: 400,
    image: "/wehshi.jpg",
    category: "Lemonade",
  },
  {
    id: "l5",
    name: "Golden Hour",
    description: "Tropical peach and mango notes.",
    price: 400,
    image: "/wehshi.jpg",
    category: "Lemonade",
  },
  {
    id: "l6",
    name: "Slurp",
    description: "Blue raspberry signature drink.",
    price: 400,
    image: "/wehshi.jpg",
    category: "Lemonade",
  }
];