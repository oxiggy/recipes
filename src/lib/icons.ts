import type { ComponentType } from "svelte";
import { ChefHat, Soup, Salad, Cake } from "lucide-svelte";

export const icons: Record<string, ComponentType> = {
  "chef-hat": ChefHat,
  "soup": Soup,
  "salad": Salad,
  "cake": Cake
};

export function getIcon(name?: string): ComponentType | null {
  return name ? icons[name] ?? null : null;
}
