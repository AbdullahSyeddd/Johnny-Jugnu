import { menuData } from "@/data/menu";
import { MenuData, MenuItem } from "@/types/menu";

const USE_LOCAL_DATA = true;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

export async function getMenuData(): Promise<MenuData> {
  if (USE_LOCAL_DATA) {
    return Promise.resolve(menuData);
  }

  const res = await fetch(`${API_BASE_URL}/menu/`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu data");
  }

  return res.json();
}

export async function getAllMenuItems(): Promise<MenuItem[]> {
  const data = await getMenuData();

  return [
    ...data.burgers,
    ...data.wraps,
    ...data.fries,
    ...data.beverages,
    ...data["dip-sauces"],
    ...data.deals,
  ];
}