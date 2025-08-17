import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind + conditional classes
 * @param  {...any} inputs
 * @returns string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
